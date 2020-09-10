import React, { Component } from 'react';
import SearchComponent from '../../components/SearchComponent/SearchComponent'
import {
    Col,
    Card
} from 'react-bootstrap';

class search extends Component {
    constructor(props) {
        super(props);
    }

    handleChanged = (name, value) => {
        this.props.handleChange(name, value)
    };

    render() {
        const { year, launch, landed } = this.props.proState;
        return (
            <Col xs={12} md={3} lg={2} >
                <Card border="secondary">
                    <Card.Body>
                        <Card.Title>Filters</Card.Title>
                        <Card.Text>
                            <SearchComponent
                                key={"1"}
                                title="Launch Year"
                                list={[2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]}
                                handleChanged={(name, value) => this.handleChanged(name, value)}
                                titleName="year"
                                curValue={year} />
                            <br />
                            <SearchComponent
                                key={"2"}
                                title="Successful Launch"
                                list={['True', 'False']}
                                handleChanged={(name, value) => this.handleChanged(name, value)}
                                titleName="launch" 
                                curValue={launch} />
                            <br />
                            <SearchComponent
                                key={"3"}
                                title="Successful Landing"
                                list={['True', 'False']}
                                handleChanged={(name, value) => this.handleChanged(name, value)}
                                titleName="landed" 
                                curValue={landed} />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default search;