import PropTypes from "prop-types";
import OutletsItem from "./OutletsItem";
import helpers from "../../helpers";
import styles from "./outlets.module.scss";

const Outlets = ({ items }) => {
  const elements = items.map(({ Description, ShortAddress, Phone, _id }) => {
    const updatedDescription = helpers.cutDescriptionString(Description);
    return (
      <OutletsItem
        key={_id}
        description={updatedDescription}
        address={ShortAddress}
        phone={Phone}
      />
    );
  });

  return <ul className={styles.list}>{elements}</ul>;
};

Outlets.defaultProps = {
  items: [],
};

Outlets.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      Description: PropTypes.string,
      ShortAddress: PropTypes.string,
      Phone: PropTypes.string,
    })
  ),
};

export default Outlets;
