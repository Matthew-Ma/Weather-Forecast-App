import React from 'react';
import { useSelector } from 'react-redux';
import ForecastItem from './ForecastItem';
import { Card } from 'semantic-ui-react';
import { DAYS_TO_DISPLAY } from '../../config/config';

const Forecast = () => {
    const { forecast } = useSelector((state) => ({
        forecast: state.weather,
    }));

    return (
        <Card.Group itemsPerRow={DAYS_TO_DISPLAY}>
            {forecast?.weatherData?.slice(0, DAYS_TO_DISPLAY).map((item) => {
                return (
                    <ForecastItem
                        key={item.id}
                        tempMax={item.max_temp}
                        tempMin={item.min_temp}
                        windSpeed={item.wind_speed}
                        state={item.weather_state_name}
                        abbreviation={item.weather_state_abbr}
                        date={item.applicable_date}
                    />
                );
            })}
        </Card.Group>
    );
};

export default Forecast;
