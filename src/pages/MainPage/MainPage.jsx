import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import TNNInputForm from "../../modules/TNNInputForm";
import { getTNNInfo } from "../../redux/tnn/tnn-operations";
import styles from "./mainPage.module.scss";

const MainPage = () => {
  const dispatch = useDispatch();

  const checkInfo = ({ number }) => {
    dispatch(getTNNInfo(number));
  };

  return (
    <main>
      <div className="container">
        <Link to="/outlets">Check all the outlets</Link>
        <TNNInputForm onSubmit={checkInfo} />
      </div>
    </main>
  );
};

export default MainPage;
