import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from '../components/missions/Mission';
import getMissions from '../redux/missions/missionsThunk';

const Missions = () => {
  const dispatch = useDispatch();

  const { missions, status } = useSelector((store) => store.missions);

  useEffect(() => {
    if (!status) dispatch(getMissions());
  }, [status, dispatch]);

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th className="t-name">Mission</th>
            <th className="t-description">Description</th>
            <th className="t-status">Status</th>
            <th className="t-action"> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((item) => (
            <Mission key={item.id} mission={item} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
