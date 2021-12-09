import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersTC} from "../bll/usersReducer";
import PacksTable from "./UsersTable";
import {AppRootStateType} from "../bll/store";
import {Users} from "../dal/usersApi";
import UsersTableContainer from "./UsersTableContainer";

export const Dashboard = () => {


    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchUsersTC());
    }, [dispatch])
    return (<div className="mainBlock">
            <h2>Dashboard</h2>
            <UsersTableContainer/>

        </div>
    )
}
