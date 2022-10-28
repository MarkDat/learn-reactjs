import { useStore, actions } from "./store";

const User = (props) => {

    const [state, dispatch] = useStore();
    const { todos, todoInput } = state; 

    const handleAdd = () => {
        dispatch(actions.addTodoInput(todoInput));
    }

    console.log(todos);

    return (
        <>
            <input value={todoInput} onChange={e => {
                dispatch(actions.setTodoInput(e.target.value));
            }}/>

            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
    )
}

export default User;