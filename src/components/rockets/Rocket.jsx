/* eslint-disable  camelcase */
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const {
    id, name, description, flickr_images,
  } = rocket; // eslint-disable
  const reservationStatus = false;

  return (
    <div className="rocket-item">
      <img src={flickr_images[0]} alt="Rocket item" />
      <div className="rocket-info">
        <h4 className="rocket-name">{name}</h4>
        <p className="rocket-decription">{description}</p>
        <div className="reservation-actions" data-target={id}>
          {reservationStatus ? (
            <button className="cancel" type="button">
              Cancel Reservation
            </button>
          ) : (
            <button className="reserve" type="button">
              Reserve Rocket
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rocket;
