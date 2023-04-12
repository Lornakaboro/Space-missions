import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from '../../src/routes/missions';

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

// const mockStore = configureStore([]);

describe('Missions component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: initialState,
    });
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
  });

  it('should render table header', () => {
    const tableHeaders = screen.getAllByRole('columnheader');
    expect(tableHeaders[0]).toHaveTextContent('Mission');
    expect(tableHeaders[1]).toHaveTextContent('Description');
    expect(tableHeaders[2]).toHaveTextContent('Status');
    expect(tableHeaders[3]).toHaveTextContent('');
  });

  it('should render Mission component for each mission item', () => {
    const missions = screen.getAllByRole('row', { name: /mission/i });
    expect(missions).toHaveLength(3);
  });
});
