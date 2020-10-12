import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/teeth-whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {

    const serviceData = [
        {
            name: 'Fluoride Treatment',
            img: flouride,
            des: 'There are several reasons fluoride treatments. If you have a high risk for cavities, topical fluoride applications can cut down on that risk.'
        },
        {
            name: 'Cavity Filling',
            img: cavity,
            des: 'Cavity Filling involves replacing decayed tooth material with a filling material made from composite resin, amalgam, gold, or ceramics.'
        },
        {
            name: 'Teeth Whitening',
            img: whitening,
            des: 'It seems as if there are hundreds of teeth whitening procedures on the market today and there is no way to tell which one is the best.'
        }
    ]

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1cc7c1' }}>Our Services</h5>
                <h2 style={{ color: '#3a4256' }}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;