import React from 'react'
import faker from 'faker';

const Card = () => <div className="ui card">
    <div className="image">
        <img src={faker.image.avatar()} />
    </div>
    <div className="content">
        <a className="header">{faker.name.firstName()}</a>
        <div className="meta">
            <span className="date">Joined in {faker.date.past().getFullYear()}</span>
        </div>
        <div className="description">{faker.name.jobTitle()}</div>
    </div>
    <div className="extra content"><a><i className="user icon"></i>{faker.random.number(500)} Friends</a></div>
</div>

export default Card;