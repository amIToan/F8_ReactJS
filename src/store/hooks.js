import Context from "./context";
import { useContext } from "react";
export const useStore = () => {
    const [ state, dispatch] = useContext(Context) //Hook này để nhận giá trị từ Provider. và nó cx sẽ trả ra giá trị đấy
    return [ state, dispatch]
}