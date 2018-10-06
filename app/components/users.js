import PropTypes from 'prop-types';
import React from 'react';

export class Users extends React.Component {
    render() {
        let friends = this.props.users.filter((user) => {
            return user.friend;
        });

        let nonFriends = this.props.users.filter((user) => {
            return !user.friend;
        });
        return (
            <div>
                <h1>Friends</h1>
                <ul>
                    {
                        friends.map((friend) => {
                            return <li key={friend.name}>{friend.name}</li>
                        })
                    }
                </ul>

                <hr />

                <h1> Non Friends </h1>
                <ul>
                    {
                        nonFriends.map((friend) => {
                            return <li key={friend.name}>{friend.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

Users.propTypes = {
    /**
     *  users = [
     *      {
     *          name: 'Firstname Lastname',
     *          friend: true,
     *      }
     *  ]
     */
    users: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        friend: PropTypes.bool.isRequired
    }))
};
