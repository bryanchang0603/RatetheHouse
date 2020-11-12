import React, { Component } from 'react';
import { Card, CardImg, Button } from 'react-bootstrap';

class PeopleCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, name, company, description,image } = this.props.person;
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={image} alt="Card image cap" />
          
          
            <Button color="danger" onClick={() => this.props.removePerson(id)}>Delete</Button>
        </Card>
      </div>
    )
  }
}

export default PeopleCard;
