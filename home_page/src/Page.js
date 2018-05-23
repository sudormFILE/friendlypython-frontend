import React, {Component} from 'react';


class Page extends Component {
    constructor() {
        super();
        this.state = {
            "user": document.getElementsByTagName('meta')['user-auth'].content
        };
    };
    render() {
    const User = () => {
        if (this.state.user === '***') {
            return <div>
                <p>You haven't logged in yet.</p>
                <a>Login here</a>
            </div>
        } else {
            return <div>
                <p>Welcome, {this.state.user}!</p>
            </div>
        }
    };
    return (
    <main className="container" id="Page">
        <div className="row">
            <User/>
        </div>
    </main>
        );
    }
}

export default Page;
