import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardBody, CardSubtitle } from 'reactstrap';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }
  
  render() {
    const { id, title, address, date } = this.props.todo;  
    return (
      <div style={this.getStyle()}>
      <Card style={{width: '50%', display: 'block', margin: '0 auto', border: '2px solid #ccc', marginBottom: '1vh'}}>
          <CardBody>
              <h2>{ title }</h2>
              <CardSubtitle style={{ fontSize: '18px'}}><strong>Date: </strong>{ date }</CardSubtitle>
              <CardSubtitle style={{ fontSize: '18px', marginBottom: '1vh' }}><strong>Address: </strong>{ address }</CardSubtitle>
              <Button color="success" onClick={this.props.markComplete.bind(this, id)}>Complete</Button>{' '}
              <Button color="danger" onClick={this.props.delTodo.bind(this, id)}>Delete</Button>
          </CardBody>
      </Card>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default TodoItem;