import React, { Component } from 'react';
import {
    Col,
    Card
} from 'react-bootstrap';

class CardItems extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, mission_id, launch_year, launch_success, land_success, image } = this.props;
        return (
            <Col lg={3} style={{ 'padding-bottom': '10px' }}>
                <Card border="secondary">
                    <Card.Img variant="top" src={image} style={{'padding':'20px'}} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p>Mission Ids: {mission_id.join(',')}</p>
                            <p>Launch Year: {launch_year}</p>
                            <p>Successful Launch: {launch_success}</p>
                            <p>Successful Landing: {land_success}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default CardItems;