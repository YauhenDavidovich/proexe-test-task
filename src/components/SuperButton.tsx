import React from "react";
import Button from "@mui/material/Button";


type SuperButtonPropsType = {
    callback: () => void
    title: string
    style: React.CSSProperties

}

export const SuperButton: React.FC<SuperButtonPropsType> = ({callback, title,style}) => {

    return (<>
            <Button style={style} onClick={callback} variant={"contained"}>{title}</Button>
        </>

    )
}
