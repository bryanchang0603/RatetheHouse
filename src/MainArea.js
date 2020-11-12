import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PeopleCard from './PeopleCard';

class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "149 Main Street",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later",
          image: "photos/house1.jpg"
        },
        {
          id: 2,
          name: "Mark Markson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later",
          image: "photos/house2.jpg"
        },
        {
          id: 3,
          name: "Judy Judyson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later",
          image: "photos/house3.jpg"
        },
        {
          id: 4,
          name: "James Jameson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later",
          image: "photos/house4.jpg"
        }
      ]
    }
  }

  removePerson(id) {
    this.setState({ people: this.state.people.filter(person => person.id !== id)});
  }

  render () {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="4">
          <PeopleCard key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
        </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
          {peopleCards}
        </Row>
      </Container>
    )
  }
}

export default MainArea;
