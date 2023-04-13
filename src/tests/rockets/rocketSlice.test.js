import reducer, { list, reserve } from '../../redux/rockets/rocketsSlice';

describe('rockets reducer', () => {
  const initialState = { rockets: [], status: false };
  const rockets = [{
    id: 'r1', name: 'Rocket 1', description: 'Description 1', image: 'image1.jpg', reserved: false,
  }, {
    id: 'r2', name: 'Rocket 2', description: 'Description 2', image: 'image2.jpg', reserved: true,
  }];

  it('should handle LIST_ROCKETS', () => {
    const action = list(rockets);
    const state = reducer(initialState, action);
    expect(state).toEqual({ rockets, status: true });
  });

  it('should handle RESERVE_ROCKET', () => {
    const action = reserve('r1');
    const state = reducer({ rockets, status: true }, action);
    expect(state.rockets[0].reserved).toBe(true);
  });

  it('should not change state if the action is not recognized', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
