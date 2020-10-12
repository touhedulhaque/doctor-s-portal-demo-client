import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infosData = [
        {
            title: 'Opening Hours',
            description: 'We are open 7 days',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit our location',
            description: 'Bändlistrasse 23, 8064, Zürich.',
            icon: faMapMarker,
            background: 'dark'
        },
        {
            title: 'Contact us now',
            description: '+41 (0) 78 999 66 77',
            icon: faPhone,
            background: 'primary'
        }
    ];
    return (
       <section className="d-flex justify-content-center">
           <div className="w-75 row">
           {
               infosData.map(info => <InfoCard info={info}/>)
           }
           </div>
       </section>
    );
};

export default BusinessInfo;