import React from 'react';

const shibeImage = () => {
    return (
        <div>
            <h1>Get a dope image</h1>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        stuff: state.stuff,
        isLoading: state.isLoading,
        error: state.error
        
    };
};

export default connect(
    mapStateToProps,{}

)(shibeImage);