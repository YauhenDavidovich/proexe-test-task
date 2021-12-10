import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {useDispatch} from "react-redux";
import {SuperButton} from "./SuperButton";
import {useFormik} from "formik";
import {addUserTC} from "../bll/usersReducer";

type FormikErrorType = {
    name?: string
    email?: string
}


export const ModalAddUser = () => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const buttonAddStyle: React.CSSProperties = {backgroundColor: "powderblue", color: "white"}

    const formik = useFormik({
        initialValues: {
            email: "",
            name: ""
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Please type your email!";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.name) {
                errors.name = 'Name required'
            }
            return errors;

        },
        onSubmit: values => {
            dispatch(addUserTC(values.name, values.email))
            formik.resetForm()
            setOpen(false);
        },
    });


    return (
        <div>
            <SuperButton callback={handleClickOpen} title={"Add user"} style={buttonAddStyle}/>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={formik.handleSubmit}>
                <DialogTitle>Create new user</DialogTitle>
                <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            {...formik.getFieldProps("name")}
                        />
                    {formik.touched.name && formik.errors.name &&
                    <div style={{color: "red"}}>{formik.errors.name}</div>}
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="standard"
                            {...formik.getFieldProps("email")}
                        />
                    {formik.touched.email && formik.errors.email &&
                    <div style={{color: "red"}}>{formik.errors.email}</div>}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type={"submit"}>Add</Button>
                </DialogActions>
            </form>
            </Dialog>
        </div>
);
}
