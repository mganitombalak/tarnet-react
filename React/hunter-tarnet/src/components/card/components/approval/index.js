import React from 'react';

const Approval = props =><div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button" onClick={props.onApprove}>Approve</div>
                            <div className="ui basic red button" onClick={props.onReject}>Decline</div>
                        </div>
                    </div>

export default Approval;