import React from 'react';
import { useSelector } from 'react-redux';
import Forecast from '../Forecast/Forecast';
import { Container, Header, Grid } from 'semantic-ui-react';
import SearchBox from '../Search/SearchBox';
import Spinner from '../ui/Spinner/Spinner';

const Weather = () => {
    const { loading } = useSelector((state) => ({
        loading: state.app.isLoading,
    }));

    return (
        <Container>
            {loading && <Spinner />}
            <Grid
                textAlign="center"
                style={{ height: '100vh' }}
                verticalAlign="middle"
            >
                <Grid.Column>
                    <Header size="huge" color="teal" textAlign="center">
                        Weather Forecast Widget
                    </Header>
                    <SearchBox />
                    <Forecast />
                </Grid.Column>
            </Grid>
        </Container>
    );
};

export default Weather;
