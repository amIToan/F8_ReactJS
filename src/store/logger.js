
function logger(reducer) {
    return (preState,action) => {
        console.group(action.type)
        console.log('Pre:',preState)
        const nextState = reducer(preState,action)
        console.log( 'Next state:', nextState)
        console.groupEnd()
        return nextState
    }
}
export default logger