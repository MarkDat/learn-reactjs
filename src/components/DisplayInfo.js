import React, { useState } from "react";
import "./DisplayInfo.scss"
import logo from "./../logo.svg"

const DisplayInfo = (props) => {
    const { listUsers } = props;

    const [isShow, setIsShow] = useState(true);

    const handleShowHideUsers = () => {
        setIsShow(!isShow);
    }

    console.log('DisplayInfo render');

    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => handleShowHideUsers()}>
                    {isShow ? 'Show':'Hide'} list users:
                </span>
            </div>
            {isShow && 
                (<>
                    {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? 'red' : 'green'}>
                                    <div>My name is: {user.name}</div>
                                    <div>Age: {user.age}</div>
                                    <div>
                                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr/>
                                </div>
                            )
                    })}
                </>)
            }
        </div>
    );
}

export default DisplayInfo;