import { createContext, useContext, useState } from "react";

const MembersPlansContext = createContext();

const MembersPlansContextProvider = ({ children }) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ selectedPlan, setSelectedPlan ] = useState("gold");

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const selectPlan = plan => {
    setSelectedPlan(plan);
    setIsModalOpen(false);
  };

  return (
    <MembersPlansContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        onModalClose,
        selectedPlan,
        selectPlan,
      }}
    >
      {children}
    </MembersPlansContext.Provider>
  );
};

function MembersPlansContextConsumer() {
  return useContext(MembersPlansContext);
}

export { MembersPlansContextProvider, MembersPlansContextConsumer };
