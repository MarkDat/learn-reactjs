import React from "react";

class AddUserInfo extends React.Component {
    
    state = {
        name: 'Dat',
        address: '24 Che Viet Tan',
        age: 26
    };

    handleNameOnChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleAgeOnChange = (e) => {
        
        // Bad code
        // this.stage.age = e.target.value
        this.setState({
            age: e.target.value
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }

    render() {
        return (
            <>
                My name is: {this.state.name} and age: {this.state.age}
                <form onSubmit={(e) => this.handleOnSubmit(e)}>
                    <label>Your Name: </label>
                    <input type="text"
                        value={this.state.name}
                        onChange={(e) => { this.handleNameOnChange(e) }} />

                    <label>Your Age: </label>
                    <input type="text"
                        value={this.state.age}
                        onChange={(e) => { this.handleAgeOnChange(e) }} />
                    <button>Submit!</button>
                </form>
            </>
        );
    }
}

export default AddUserInfo;