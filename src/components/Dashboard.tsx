import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersTC} from "../bll/usersReducer";
import PacksTable from "./UsersTable";
import {AppRootStateType} from "../bll/store";
import {Users} from "../dal/usersApi";

export const Dashboard = () => {
    const users = useSelector<AppRootStateType, Array<Users>>(state=> state.users)

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchUsersTC());
    }, [dispatch])
    return (<div><PacksTable users={users}/>
        </div>
    )
}
