import React from 'react';
import Card from '../card';
import faker from 'faker';
class People extends React.Component {
    componentWillMount() {
        console.log('componentWillMount has been called.');
    }
    componentDidMount() {
        console.log('componentDidMount has been called.');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate has been called.');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount has been called.');
    }

    render() {
        const cards = [];
        for (let cardIndex = 0; cardIndex < this.props.cardCount; cardIndex++) {
            cards.push(<Card
                key={cardIndex}
                avatar={faker.image.avatar()}
                firstName={faker.name.firstName()}
                joinDate={faker.date.past().getFullYear()}
                jobTitle={faker.name.jobTitle()}
                friendCount={faker.random.number(300)}
            />);
        }
        return <div className='ui four column doubling stackable grid container link cards'>{cards}</div>
    }
}


export default People;
