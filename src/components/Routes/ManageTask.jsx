
import Swal from "sweetalert2";
import useAllTask from "../Hooks/useAllTask";
import TaskCard from "../Page/TaskCard";
import axios from 'axios';

const ManageTask = () => {

const [data,refetch]=useAllTask()
const handleDelete=(id)=>{

  Swal.fire({
    title: "Are you sure?",
    text: "You want to delete this task!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      
    axios.delete(`${import.meta.env.VITE_APIROUTE}/delete/${id}`)
    .then(()=>{
refetch()
Swal.fire({
  title: "Deleted!",
  text: "Your Task has been deleted.",
  icon: "success"
    })
      })
      .catch(err=>{
        console.log(err)
      })
      
    }
  });
}

    return (
        <div className="md:w-11/12 mx-auto">
            <h1 className="text-3xl font-bold pt-24 pb-10">Manage Task</h1>
{data?.length == 0 && <p className="text-2xl font-bold text-red-300 text-center">No Task you are added</p>}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-40">
  {data?.map(task=><TaskCard  key={task._id} heading={'ToDO'}  task={task} handleDelete={handleDelete}>
    </TaskCard>
  )}
</div>

        </div>
    );
};

export default ManageTask;