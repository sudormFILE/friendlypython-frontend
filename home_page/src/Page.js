import React, {Component} from 'react';


class Page extends Component {
    constructor() {
        super();
        this.state = {
            "user": document.getElementsByTagName('meta')['user-auth'].content
        };
    };
    render() {
    const url = window.location.href;
    const logout = url[url.length - 1] === '/' ? url+'auth/logout': url+'/auth/logout';

    const User = () => {
        if (this.state.user === '***') {
            return <div>
                <p>You haven't logged in yet.</p>
                <a>Login here</a>
            </div>
        } else {
            return <div className="col">
                <p id="user-auth">
                    {this.state.user}
                    <a href={logout}>Logout</a>
                </p>
            </div>
        }
    };
    return (
    <main className="container-fluid" id="Page">
        <div className="row">
            <User/>
        </div>
    </main>
        );
    }
}

export default Page;
