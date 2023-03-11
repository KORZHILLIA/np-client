import useForm from "../../shared/hooks/useForm";
import FormInput from "../../shared/components/FormInput";
import styles from "./tNNInputForm.module.scss";

const initialState = { number: "" };

const TNNInputForm = ({ onSubmit }) => {
  const { formState, onInputChange, onFormSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { number } = formState;
  return (
    <form onSubmit={onFormSubmit}>
      <FormInput
        label="Invoice number"
        type="text"
        name="number"
        value={number}
              placeholder="Type here..."
              onChange={onInputChange}
      />
    </form>
  );
};

export default TNNInputForm;
