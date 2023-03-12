import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TNNInputForm from "../../modules/TNNInputForm";
import TNNInfo from "../../modules/TNNInfo";
import TNNHistory from "../../modules/TNNHistory";
import ErrorInfo from "../../shared/components/ErrorInfo";
import tnnSelectors from "../../redux/tnn/tnn-selectors";
import { getTNNInfo } from "../../redux/tnn/tnn-operations";
import { clearTNNError } from "../../redux/tnn/tnn-actions";
import styles from "./mainPage.module.scss";

const MainPage = () => {
  const [currentTNNNumber, setCurrentTNNNumber] = useState(null);

  const error = useSelector(tnnSelectors.tnnError);

  const dispatch = useDispatch();

  const checkInfo = ({ number }) => {
    dispatch(getTNNInfo(number));
  };

  const makeTNNCurrentAndCheckInfo = ({ number }) => {
    setCurrentTNNNumber(number);
    checkInfo({ number });
  };

  const clearError = () => {
    dispatch(clearTNNError());
  };

  return (
    <main>
      <div className="container">
        {!error ? (
          <>
            <h1 className={styles.head}>Перевірте статус посилки тут</h1>
            <TNNInputForm
              onSubmit={checkInfo}
              currentNumber={currentTNNNumber}
            />
            <div className={styles.fetchData}>
              <TNNInfo />
              <TNNHistory onClick={makeTNNCurrentAndCheckInfo} />
            </div>
          </>
        ) : (
          <ErrorInfo errorText={error} onClick={clearError} />
        )}
        <Link className={styles.link} to="/outlets">
          Check all the outlets
        </Link>
      </div>
    </main>
  );
};

export default MainPage;
