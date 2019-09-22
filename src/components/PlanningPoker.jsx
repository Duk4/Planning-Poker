import React from 'react';
import AddTask from './AddTask';
import Voting from './Voting';

class PlanningPoker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAdding: true,
            isVoting: false
        }
    }

    render() {
        const { isAdding, isVoting } = this.state;

        if (isAdding === true) {
            return (
                <AddTask />
            );
        } else if (isVoting === true) {
            return (
                <Voting />
            );
        }
    }
}

export default PlanningPoker;

{/*
Make an task input
Show all current input
Submit button...

Make a point system
Load each task, so they can - ask about repeating task voting
Collect results and show them

Save the results in localStorage
Be able to make new votes
*/}