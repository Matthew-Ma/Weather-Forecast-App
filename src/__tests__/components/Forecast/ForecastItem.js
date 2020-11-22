import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ForecastItem from '../../../components/Forecast/ForecastItem';

configure({ adapter: new Adapter() });

describe('ForecastItem component:', () => {
    it('renders ForecastItem', () => {
        const wrapper = shallow(
            <ForecastItem
                key={1}
                tempMax={2}
                tempMin={3}
                windSpeed={4}
                state={'nsw'}
                abbreviation={'sunny'}
                date={'2020-1-1'}
            />,
        );
        expect(wrapper.find('.card-item').text()).toEqual('<Card />');
    });
});
