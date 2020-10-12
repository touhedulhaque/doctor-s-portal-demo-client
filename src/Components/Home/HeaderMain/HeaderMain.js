import React from 'react';
import chair from '../../../images/chair-1.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3a4256'}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Gingivitis is the first stage of gum disease. It is estimated that around 75% of people's develop this condition at some point in their lives. This is the main reason behind bleeding gums in adults. This condition is treatable and reversible if it is caught early enough.</p>
                <button className="btn btn-primary">Get Appointment</button>

            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={chair} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;