import { useState } from "react";
import ContextQuoter from "./ContextQuoter";

export const ContextProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    manufactured: '',
    year: '',
    plan: ''
  });

  const onHandleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const onSetError = () => setError(!error);

  return (
    <ContextQuoter.Provider value={{
      formData,
      error,
      onHandleChange,
      onSetError
    }}>
      { children }
    </ContextQuoter.Provider>
  )
}