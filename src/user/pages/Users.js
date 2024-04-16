import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{id: 'user1', name: 'Adeline', 
    image: 'https://www.iconpacks.net/free-icon/no-profile-picture-15257.html', 
    places: 3}];

    return <UsersList items={USERS}/>;
};

export default Users;