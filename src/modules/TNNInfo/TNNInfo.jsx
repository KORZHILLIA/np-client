import { useSelector } from "react-redux";
import tnnSelectors from "../../redux/tnn/tnn-selectors";
import styles from "./tNNInfo.module.scss";

const TNNInfo = () => {
  const currentTNNInfo = useSelector(tnnSelectors.currentTNNInfo);
  const {
    Status,
    CitySender,
    WarehouseSender,
    CityRecipient,
    WarehouseRecipient,
  } = currentTNNInfo;
  return Object.keys(currentTNNInfo).length ? (
    <div className={styles.general}>
      {Status ? (
        <p className={styles.pale}>
          <span className={styles.bold}>Статус: </span> {Status}
        </p>
      ) : null}
      {WarehouseSender ? (
        <p className={styles.pale}>
          <span className={styles.bold}>Відправлено: </span>
          {CitySender ? <span>{CitySender}, </span> : null}
          {WarehouseSender}
        </p>
      ) : null}
      {WarehouseRecipient ? (
        <p className={styles.pale}>
          <span className={styles.bold}>Отримано: </span>
          {CityRecipient ? <span>{CityRecipient}, </span> : null}
          {WarehouseRecipient}
        </p>
      ) : null}
    </div>
  ) : null;
};

export default TNNInfo;
