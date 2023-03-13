import { useParams } from "react-router-dom";
import styles from "./outletsPage.module.scss";

const OutletsPage = () => {
  const { CityRecipient } = useParams();
  return <h2>{CityRecipient}</h2>;
};

export default OutletsPage;
