import React from 'react';
import Task from './Task';


class TaskList extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
			tasks: null
	    };
	    this.getTasks = this.getTasks.bind(this);
		this.link =  "http://127.0.0.1:8000/api/tasks";
	}

	componentDidMount(){
		this.getTasks()
	}

	getTasks(){
    	fetch(this.link)
    	.then(res => res.json())
    	.then(
			(result) => {
				console.log(result)
				this.setState({
					tasks: result
				});
		})
	}

	
	render(){
		if (this.state.tasks === null) return <h1></h1>;

		return (
			<div>
				{this.state.tasks.map(task => (
			      <Task data={task}/>
			    ))}
			</div>
			
		)
	}
}

export default TaskList;