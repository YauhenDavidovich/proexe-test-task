import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {Button, Paper} from "@mui/material";
import {Users} from "../dal/usersApi";
import {ModalDeleteUser} from "./ModalDeleteUser";
import {ModalUpdateUser} from "./ModalUpdateUser";
import {useSortableData} from "./utils/Sort";

type UsersPropsType = {
    users: Array<Users>
}

const UsersTable = (props: UsersPropsType) => {

    const styleHeader = {
        backgroundColor: "#808080"
    }

    const {items, requestSort, sortConfig} = useSortableData(props.users);
    const getClassNamesForHeaders = (name: string) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };


    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: '600px' }}>
            <Table aria-label="simple table" stickyHeader={true}  >
                <TableHead>
                    <TableRow style={{}}>
                        <TableCell align="left" style={styleHeader}>
                        Id
                        </TableCell>
                        <TableCell align="left" style={styleHeader} >
                            Name
                        </TableCell>
                        <TableCell align="left" style={styleHeader}>
                            <Button  onClick={() => requestSort(
                                "username"
                            ) } className={getClassNamesForHeaders("username")}>User name</Button>
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
                    {items.map((row, index) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                "&:last-child td, &:last-child th": {border: 0}, "&:nth-of-type(odd)": {
                                    backgroundColor: "#F8F7FD",
                                },
                            }}
                        >
                            <TableCell component="th" scope="row" align="left"
                                       style={{
                                           width: '10%',
                                           textOverflow: "ellipsis",
                                           overflow: "hidden"
                                       }}>{row.id}</TableCell>
                            <TableCell align="left" style={{width:"30%"}}>{row.name}</TableCell>
                            <TableCell align="left" style={{width:"20%"}}>{row.username}</TableCell>
                            <TableCell align="left" style={{width:"20%"}}>{row.address.city}</TableCell>
                            <TableCell align="left" style={{width:"15%"}}>{row.email}</TableCell>
                            <TableCell align="left" style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",

                            }}>
                                <ModalDeleteUser userId={row.id} name={row.name}/>
                                <ModalUpdateUser userId={row.id}
                                                 name={row.name}
                                                 email={row.email}
                                                 username={row.username}
                                                 city={row.address.city}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Paper>
    );
}


export default UsersTable
