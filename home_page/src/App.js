import React, {Component} from 'react';
import Page from './Page'
import Header from './Header'


class App extends Component {
    render() {
        return [
            <Header key="Header"/>,
            <Page key="Page"/>
        ];
    }
}

export default App;
