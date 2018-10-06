import React from 'react';
import ReactDOM from 'react-dom';

import {Badge} from './components/badge';
import {Users} from './components/users';
import {Popular} from './components/popular';

import * as styles from './index.css';

// A components can have:
// . state (optional)
// . lifecycle events (optional)
// . UI (required)

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                Hello and welcome to the React world!!!
                <Badge
                    name='Hafeez Syed'
                    username='hafeez-syed'
                    img='https://avatars3.githubusercontent.com/u/2829657?s=460&v=4'
                />

                <hr />

                <Users users={[
                    { name: 'Tyler', friend: true },
                    { name: 'Ryan', friend: true },
                    { name: 'Michael', friend: false },
                    { name: 'Mikenzi', friend: false },
                    { name: 'Jessica', friend: true },
                    { name: 'Dan', friend: false } ]}
                />

                <hr />

                <Popular
                />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
