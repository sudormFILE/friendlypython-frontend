import React, {Component} from 'react';


class Page extends Component {
    constructor() {
        super();
        this.state = {
            "user": undefined
        };
        if (this.state.user === undefined) {
            this.setState({"user": document.getElementsByName("user-auth")})
        }
    };
    render() {
    const User = () => {
        if (this.state.user === undefined) {
            return <div>
                <p>You haven't logged in yet.</p>
                <a>Login here</a>
            </div>
        } else {
            return <div>
                <p>Welcome, {this.state.user}</p>
            </div>
        }
    };
    return (
    <main className="container" id="Page">
        <div className="container">
            <User/>
        </div>
    </main>
        );
    }
}

export default Page;
