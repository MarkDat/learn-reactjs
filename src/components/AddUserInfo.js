import React, { useState } from "react";

const AddUserInfo = (props) => { 
    const { handleAddNewUser } = props;
    const [useInfo, setUserInfo] = useState({
        name: 'Dat',
        address: '24 Che Viet Tan',
        age: 26
    });

    const handleNameOnChange = (e) => {
        setUserInfo({
            name: e.target.value
        });
    }

    const handleAgeOnChange = (e) => {
        setUserInfo({
            age: e.target.value
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: useInfo.name,
            age: useInfo.age
        });
    }


    return (
        <>
            My name is: {useInfo.name} and age: {useInfo.age}
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <label>Your Name: </label>
                <input type="text"
                    value={useInfo.name}
                    onChange={(e) => handleNameOnChange(e)} />

                <label>Your Age: </label>
                <input type="text"
                    value={useInfo.age}
                    onChange={(e) => handleAgeOnChange(e) } />
                <button>Submit!</button>
            </form>
        </>
    );
}

export default AddUserInfo;