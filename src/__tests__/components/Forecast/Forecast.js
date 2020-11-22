import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Forecast from '../../../components/Forecast/Forecast';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

const mockData = [];
mockData.push({
    id: 1,
    max_temp: 1,
    min_temp: 1,
    wind_speed: 1,
    weather_state_name: 'word',
    weather_state_abbr: 'word',
    applicable_date: 'word',
});

describe('Forecast component:', () => {
    beforeEach(() => {
        useSelector.mockImplementation((selector) =>
            selector({
                weather: mockData,
            }),
        );
    });
    afterEach(() => {
        useSelector.mockClear();
    });
    it('renders Forecast', () => {
        const { container } = render(<Forecast />);
        expect(container).toMatchSnapshot();
    });
});
