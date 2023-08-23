import { useState, useEffect } from "react";

export const useOutsideClick = (element, initialState) => {
    const [isActive, setIsActive] = useState(initialState)

    useEffect(()=>{
        const onClick = element => {
            if (element !== null && !element.contains(element.target)){
                setIsActive(!isActive);
            }
        }

        if(isActive){
            window.addEventListener("click",onClick)
        }

        return() => {
            window.removeEventListener("click",onClick);
        }

    },[isActive,element])

    return [isActive,setIsActive]
}