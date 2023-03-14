import PropTypes from "prop-types";
import styles from "./outletsItem.module.scss";

const OutletsItem = ({ id, description, address, phone }) => {
  return (
    <li className={styles.item} key={id}>
      {description ? <p className={styles.pale}>{description}</p> : null}
      {address ? (
        <p className={styles.pale}>
          <span className={styles.bold}>Адреса: </span>
          {address}
        </p>
      ) : null}
      {phone ? (
        <p className={styles.pale}>
          <span className={styles.bold}>Телефон: </span>
          {phone}
        </p>
      ) : null}
    </li>
  );
};

OutletsItem.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
};

export default OutletsItem;
