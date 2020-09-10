import React, { Component } from 'react';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './search/search';
import SearchResult from './searchResult/searchResult';
import { getData } from '../reducers/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 0,
      launch: 0,
      landed: 0
    }
  }

  componentWillMount() {
    let { year, launch, landed } = this.state;
    this.props.getData(year, launch, landed)
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value }, () => {
      let { year, launch, landed } = this.state;
      this.props.getData(year, launch, landed)
    });
  };

  render() {
    const { data } = this.props;
    
    return (
      <Container fluid id='container' >
        <h1>SpaceX Launch Programs</h1>
        <Row>
          <Search handleChange={(name, value) => this.handleChange(name, value)}  proState={this.state} />
          <SearchResult result={data} />
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.data }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (year, launch, landed) => dispatch(getData(year, launch, landed)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);

