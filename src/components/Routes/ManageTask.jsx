
import Swal from "sweetalert2";
import useAllTask from "../Hooks/useAllTask";
import TaskCard from "../Page/TaskCard";
import axios from 'axios';

const ManageTask = () => {

const [data,refetch]=useAllTask()

const handleDelete=(id)=>{
    axios.delete(`${import.meta.env.VITE_APIROUTE}/delete/${id}`)
    .then(()=>{
refetch()
 Swal.fire({
          icon: "success",
          title: "successfully Task deleted",
          text: "Done!",
        });
    })
    .catch(err=>{
      console.log(re)
    })
}

    return (
        <div className="md:w-11/12 mx-auto">
            <h1 className="text-3xl font-bold py-24">Manage Task</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-40">
  {data?.map(task=><TaskCard  key={task._id} heading={'ToDO'}  task={task} handleDelete={handleDelete}>
    </TaskCard>
  )}
</div>

        </div>
    );
};

export default ManageTask;