// class component
// function component
import React, { useState } from "react";
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

    return (
        <>
            <AddUserInfo handleAddNewUser={handleAddNewUser} />
            <br/><br/>
            {console.log('rerender')}
            <DisplayInfo listUsers={this.state.listUsers} handleDeleteUser={handleDeleteUser}/>
        </>
    );
}

export default MyComponent;