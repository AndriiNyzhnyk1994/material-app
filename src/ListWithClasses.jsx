import React from "react";




export class ListWithClasses extends React.Component {
    state = {
        numbers: [1, 2, 4]
    }
    addNumber = () => {
        const randNumber = Math.round(Math.random() * 10)
        this.setState({
            numbers: [...this.state.numbers, randNumber]
        })
    }
    componentDidMount() {
        console.log('component did MOUNT');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('prev state:', prevState);
        console.log('current state:', this.state);
    }
    componentWillUnmount() {
        console.log('component will UNMOUNT');
    }

    render() {
        return (
            <div>
                <button onClick={this.addNumber}>ADD</button>
                <ul>
                    {this.state.numbers.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
