import React from 'react'
// Event Handler Function
// setTimeout
// SSR
// Kendi Hatalarini yakalayamaz Sadece Children
export default class ErrorCatcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isError: false }
    }

    static getDerivedStateFromError(error) {
        return { isError: true };
    }

    componentDidCatch(err,errInfo){
        console.log(err);
        console.log(errInfo);
    }

    render() {
        return this.state.isError ?
            <div>It is not yours.It is us. :(</div> :
            this.props.children
    }
}

