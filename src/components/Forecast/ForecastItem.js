import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { ICON_URL } from '../../config/config';
import './ForecastItem.scss';

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

export default ForecastItem;
