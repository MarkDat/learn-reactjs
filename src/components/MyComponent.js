// class component
// function component
import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 4, name: 'Moan', age: 23}
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        });
    }

    handleDeleteUser = (userId) => {
       let usersClone = [...this.state.listUsers];
       usersClone = usersClone.filter(item => item.id !== userId);

       this.setState({
        listUsers: usersClone
       });
    }

    //JSX
    render() {
        return (
            <div>
                <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
                <br/><br/>
                {console.log('rerender')}
                <DisplayInfo listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser}/>
            </div>
        );
    }
}

export default MyComponent;