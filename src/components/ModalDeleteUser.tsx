import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {useDispatch} from "react-redux";
import {SuperButton} from "./SuperButton";
import {deleteUserTC} from "../bll/usersReducer";


type ModalDeleteUserPropsType = {
    userId: string | number
    name: string
}

export const ModalDeleteUser = (props: ModalDeleteUserPropsType) => {

    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleDeleteUser = () => {
        dispatch(deleteUserTC(props.userId))
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const buttonAddStyle: React.CSSProperties = {backgroundColor: "red", color: "white"}

    return (
        <div>
            <SuperButton callback={handleClickOpen} title={"Delete"} style={buttonAddStyle}/>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Delete User</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete the {props.name}?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDeleteUser}>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
