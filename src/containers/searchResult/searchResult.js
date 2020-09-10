import React, { Component } from 'react';
import CardItems from '../../components/CardItems/CardItems'
import {
    Col,
    Card,
    Row
} from 'react-bootstrap';

class searchResult extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { result } = this.props;
        let count = 0;
        return (
            <Col className="align-items-start">
                <Row>
                    {
                        result && Object.keys(result).map((i) => {
                            let res = result[i];
                            return <CardItems
                                key={i}
                                title={res.mission_name + ' #' + (+i + 1)}
                                mission_id={res.mission_id}
                                launch_year={res.launch_year}
                                launch_success={res.launch_year}
                                land_success={res.launch_year}
                                image = {res.links.mission_patch_small}
                            />
                        })
                    }

                </Row>
            </Col>
        )
    }
}

export default searchResult;