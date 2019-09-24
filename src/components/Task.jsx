import React from 'react';

class Task extends React.Component {
    render() {
        const { task } = this.props;

        return (
            <p>{task}</p>
        );
    }
};

export default Task;