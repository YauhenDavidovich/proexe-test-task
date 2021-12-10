import * as React from "react";
import {Users} from "../dal/usersApi";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";
import UsersTable from "./UsersTable";
import {ModalAddUser} from "./ModalAddUser";


const UsersTableContainer = () => {
    const users = useSelector<AppRootStateType, Array<Users>>(state=> state.users)


    return (
        <div className={'tableWrapper'}>
            <div className={'tableHeader'}>
                <h3>User list</h3>
                <ModalAddUser/>
            </div>
            <UsersTable users={users}/>
        </div>

    );
}


export default UsersTableContainer
