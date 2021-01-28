import React, { Component } from 'react';
import { SERVICES } from '../shared/services';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES
        }
    }
    render(){
        const services = this.state.services.map(service => {
            return(
                <div className="condiv services">
                    <img src={service.image} alt={service.name} className='photo'/>
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                    <p>{service.price}</p>
                    <p>{service.description}</p>
                </div>
            )
        })
        return(
            <div className="container">
                <h1 className= 'subtopic'>Boarding</h1>
                <p className= 'boarding'>
                    Our boarding service is one of a kind. Your dog will be taken care of the same way it would be in your house.
                    Your dog will be taken out outside to our spacious fully fenced backyard, every 2-3 hours to play with other dogs, or just to hang out in fresh air.
                    In case your doggy needs to go outside more often, he/she will be offered extra time outside with no additional cost,
                    which you will not be offered in a different place for free. Your poochie will also be provided with a bed/blanket and food&water bowls.
                    So, please do NOT bring anything else other than his/her food.
                    We require that your dog is up-to-date on his vaccines (please check with your dog’s vet about the vaccines needed for boarding & daycare).
                    Your dog will sleep in a crate at night. So, we also require that he/she is Crate-trained. In case you want your dog to be taken outside alone (One-on-One Care),
                    there will be an extra charge of $5 per night.
                </p>
                <div className="row">
                    {services}
                </div>
            </div>
        )
    }
}
export default Services;
