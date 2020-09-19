import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';


class Task extends React.Component{
	constructor(props) {
	    super(props);
	    this.delTask = this.delTask.bind(this);
		this.link =  "http://127.0.0.1:8000/api/tasks";
	}

	delTask(){
		const requestOptions = {
	        method: 'DELETE',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify({ id: this.props.data.id })
    	};
    	fetch(this.link, requestOptions).then(window.location.reload())	
	}
	
	render(){
		return (
			<Form className="d-flex justify-content-center align-items-center addTask">
			  <Form.Row className="align-items-center">
			    <Col xs="auto">
			      <p className="task">{this.props.data.name}</p>
			    </Col>
			    <Col xs="auto">
			      <Button className="mb-2" onClick={this.delTask}>
			        Удалить
			      </Button>
			    </Col>
			  </Form.Row>
			</Form>
		)
	}
}

export default Task;