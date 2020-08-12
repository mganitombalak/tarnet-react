import React from 'react'
import Approval from './components/approval'
// CLASS COMPONENT
class Card extends React.Component {
    state = { isApproved: false };
    constructor(props) {
        super(props);
        // this.onApprove=this.onApprove.bind(this);
        // this.onReject=this.onReject.bind(this);
    }
    onApprove = () => {
        //console.log(this); UNDEFINED
        // this.state.isApproved=true; WRONG
        this.setState({ isApproved: true });
        console.log("Approved");
    }

    onReject = () => {
        this.setState({ isApproved: false });
        console.log("Rejected");
    }

    render() {
        const approval =
            this.state.isApproved ?
                null :
                <Approval onApprove={this.onApprove} onReject={this.onReject} />
        return <div className="ui card">
            <div className="image">
                <img src={this.props.avatar} />
            </div>
            <div className="content">
                <a className="header">{this.props.firstName}</a>
                <div className="meta">
                    <span className="date">Joined in {this.props.joinDate}</span>
                </div>
                <div className="description">{this.props.jobTitle}</div>
            </div>
            <div className="extra content"><a><i className="user icon"></i>{this.props.friendCount} Friends</a></div>
            {approval}
        </div>
    }

}

export default Card;