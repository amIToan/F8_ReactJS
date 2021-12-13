// continuing useEffect
//1. Callback luôn đc gọi sau khi component mounted 
// 2. Cleanup luôn đc gọi trước khi component unmounted

import { useEffect, useState } from "react";

// 3. cleanup function luôn đc gọi trước khi callback đc gọi (trừ lần mounted đầu tiên).
function Content() {
    const [avatar, setAvatar] = useState()
    const handlePreview = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        console.log( URL.createObjectURL(file))
        setAvatar(file)
    }
    useEffect(()=> {
        return  () => {
            avatar && URL.revokeObjectURL(avatar.preview)     
        }
    },[avatar])
    return (
        <div>
            <input 
                type="file"
                onChange={handlePreview}
            />
            { avatar && <img src ={avatar.preview} width="50%" alt="" />}
        </div>
    )
}
export default Content