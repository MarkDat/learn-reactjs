// class component
// function component
import React, { useEffect, useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

const MyComponent = () => {
    const [listUsers, setListUsers] = useState([ {id: 4, name: 'Moan', age: 23} ]);

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
    }

    const handleDeleteUser = (userId) => {
        let usersClone = [...listUsers];
        usersClone = usersClone.filter(item => item.id !== userId);

        setListUsers([...usersClone]);
    }

    useEffect(() => {
        setTimeout(() => document.title = 'Mark Dat', 3000);
        console.log('Call me useEffect');
    }, [listUsers]);

    return (
        <>
            <AddUserInfo handleAddNewUser={handleAddNewUser} />
            <br/><br/>
            <DisplayInfo listUsers={listUsers} handleDeleteUser={handleDeleteUser}/>
        </>
    );
}

export default MyComponent;