import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector } from 'react-redux';
import MyMissions from '../../src/components/profiles/MyMissions';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('MyMissions', () => {
  test('renders "No mission yet" message if no missions are reserved', () => {
    useSelector.mockReturnValue([]);
    render(<MyMissions />);
    expect(screen.getByText('No mission yet')).toBeInTheDocument();
  });

  test('renders a list of reserved missions', () => {
    const missions = [
      { mission_id: '1', mission_name: 'Mission One', reserved: true },
      { mission_id: '2', mission_name: 'Mission Two', reserved: true },
    ];
    useSelector.mockReturnValue(missions);
    render(<MyMissions />);
    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.getByText('Mission One')).toBeInTheDocument();
    expect(screen.getByText('Mission Two')).toBeInTheDocument();
  });
});
