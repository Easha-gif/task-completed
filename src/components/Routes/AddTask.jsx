import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddTask = () => {
const {user}=useContext(AuthContext)
const navigate=useNavigate()
const AddTaskFromData=(e)=>{
e.preventDefault()
const form=e.target
const title=form.title.value
const description=form.description.value
const userEmail=user?.email
const userName=user?.displayName
const taskStatus='Todo'
const addTaskData={
  title,description,userEmail,userName,date:new Date(),taskStatus
}
const {data}=axios.post(`${import.meta.env.VITE_APIROUTE}/addTask`,addTaskData)
.then((res)=>{
  navigate('/manageTask')
   Swal.fire({
          icon: "success",
          title: "successfully Task added",
          text: "Done!",
        });
})
.catch(err=>{
  Swal.fire({
    icon: "error",
    title: "wrong",
    text: "Something wrong!",
  });
})
}


    return (
        <div className="md:w-11/12 mx-auto">
            <h1 className="text-3xl font-bold text-black pt-24 pb-10">Add Task</h1>

<div className="flex justify-center items-center gap-16">
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
      <form onSubmit={AddTaskFromData} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="text-base font-semibold">Title</span>
          </label>
          <input type="text" placeholder="Task Title" name="title" className="input input-bordered" maxLength={50} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-base font-semibold">Description</span>
          </label>
          <input type="text" placeholder="Task Description" name="description" className="input input-bordered" maxLength={200} required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-500 text-white hover:text-blue-600">Add Task</button>
        </div>
      </form>
    </div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfOkgsSnsafG7VqPfCW10V79pUGainmr9G7Q&s" alt="" />
</div>
        </div>
    );
};

export default AddTask;