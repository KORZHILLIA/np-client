import useForm from "../../shared/hooks/useForm";
import FormInput from "../../shared/components/FormInput";
import styles from "./tNNInputForm.module.scss";

const initialState = { number: "" };

const TNNInputForm = ({ onSubmit, currentNumber }) => {
  const { formState, onInputChange, onFormSubmit } = useForm({
    initialState,
    onSubmit,
    outerVar: { name: "number", value: currentNumber },
  });

  const { number } = formState;

  return (
    <form onSubmit={onFormSubmit}>
      <FormInput
        label="Номер накладної"
        type="text"
        name="number"
        value={number}
        pattern="^[2,5]{1}\d{13}"
        placeholder="59000937551465"
        onChange={onInputChange}
        generalStyle={styles.general}
        labelStyle={styles.label}
        inputStyle={styles.input}
      />
      <button className={styles.btn} type="submit">
        Перевірити
      </button>
    </form>
  );
};

export default TNNInputForm;
