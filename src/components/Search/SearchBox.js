import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherFromApi } from '../../actions/weather';
import { useClickOutside } from '../../hooks/useClickOutside';
import Suggestion from './Suggestion';
import { Input, Grid, Icon } from 'semantic-ui-react';
import { SEARCH_ITEMS_TO_DISPLAY } from '../../config/config';
import './SearchBox.scss';
import {
    searchLocationByTerm,
    searchLocationByCoordinates,
} from '../../utils/httpUtil';

const SearchBox = () => {
    const dispatch = useDispatch();
    const suggestionRef = useRef(null);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isNewSearch, setIsNewSearch] = useState(true);
    const [isNewLoading, setIsNewLoading] = useState(true);

    useEffect(() => {
        const showPosition = async (position) => {
            setIsNewLoading(false);
            try {
                const res = await searchLocationByCoordinates(position);
                dispatch(fetchWeatherFromApi(res?.data[0]?.woeid));
                setIsNewSearch(false);
                setSearchTerm(res?.data[0]?.title);
            } catch (err) {
                alert('Geolocation has not been found by this browser.');
            }
        };

        if (navigator.geolocation) {
            if (isNewLoading) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
        } else {
            alert('Geolocation is not supported by this browser.');
        }

        if (!searchTerm || !isNewSearch) {
            return;
        }
        setShowSuggestions(true);
        searchLocationByTerm(searchTerm).then((res) => {
            setSuggestions(res.data);
        });
    }, [searchTerm, isNewSearch, isNewLoading, dispatch]);

    useClickOutside(suggestionRef, () => setShowSuggestions(false));

    const onSearchInputChanged = (e) => {
        setIsNewSearch(true);
        setSearchTerm(e.target.value);
    };

    return (
        <Grid textAlign="center">
            <Grid.Column width={6} className="search-box">
                <Input fluid size="big" icon placeholder="Search for location">
                    <input
                        name="location"
                        value={searchTerm}
                        onChange={_.debounce(onSearchInputChanged, 500, {
                            leading: true,
                        })}
                    />
                    <Icon name="search" />
                </Input>

                {showSuggestions && (
                    <div
                        ref={suggestionRef}
                        className="ui big fluid icon input search-result"
                    >
                        {suggestions
                            ?.slice(0, SEARCH_ITEMS_TO_DISPLAY)
                            .map((s) => (
                                <Suggestion
                                    key={s.woeid}
                                    woeid={s.woeid}
                                    label={s.title}
                                    hideSuggestionFn={() => {
                                        setShowSuggestions(false);
                                    }}
                                    setNewSearchFn={() => {
                                        setIsNewSearch(false);
                                    }}
                                    setLocationFn={(location) => {
                                        setSearchTerm(location);
                                    }}
                                />
                            ))}
                    </div>
                )}
            </Grid.Column>
        </Grid>
    );
};

export default SearchBox;
