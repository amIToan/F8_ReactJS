import Context from "./context";
import { useReducer} from 'react'
import reducer, {  iniState} from "./reducer";
import logger from './logger'
function Provider({children}) {
    const [state, dispatch] = useReducer(logger(reducer), iniState)// lấy iniState set vào cho reducer rồi nhả vào state
    return (
        <Context.Provider value={[state, dispatch]}>  
            {children}
        </Context.Provider>
    )
}
export default Provider; 
// thằng nay là thằng cung cấp
// state ở đây là inistate 