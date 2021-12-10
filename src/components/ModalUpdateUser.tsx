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
import {updateUserTC} from "../bll/usersReducer";
import {useEffect} from "react";

type FormikErrorType = {
    name?: string
    username?: string
    city?: string
    email?: string
}

type ModalUpdateUserPropsType = {
    userId: number| string
    name: string
    username: string
    city: string
    email: string
}

export const ModalUpdateUser = (props:ModalUpdateUserPropsType) => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const buttonAddStyle: React.CSSProperties = {backgroundColor: "orange", color: "white"}

    const formik = useFormik({
        initialValues: {
            email: props.email,
            name: props.name,
            username: props.username,
            city: props.city},
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
            if (!values.username) {
                errors.username = 'Username required'
            }
            if (!values.city) {
                errors.city = 'City required'
            }
            return errors;

        },
        onSubmit: values => {
            dispatch(updateUserTC(props.userId, values.name, values.username, values.city, values.email))
            formik.resetForm()
            setOpen(false);
        },
    });

    useEffect(() => {
        formik.setFieldValue('name', props.name);
        formik.setFieldValue('username', props.username);
        formik.setFieldValue('city', props.city);
        formik.setFieldValue('email', props.email);
    }, [props.email, props.username, props.city, props.name])


    return (
        <div>
            <SuperButton callback={handleClickOpen} title={"Update"} style={buttonAddStyle}/>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={formik.handleSubmit}>
                <DialogTitle>Update user</DialogTitle>
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
                        id="username"
                        label="User name"
                        type="text"
                        fullWidth
                        variant="standard"
                        {...formik.getFieldProps("username")}
                    />
                    {formik.touched.username && formik.errors.username &&
                    <div style={{color: "red"}}>{formik.errors.username}</div>}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="city"
                        label="City"
                        type="text"
                        fullWidth
                        variant="standard"
                        {...formik.getFieldProps("city")}
                    />
                    {formik.touched.city && formik.errors.city &&
                    <div style={{color: "red"}}>{formik.errors.city}</div>}
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
                    <Button type={"submit"}>Update</Button>
                </DialogActions>
            </form>
            </Dialog>
        </div>
);
}
