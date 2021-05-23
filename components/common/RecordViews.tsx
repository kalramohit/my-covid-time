import React, { Component } from 'react';
interface Props {

}

interface State {

}

export class RecordViews extends Component<Props, State> {
    componentDidMount() {
        window.fathom.trackGoal('QLWZC0OK', 0);
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <div >

            </div>
        );
    }
}