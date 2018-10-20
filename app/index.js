import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Nav} from './components/nav';
import {Badge} from './components/badge';
import {Users} from './components/users';
import {Battle} from './components/battle';
import {Popular} from './components/popular';

import * as styles from './index.css';

// A components can have:
// . state (optional)
// . lifecycle events (optional)
// . UI (required)

class App extends React.Component {
    render() {
        let friends = [
            { name: 'Tyler', friend: true },
            { name: 'Ryan', friend: true },
            { name: 'Michael', friend: false },
            { name: 'Mikenzi', friend: false },
            { name: 'Jessica', friend: true },
            { name: 'Dan', friend: false } ];

        return (

            <Router>
                <div className='container'>
                    <Nav />

                    <Switch>
                        <Route exact path='/' render={(props) => <Badge {...props}
                                                                        name='Hafeez Syed'
                                                                        username='hafeez-syed'
                                                                        img='https://avatars3.githubusercontent.com/u/2829657?s=460&v=4' />} />
                        <Route path='/friends' render={(props) => <Users {...props} users={friends} />} />
                        <Route path='/battle' component={Battle} />
                        <Route path='/popular-repos' component={Popular} />
                        <Route render={() => {
                            return <p>Not found 404</p>
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
