import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Loading from "../Page/Loading";
import { Navigate, useNavigate } from "react-router-dom";


const Private = ({children}) => {
const {loading , user}=useContext(AuthContext)
if(loading){
    return <Loading></Loading>
 }
if(user){
    return children
   }
if(!user){
return <Navigate to='/login'></Navigate>
}
};

export default Private;