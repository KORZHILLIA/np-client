import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import tnnSelectors from "../../redux/tnn/tnn-selectors";
import { clearTNNHistory } from "../../redux/tnn/tnn-actions";
import styles from "./tNNHistory.module.scss";

const TNNHistory = ({ onClick }) => {
  const tnnHistory = useSelector(tnnSelectors.tnnHistory);

  const dispatch = useDispatch();

  const clearHistory = () => dispatch(clearTNNHistory());

  const elements = tnnHistory.length
    ? tnnHistory.map(({ _id, number }) => (
        <li className={styles.item} key={_id}>
          <p onClick={() => onClick({ number })}>{number}</p>
        </li>
      ))
    : null;

  return tnnHistory.length ? (
    <div className={styles.general}>
      <h2 className={styles.head}>Історія</h2>
      <ul className={styles.list}>{elements}</ul>
      <button className={styles.btn} type="button" onClick={clearHistory}>
        Очистити
      </button>
    </div>
  ) : null;
};

TNNHistory.defaultProps = {
  onClick: () => {},
};

TNNHistory.propTypes = {
  onClick: PropTypes.func,
};
export default TNNHistory;
