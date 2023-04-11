import Mission from '../components/missions/Mission';

const missionsCollection = [
  {
    mission_name: 'Thaicom',
    mission_id: '9D1B7E0',
    payload_ids: ['Thaicom 6', 'Thaicom 8'],
    description:
      'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  },
  {
    mission_name: 'Telstar',
    mission_id: 'F4F83DE',
    payload_ids: ['Telstar 19V', 'Telstar 18V'],
    reserved: true,
    description:
      'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
  },
];

const Missions = () => (
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
        {missionsCollection.map((item) => (
          <Mission key={item.id} mission={item} />
        ))}
      </tbody>
    </table>
  </section>
);

export default Missions;
