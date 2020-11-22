import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { ICON_URL } from '../../config/config';
import './ForecastItem.scss';
import PropTypes from 'prop-types';

const ForecastItem = (props) => {
    return (
        <React.Fragment>
            <Card className="card-item">
                <Card.Content>
                    <Image
                        size="tiny"
                        src={`${ICON_URL}${props.abbreviation}.svg`}
                        centered
                    />
                    <Card.Description>{props.date}</Card.Description>
                    <Card.Meta>{props.state}</Card.Meta>
                    <Card.Meta>{Math.round(props.windSpeed)}mph</Card.Meta>
                    <Card.Meta>
                        <span>
                            {Math.round(props.tempMax)}
                            <sup>&deg;</sup>
                            <small>/</small>
                            {Math.round(props.tempMin)}
                            <sup>&deg;</sup>
                        </span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </React.Fragment>
    );
};

ForecastItem.propTypes = {
    tempMax: PropTypes.number.isRequired,
    tempMin: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    abbreviation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default ForecastItem;
