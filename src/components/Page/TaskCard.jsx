import { Link } from "react-router-dom";


const TaskCard = ({task ,handleDelete}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-xl font-bold text-black">{task.title}</h2>
    <p className="text-sm font-semibold text-gray-500 pb-4">{task.description}</p>
    <p className="text-sm font-semibold text-gray-700">Priority : {task.priority}</p>
    <p className="text-sm font-semibold text-gray-700">Status : {task.status}</p>
    <p className="text-sm font-semibold text-gray-700">Due Date : {task.dueData}</p>
    <div className="card-actions justify-end">
     <Link to={`/updateTask/${task._id}`}>
      <button className="btn bg-blue-200"><img className="h-5" src="https://img.icons8.com/?size=48&id=12082&format=png" alt="" /></button>
     </Link>
      <button onClick={()=>handleDelete(task._id)} className="btn bg-red-200 text-red-600"><img className="h-5" src="https://img.icons8.com/?size=80&id=102350&format=png" alt="" /></button>
    </div>
  </div>
</div>
    );
};

export default TaskCard;