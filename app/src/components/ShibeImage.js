import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner';
import {fetchShibe} from '../store/actions/ShibeActions'

const ShibeImage = props => {
    useEffect(() => {
        props.fetchShibe();
    }, []);

    return (
        <div>
            <h1>Get a dope image</h1>
            {props.isLoading && <Loader type="Puff" color="#00BFFF" height={80} width={80} />}
            {props.stuff && <img src={props.stuff} alt="img" />}  
        </div>
    );
};

const mapStateToProps = state => {
    return {
        stuff: state.shibeReducer.stuff,
        isLoading: state.shibeReducer.isLoading,
        error: state.shibeReducer.error
        
    };
};

export default connect(
    mapStateToProps,{ fetchShibe }

)(ShibeImage);