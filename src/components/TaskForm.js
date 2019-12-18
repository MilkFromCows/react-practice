import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Eat fudge"
        }

        // bind this...
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {

        return (
            <div class="container">
                <form className="form-horizontal" >
                    <label className="control-label col-sm-2">Add Task:</label>
                    <div className="col-sm-10">
                        <input type="text" 
                        className="form-control" 
                        placeholder="Enter new task here"
                        value={this.state.value}
                        onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>

        );
    }
}

export default TaskForm;