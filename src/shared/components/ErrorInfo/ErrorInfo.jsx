import PropTypes from "prop-types";
import styles from "./errorInfo.module.scss";

const ErrorInfo = ({ errorText, onClick }) => {
  return (
    <div className={styles.general}>
      <p className={styles.text}>{errorText}</p>
      <button className={styles.btn} type="button" onClick={onClick}>
        Try again
      </button>
    </div>
  );
};

ErrorInfo.defaultProps = {
  onClick: () => {},
};

ErrorInfo.propTypes = {
  errorText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default ErrorInfo;
