import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherFromApi } from '../../actions/weather';
import './Suggestion.scss';
import PropTypes from 'prop-types';

const Suggestion = (props) => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(fetchWeatherFromApi(props.woeid));
        props.hideSuggestionFn();
        props.setNewSearchFn();
        props.setLocationFn(props.label);
    };

    return (
        <div onClick={onClick} className="suggestion-item">
            {props.label}
        </div>
    );
};

Suggestion.propTypes = {
    woeid: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    hideSuggestionFn: PropTypes.func.isRequired,
    setNewSearchFn: PropTypes.func.isRequired,
    setLocationFn: PropTypes.func.isRequired,
};

export default Suggestion;
