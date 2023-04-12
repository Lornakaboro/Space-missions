import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { useDispatch } from 'react-redux';
import Mission from '../../src/components/missions/Mission';
import { missionHandler } from '../../src/redux/missions/missionsSlice';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

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

describe('Mission', () => {
  const mission = {
    mission_id: 'a1',
    mission_name: 'Test Mission',
    description: 'This is a test mission',
    reserved: false,
  };

  it('Mission component renders correctly', () => {
    const tree = renderer
      .create(
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
            <Mission mission={mission} />
          </tbody>
        </table>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders mission details correctly', () => {
    render(
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
          <Mission mission={mission} />
        </tbody>
      </table>,
    );
    const missionName = screen.getByText('Test Mission');
    const missionDescription = screen.getByText('This is a test mission');
    expect(missionName).toBeInTheDocument();
    expect(missionDescription).toBeInTheDocument();
  });

  it('dispatches missionHandler action on join/leave button click', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const { getByRole } = render(
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
          <Mission mission={mission} />
        </tbody>
      </table>,
    );
    const joinButton = getByRole('button', { name: 'Join Mission' });

    fireEvent.click(joinButton);
    expect(mockDispatch).toHaveBeenCalledWith(missionHandler('a1'));

    fireEvent.click(joinButton);
    expect(mockDispatch).toHaveBeenCalledWith(missionHandler('a1'));
  });
});
