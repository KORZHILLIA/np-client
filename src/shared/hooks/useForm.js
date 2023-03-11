import { useState } from "react";

const useForm = ({ initialState, onSubmit, reset = true }) => {
  const [formState, setFormState] = useState(initialState);

  const onInputChange = ({ target }) => {
    const { type, name, checked, value } = target;
    const newValue = type === "checkbox" ? checked : value;
    setFormState((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const formReset = () => setFormState(initialState);

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...formState });
    if (reset) {
      formReset();
    }
  };

  return {
    formState,
    onInputChange,
    onFormSubmit,
  };
};

export default useForm;
