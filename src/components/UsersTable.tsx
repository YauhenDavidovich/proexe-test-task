import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {Paper} from "@mui/material";
import {Users} from "../dal/usersApi";

type UsersPropsType = {
    users: Array<Users>
}

const UsersTable = (props: UsersPropsType) => {

    const styleHeader = {
        backgroundColor: "#808080"
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table" stickyHeader={true}>
                <TableHead>
                    <TableRow style={{}}>
                        <TableCell align="left" style={styleHeader}>
                            Id
                        </TableCell>
                        <TableCell align="left" style={styleHeader}>
                            Name⮃
                        </TableCell>
                        <TableCell align="left" style={styleHeader}>
                            Username
                        </TableCell>
                        <TableCell align="left" style={styleHeader}>
                            City
                        </TableCell>
                        <TableCell align="left" style={styleHeader}>
                            Email
                        </TableCell>
                        <TableCell align="left" style={styleHeader}>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((row, index) => (
                        <TableRow
                            key={`${index}${row.name}`}
                            sx={{
                                "&:last-child td, &:last-child th": {border: 0}, "&:nth-of-type(odd)": {
                                    backgroundColor: "#F8F7FD",
                                },
                            }}
                        >
                            <TableCell component="th" scope="row" align="left">{row.id}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.username}</TableCell>
                            <TableCell align="left">{row.address.city}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">Actions</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default UsersTable
