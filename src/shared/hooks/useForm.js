import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import tnnSelectors from "../../redux/tnn/tnn-selectors";
import { clearTNNCurrent } from "../../redux/tnn/tnn-actions";

const useForm = ({ initialState, onSubmit, outerVar, reset = false }) => {
  const [formState, setFormState] = useState(initialState);
  const dispatch = useDispatch();

  const currentTNNInfo = useSelector(tnnSelectors.currentTNNInfo);

  useEffect(() => {
    if (outerVar.value) {
      setFormState((prevState) => ({
        ...prevState,
        [outerVar.name]: outerVar.value,
      }));
    } else {
      return;
    }
  }, [outerVar.value, outerVar.name]);

  const onInputChange = ({ target }) => {
    const { type, name, checked, value } = target;
    const newValue = type === "checkbox" ? checked : value;
    setFormState((prevState) => ({ ...prevState, [name]: newValue }));
    if (Object.keys(currentTNNInfo).length) {
      dispatch(clearTNNCurrent());
    }
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
