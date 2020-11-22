import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherFromApi } from '../../actions/weather';
import './Suggestion.scss';

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

export default Suggestion;
