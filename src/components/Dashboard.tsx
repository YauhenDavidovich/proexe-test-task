import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchUsersTC} from "../bll/usersReducer";
import UsersTableContainer from "./UsersTableContainer";

export const Dashboard = () => {


    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchUsersTC());
    }, [dispatch])
    return (<div className={'main'}>
            <h2>Dashboard</h2>
            <div className="mainBlock">
                <UsersTableContainer/>
            </div>
        </div>

    )
}
