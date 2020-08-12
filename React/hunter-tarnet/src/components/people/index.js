import React from 'react';
import Card from '../card';
import faker from 'faker';
const People = props => {
    const cards = [];
    for (let cardIndex = 0; cardIndex < props.cardCount; cardIndex++) {
        cards.push(<Card
            avatar={faker.image.avatar()}
            firstName={faker.name.firstName()}
            joinDate={faker.date.past().getFullYear()}
            jobTitle={faker.name.jobTitle()}
            friendCount={faker.random.number(300)}
        />);
    }
    return <div className='ui four column doubling stackable grid container link cards'>{cards}</div>
}


export default People;