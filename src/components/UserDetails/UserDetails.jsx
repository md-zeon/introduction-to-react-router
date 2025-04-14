import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    const {name, website} = user;
    const userStyle = {
		border: "2px solid yellow",
		padding: "10px",
		borderRadius: "10px",
		margin: "10px",
	};

    const params = useParams();
    console.log(params);

    return (
        <div style={userStyle}>
            <h2>User Details Here</h2>
            <h4>Name: {name}</h4>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;