/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component} from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink} from 'reactstrap';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <div className="container">
                    <ReactTypingEffect text={['Services your pet will love.','We serve pets at every age and phase.']} speed={80} eraseDelay={200} className="typingeffect"></ReactTypingEffect>
                </div>
                <div className='row'>
                <div className='card'>
                <div className='col'>
                    <Card>
                        <CardImg top width="100%" src="../assets/images/private1.jpg" alt="private" />
                        <CardBody>
                            <CardTitle tag='h4'>Private Suite</CardTitle>
                            <CardSubtitle tag='h5' className='mb-2 text-muted'>Private/Share</CardSubtitle>
                            <CardText>Our boarding service is one of a kind. Your dog will be taken care of the same way it would be in your house.</CardText>
                            <CardLink href="/Services">Learn More</CardLink>
                        </CardBody>
                    </Card>
                </div>
                <div className='col'>
                    <Card>
                        <CardImg top width="100%" src="../assets/images/private1.jpg" alt="private1" className = 'private1' />
                        <CardBody>
                            <CardTitle tag='h4'>Private Suite</CardTitle>
                            <CardSubtitle tag='h5' className='mb-2'>Private/Share</CardSubtitle>
                            <CardText>Our boarding service is one of a kind. Your dog will be taken care of the same way it would be in your house.</CardText>
                            <CardLink href="/Services">Learn More</CardLink>
                        </CardBody>
                    </Card>
                </div>
                </div>
                </div>
                <div className='row'>
                    <Social />
                </div>
            </div>
        )
    }
}

export default Home;