import styles from "./spinner.module.scss";
import logo from "../../../assets/img/logos/np-logo.jpg";
const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <img src={logo} alt="nova-poshta-logo" />
    </div>
  );
};

export default Spinner;
