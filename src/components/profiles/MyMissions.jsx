import { useSelector } from 'react-redux';

const MyMissions = () => {
  const missions = useSelector((store) => store.missions.missions.filter((item) => item.reserved));

  return (
    <div className="mymissions">
      <h2>My Missions</h2>
      {missions.length ? (
        <ul>
          {missions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      ) : (
        <p>No mission yet</p>
      )}
    </div>
  );
};

export default MyMissions;
