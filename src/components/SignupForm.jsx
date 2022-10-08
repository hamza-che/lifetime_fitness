import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReCAPTCHA from "react-google-recaptcha";
// Contexts
import { SignupFormContextConsumer } from "../contexts/SignupFormContext";
import { MembersPlansContextConsumer } from "../contexts/MembersPlansContext";
// Data
import plansData from "../data/plansData";
// Icons
import checkedIcon from "../assets/icons/checked.svg";
import uncheckedIcon from "../assets/icons/unchecked.svg";
import calendarIcon from "../assets/icons/calendar.svg";

const SignupForm = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    selectedDate,
    setSelectedDate,
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword,
    passwordInputType,
    passwordInputIcon,
    showHidePassword,
  } = SignupFormContextConsumer();

  const { setIsModalOpen, selectedPlan } = MembersPlansContextConsumer();

  const onChange = value => {
    console.log("Captcha value:", value);
  };

  return (
    <form className="max-w-sm" onSubmit={e => e.preventDefault()}>
      {/* Name */}
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          name="fisrtname"
          placeholder="First name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          className="sm:w-1/2 px-2 py-3 bg-dark-800 text-light rounded placeholder:text-dark-400 focus:outline focus:outline-green focus:placeholder:text-green"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          className="sm:w-1/2 px-2 py-3 bg-dark-800 text-light rounded placeholder:text-dark-400 focus:outline focus:outline-green focus:placeholder:text-green"
        />
      </div>
      {/* Email */}
      <div className="my-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="max-w-sm px-2 py-3 bg-dark-800 text-light rounded w-full placeholder:text-dark-400 focus:outline focus:outline-green focus:placeholder:text-green"
        />
      </div>
      {/* Phone number */}
      <div className="my-3">
        <input
          type="tel"
          name="phone_number"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={setPhoneNumber}
          className="max-w-sm px-2 py-3 bg-dark-800 text-light rounded w-full placeholder:text-dark-400 focus:outline focus:outline-green focus:placeholder:text-green"
        />
      </div>
      {/* Birthdate */}
      <div className="mb-3 mt-4 relative">
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat="dd-MMMM-yyyy"
          showYearDropdown
          scrollableMonthYearDropdown
          className="max-w-sm px-2 py-3 bg-dark-800 text-dark-400 rounded w-full focus:outline focus:text-green focus:outline-green"
        />
        <img
          src={calendarIcon}
          alt="choose your birth date"
          className="absolute top-3 right-3 pointer-events-none"
        />
        <span className="text-green bg-dark-600 text-xs px-1 absolute -top-2 left-2 rounded">
          Date of birth
        </span>
      </div>
      {/* Password */}
      <div className="my-3 relative">
        <input
          type={passwordInputType}
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="max-w-sm px-2 py-3 bg-dark-800 text-light rounded w-full placeholder:text-dark-400 focus:outline focus:outline-green focus:placeholder:text-green"
        />
        <span
          className="absolute right-0 top-4 w-8 h-8 text-dark-400"
          onClick={showHidePassword}
        >
          {passwordInputIcon}
        </span>
      </div>
      {/* Check password if it matches the requirements */}
      <ul className="my-3">
        <li className="flex gap-1 text-dark-400">
          <img src={uncheckedIcon} alt="unchecked" />
          <span>Uppercase letters</span>
        </li>
        <li className="flex gap-2 my-2 text-dark-400">
          <img src={checkedIcon} alt="checked" />
          <span>Lowercase letters</span>
        </li>
        <li className="flex gap-2 text-dark-400">
          <img src={checkedIcon} alt="checked" />
          <span>Numbers</span>
        </li>
      </ul>
      {/* Repeat password */}
      <div>
        <input
          type="password"
          name="password"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={e => setRepeatPassword(e.target.value)}
          className="max-w-sm px-2 py-3 bg-dark-800 text-light rounded w-full placeholder:text-dark-400 focus:outline focus:outline-green focus:placeholder:text-green"
        />
      </div>
      <div className="flex justify-center items-center my-3">
        <ReCAPTCHA sitekey="6Le82l4iAAAAAEL5OGkzbrnJDYvXmN8tvyUsvZDV" />
      </div>
      {plansData.map(
        plan =>
          plan.name === selectedPlan ? (
            <button
              key={plan.id}
              type="submit"
              className="bg-green text-white py-3 px-2 block w-full rounded text-center my-3"
            >
              SIGN UP FOR {plan.price}$
            </button>
          ) : null
      )}
      <a
        href="#"
        onClick={() => setIsModalOpen(true)}
        className="bg-dark text-green border-4 border-green py-3 px-2 block rounded mt-3 text-center"
      >
        SELECT OTHER PLAN
      </a>
      <a href="#" className="text-green text-center block w-fit mx-auto mt-8">
        I HAVE AN ACCOUNT
      </a>
    </form>
  );
};

export default SignupForm;
