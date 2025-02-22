

const TaskCard = ({task ,handleDelete}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{task.title}</h2>
    <p>{task.description}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleDelete(task._id)} className="btn">Delete</button>
    </div>
  </div>
</div>
    );
};

export default TaskCard;