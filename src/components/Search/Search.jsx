import classes from './Search.module.css';
import React from 'react';
import BookFlightContainer from '../Main/BookFlight/BookFlightContainer';

const Search = props => {
    return (
        <section className={classes.search}>
            <div className="container">
                <BookFlightContainer />
            </div>
        </section>

    );
};

export default Search;