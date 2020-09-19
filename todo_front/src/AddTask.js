import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

class AddTask extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
			taskName: ''
	    };
	    this.submitClicked = this.submitClicked.bind(this);
	    this.updateTaskName = this.updateTaskName.bind(this);
		this.link =  "http://127.0.0.1:8000/api/tasks";
	}

	updateTaskName(evt){
		this.setState({
      		taskName: evt.target.value
    	});
	}

	submitClicked(){
		const requestOptions = {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify({ name: this.state.taskName, status: 'todo' })
    	};
    	fetch(this.link, requestOptions).then(window.location.reload())
	}
	
	render(){
		return (
			<Form className="d-flex justify-content-center align-items-center addTask">
			  <Form.Row className="align-items-center">
			    <Col xs="auto">
			      <Form.Label htmlFor="inlineFormInput" srOnly>
			        Name
			      </Form.Label>
			      <Form.Control
			        className="mb-2"
			        id="inlineFormInput"
			        placeholder="Добавить в список..."
			    	value={this.state.taskName} 
			    	onChange={this.updateTaskName}
			      />
			    </Col>
			    <Col xs="auto">
			      <Button className="mb-2" onClick={this.submitClicked}>
			        Добавить
			      </Button>
			    </Col>
			  </Form.Row>
			</Form>
		)
	}
}

export default AddTask;