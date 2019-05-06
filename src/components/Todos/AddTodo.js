import React, { Component } from 'react'
import { Form, Label, Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import uuid from 'uuid';
import { callbackify } from 'util';

export class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false, 
      id: uuid.v4(),
      title: '',
      date: '',
      address: '',
    };

    this.toggle = this.toggle.bind(this);
  }

  // Toggle Modal 
  toggle(){
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // Change Detection in Form
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  // Form Submission
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title, this.state.date, this.state.address);
    geocodeByAddress(this.state.address)
    .then(results => getLatLng(results[0]))
    .then(latLng => console.log('Success', latLng))
    .catch(error => console.error('Error', error))
    this.setState({ title: '', date: '', address: '' });
  };

  handleChange = address => {
    this.setState({ address });
  };

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle} style={{display: 'block', margin: '0 auto', marginTop: '2vh', marginBottom: '2vh', fontWeight: 500}}>Create Task</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>New Task</ModalHeader>
        <ModalBody>
        <Form onSubmit={this.onSubmit} style={{ textAlign: 'center'}}>
            <Label for="title">Title</Label>
            <Input
            style={{width: '80%', margin: '0 auto', display: 'block', marginBottom: '2vh'}}
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            />
            <Label for="date">Date</Label>
            <Input
            style={{width: '80%', margin: '0 auto', display: 'block', marginBottom: '2vh', textAlign: 'center'}}
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.onChange}
            />
            <Label for="address">Address</Label>
            <PlacesAutocomplete
            style={{width: '100%'}}
            type="search"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input style={{display: 'block', padding: '.375rem .75rem', fontSize: '1rem', fontWeight: 400, lineHeight: '1.5', border: '1px solid #ced4da', borderRadius:'.25rem', color: '#495057', width: '81%', margin: '0 auto'}}
              {...getInputProps({
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <br></br>
            <Button color="success" value="submit" onSubmit={this.onSubmit}>Submit</Button>
        </Form>
        </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default AddTodo;