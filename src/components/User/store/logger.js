import reducer from "./Reducer"

function logger(reduce) {
    return (preState, action) => {
        
        console.group(action.type);
            console.log('Pre state: ', preState);
            console.log('Action: ', action);
            const nextState = reducer(preState, action);

            console.log('Next state: ', nextState);
        console.groupEnd();

        return nextState;
    }
}

export default logger;
