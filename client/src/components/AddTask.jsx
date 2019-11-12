import React from 'react';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            tasks: []
        }
    }

    render() {
        const { tasks } = this.state;
        return (
            <div className="add-task">
                <h1>Add Task</h1>
                <form>
                    <div className="input-field">
                        <input type="text" id="text" onChange="{}" />
                        <button className="add-btn" onClick="{}">Add</button>
                    </div>
                    <div className="added-tasks">
                        {
                            tasks.map((task, index) => {
                                <Task key={index} task={task} />
                            })
                        }
                    </div>
                    <button className="submit-btn">Submit</button>
                </form>
            </div>
        );
    };
};

export default AddTask;