import MyMissions from '../components/profiles/MyMissions';
import MyRockets from '../components/profiles/myRockets';

const Profile = () => (
  <section className="profile">
    <MyMissions />
    <div className="myrockets">
      <MyRockets />
    </div>
  </section>
);

export default Profile;
