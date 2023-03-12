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

export default ErrorInfo;
