import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';

class search extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (name, value) => {
        this.props.handleChanged(name, value)
    };

    render() {
        const { title, list, titleName, curValue } = this.props;
        return (
            <Container className="justify-content-md-center">
                <Row >
                    <Col md={12} className="small text-center">{title}</Col>
                </Row>
                <Row className="align-content-stretch">
                    {
                        list.map((elm, i) => {
                            return (
                                <Col xs="6" lg="6" style={{ 'padding': '10px 10px' }} key={i}>
                                    <Button className={elm == curValue ? 'button_active':'button_inactive'} variant="success" size="md" onClick={() => this.handleChange(titleName, elm)}>{elm}</Button>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}

export default search;