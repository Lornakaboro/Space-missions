import Rocket from '../components/rockets/Rocket';

const rocketsCollection = [
  {
    flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
    name: 'Falcon 1',
    type: 'rocket',
    active: false,
    country: 'Republic of the Marshall Islands',
    company: 'SpaceX',
    description:
      'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    id: '5e9d0d95eda69955f709d1eb',
  },
  {
    flickr_images: [
      'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
    ],
    name: 'Falcon 9',
    type: 'rocket',
    active: true,
    country: 'United States',
    company: 'SpaceX',
    description:
      'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
    id: '5e9d0d95eda69973a809d1ec',
  },
];

const Rockets = () => (
  <section>
    {rocketsCollection.map((item) => (
      <Rocket key={item.id} rocket={item} />
    ))}
  </section>
);

export default Rockets;
