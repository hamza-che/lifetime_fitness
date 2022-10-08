import { createContext, useContext, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const SignupFormContext = createContext();

const SignupFormContextProvider = ({ children }) => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phoneNumber, setPhoneNumber ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ repeatPassword, setRepeatPassword ] = useState("");
  const [ passwordInputType, setPasswordInputType ] = useState("password");
  const [ passwordInputIcon, setPasswordinputIcon ] = useState(<BsEyeFill />);
  const [ selectedDate, setSelectedDate ] = useState(new Date("29-April-2001"));

  const showHidePassword = () => {
    if (passwordInputType === "password") {
      setPasswordInputType("text");
      setPasswordinputIcon(<BsEyeSlashFill />);
    } else {
      setPasswordInputType("password");
      setPasswordinputIcon(<BsEyeFill />);
    }
  };

  return (
    <SignupFormContext.Provider
      value={{
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
        setPasswordInputType,
        passwordInputIcon,
        setPasswordinputIcon,
        showHidePassword,
      }}
    >
      {children}
    </SignupFormContext.Provider>
  );
};

function SignupFormContextConsumer() {
  return useContext(SignupFormContext);
}

export { SignupFormContextProvider, SignupFormContextConsumer };
