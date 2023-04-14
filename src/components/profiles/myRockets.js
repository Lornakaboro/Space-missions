import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function MyRockets() {
  const reservations = useSelector((state) => state.rockets).rockets
    .filter((rocket) => rocket.reserved);

  return (
    <div className="mymissions">
      <h2>My Rockets</h2>
      { reservations.length < 1 ? (
        <p>
          No Rockets Yet...
          <NavLink to="/">Join a Rockets</NavLink>
        </p>
      ) : (
        <ul>
          {reservations.map((item) => (<li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default MyRockets;
