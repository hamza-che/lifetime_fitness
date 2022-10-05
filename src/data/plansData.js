import goldBg from "../assets/images/gold.svg";
import silverBg from "../assets/images/silver.svg";
import bronzeBg from "../assets/images/bronze.svg";

const plansData = [
  {
    id: 0,
    name: "gold",
    price: "45",
    bg: goldBg,
    features: [
      "Unlimited gym access",
      "5 Training programs",
      "Free fitness consultation",
      "Personal trainer",
    ],
  },
  {
    id: 1,
    name: "silver",
    price: "35",
    bg: silverBg,
    features: [
      "Unlimited gym access",
      "5 Training programs",
      "Free fitness consultation",
    ],
  },
  {
    id: 2,
    name: "bronze",
    price: "20",
    bg: bronzeBg,
    features: [ "Unlimited gym access", "5 Training programs" ],
  },
];

export default plansData;
