import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";


const UpdateTask = () => {

const {user}=useContext(AuthContext)
const {id} = useParams()
const [singleTask , setSingleTask] = useState([])
const [selectedValue, setSelectedValue] = useState("");
const navigate=useNavigate()
// single task load
useEffect(()=>{
axios.get(`${import.meta.env.VITE_APIROUTE}/task/${id}`)
.then((res)=>{
setSingleTask(res?.data)
setSelectedValue(res?.data?.priority)
})
.catch((err)=>{
console.log(err);
})
},[id])
// task updated function
const updateTaskFromData=(e)=>{
    e.preventDefault()
    const form=e.target
    const title=form.title.value
    const description=form.description.value
    const userEmail=user?.email
    const userName=user?.displayName
    const taskStatus='Todo'
    const status = "Pending"
    const dueData = form.date.value
    const priority = form.priority.value
    const updateTaskData={
      title,description,userEmail,userName,date:singleTask?.date,lastUpdateDate:new Date(),taskStatus,status,dueData,priority
    }
    axios.put(`${import.meta.env.VITE_APIROUTE}/update/${id}`,updateTaskData)
    .then(()=>{
      navigate('/manageTask')
       Swal.fire({
              icon: "success",
              title: "successfully Task Update",
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
        <div className="md:w-11/12 mx-auto mb-32">
            <h1 className="text-3xl font-bold text-black pt-24">Update Task</h1>

<div className="flex justify-center items-center gap-16">
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
      <form onSubmit={updateTaskFromData} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="text-base font-semibold">Title</span>
          </label>
          <input type="text" placeholder="Task Title" name="title" className="input input-bordered" maxLength={50} defaultValue={singleTask?.title} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-base font-semibold">Description</span>
          </label>
          <input type="text" placeholder="Task Description" name="description" className="input input-bordered" maxLength={200} defaultValue={singleTask?.description}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-base font-semibold">Priority</span>
          </label>
         <select  name="priority" className="input input-bordered"value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
          <option value="">select priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
         </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-base font-semibold">Due Date</span>
          </label>
          <input type="date" placeholder="Due Date" name="date" className="input input-bordered" defaultValue={singleTask?.dueData}/>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-500 text-white hover:text-blue-600">Update Task</button>
        </div>
      </form>
    </div>
</div>
</div>
    );
};

export default UpdateTask;