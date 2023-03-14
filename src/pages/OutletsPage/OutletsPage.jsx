import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOutlets } from "../../shared/api/np";
import Outlets from "../../modules/Outlets";
import Spinner from "../../shared/components/Spinner";
import styles from "./outletsPage.module.scss";

const initialState = {
  allOutlets: {},
  loading: false,
  error: null,
};

const OutletsPage = () => {
  const [outletsContent, setOutletsContent] = useState(initialState);

  const { requiredCity } = useParams();

  const { allOutlets, loading, error } = outletsContent;

  useEffect(() => {
    const getOutlets = async (city) => {
      setOutletsContent((prevState) => ({ ...prevState, loading: true }));
      try {
        const allOutlets = await fetchOutlets(city);
        setOutletsContent((prevState) => ({
          ...prevState,
          loading: false,
          allOutlets,
        }));
      } catch (error) {
        setOutletsContent((prevState) => ({
          ...prevState,
          allOutlets: {},
          error,
        }));
      }
    };
    getOutlets(requiredCity);
  }, [requiredCity]);

  const { city, outlets } = allOutlets;

  return (
    <main className={styles.general}>
      <div className="container">
        {city ? (
          <h1 className={styles.head}>{`Список відділень, ${city}:`}</h1>
        ) : null}
        {Boolean(outlets?.length) ? <Outlets items={outlets} /> : null}
        {error ? <p>{error}</p> : null}
      </div>
      {loading ? <Spinner /> : null}
      <Link className={styles.link} to="/">
        Перевірити статус посилки
      </Link>
    </main>
  );
};

export default OutletsPage;
