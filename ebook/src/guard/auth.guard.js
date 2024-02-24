import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthGuard = ({ children, roles }) => {

    const loginUser = useSelector(state => state.user);

    const authorize = () => {

        if (!loginUser) {
            return (<Navigate to={{ pathname: '/login' }}></Navigate>);
        }



       
       // console.log(children);


        return (children);
    }

    return authorize();
}