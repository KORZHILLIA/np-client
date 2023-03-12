import { useSelector, useDispatch } from "react-redux";
import tnnSelectors from "../../redux/tnn/tnn-selectors";
import { clearTNNHistory } from "../../redux/tnn/tnn-actions";
import styles from "./tNNHistory.module.scss";

const TNNHistory = ({ onClick }) => {
  const tnnHistory = useSelector(tnnSelectors.tnnHistory);

  const dispatch = useDispatch();

  const clearHistory = () => dispatch(clearTNNHistory());

  const elements = tnnHistory.length
    ? tnnHistory.map(({ _id, number }) => (
        <li key={_id}>
          <p onClick={() => onClick({ number })}>{number}</p>
        </li>
      ))
    : null;

  return tnnHistory.length ? (
    <div>
      <ul>{elements}</ul>
      <button type="button" onClick={clearHistory}>
        Clear
      </button>
    </div>
  ) : null;
};

export default TNNHistory;
