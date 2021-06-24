import React from 'react';

const Spinner = () => {
    return (
        <div className="ui">
            <div className="ui active dimmer">
                <div className="ui text loader">Loading</div>
            </div>
        </div>
    );
}

export default Spinner;