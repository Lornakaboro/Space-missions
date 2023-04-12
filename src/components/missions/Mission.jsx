/* eslint-disable  camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { missionHandler } from '../../redux/missions/missionsSlice';

const Mission = ({ mission }) => {
  const {
    mission_id, mission_name, description, reserved,
  } = mission; // eslint-disable
  const dispatch = useDispatch();

  return (
    <tr className="mission-item">
      <td className="mission-name">{mission_name}</td>
      <td className="mission-decription">{description}</td>
      {reserved ? (
        <>
          <td className="join-status">
            <span className="reserved">Active Member</span>
          </td>
          <td className="mission-action">
            <button
              className="leave-mission"
              type="button"
              onClick={() => dispatch(missionHandler(mission_id))}
            >
              Leave Mission
            </button>
          </td>
        </>
      ) : (
        <>
          <td className="join-status">
            <span className="unreserved">NOT A MEMBER</span>
          </td>
          <td className="mission-action">
            <button
              className="join-mission"
              type="button"
              onClick={() => dispatch(missionHandler(mission_id))}
            >
              Join Mission
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;
