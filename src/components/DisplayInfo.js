import React from "react";
import "./DisplayInfo.scss"
import logo from "./../logo.svg"

// class DisplayInfo extends React.Component {

//     render() {
//         console.log(this.props);
//         const { listUsers } = this.props;
//         return (
//             <div className="display-info-container">
//                 {true && 
//                     (<>
//                         {listUsers.map((user) => {
//                                 return (
//                                     <div key={user.id} className={+user.age > 18 ? 'red' : 'green'}>
//                                         <div>My name is: {user.name}</div>
//                                         <div>Age: {user.age}</div>
//                                         <div>
//                                             <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                         </div>
//                                         <hr/>
//                                     </div>
//                                 )
//                         })}
//                     </>)
//                 }
//             </div>
//         );
//     }
// }

const DisplayInfo = (props) => {
    const { listUsers } = props;

    return (
        <div className="display-info-container">
            {true && 
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