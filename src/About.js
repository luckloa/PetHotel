import React, { Component } from 'react';
import { Media, Button } from 'reactstrap';

class About extends Component {
    render() {
        return(
            <div className='condiv about'>
                <div className='container header'>
                    <h1 className='subtopic'>Loving Care From Local, Experienced Pet Professionals.</h1>
                    <p>THE NATION’S LARGEST AND MOST TRUSTED FRANCHISE PROVIDER OF PROFESSIONAL PET SITTING AND DOG WALKING SERVICES.</p>
                    <Button color='primary'>Services</Button>
                </div>
                <div className='container body'>
                    <Media right href="/Services">
                        <Media src="../assets/images/group-playing.jpg" alt="group-playing" />
                    </Media>
                    <Media body>
                        <Media heading>
                            Pet Care we believe
                        </Media>
                        in a safe and happy world where pets get their way every day. This means enabling your pet to live life to its fullest. So even if you’re away, with Fetch! Pet Care, your pet can still play! We believe a pet needs regular exercise in order to be happy and healthy, so we have designed a range of services to meet the varied needs of dogs and cats.
                    </Media>

                </div>
                <div className='container review'>
                    
                </div>

                <div className='container footer'>

                </div>
            </div>

        )
    }
}
export default About;
