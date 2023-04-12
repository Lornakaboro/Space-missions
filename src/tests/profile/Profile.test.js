import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Profile from '../../routes/profile';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../redux/missions/missionsThunk');

const initialState = {
  missions: [
    {
      mission_id: 'a1',
      mission_name: 'Mission 1',
      description: 'Description 1',
      reserved: false,
    },
    {
      mission_id: 'a2',
      mission_name: 'Mission 2',
      description: 'Description 2',
      reserved: true,
    },
  ],
  loading: false,
  error: null,
};

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          mission_id: 'a1',
          mission_name: 'Test Mission',
          description: 'This is a test mission',
          reserved: false,
        },
      ],
    }),
  ),
}));

describe('Profile Route', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: initialState,
    });
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
  });
  test('renders the MyMissions component', () => {
    const myMissions = screen.getByRole('heading', { name: /My Missions/i });
    expect(myMissions).toBeInTheDocument();
  });
});
