import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const user = use(userPromise);
    const {name, username} = user;
    return (
        <div>
            <p><small>Username: {username}</small></p>
            <p>{name}</p>
        </div>
    );
};

export default UserDetails2;