import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";


const Dashboard = () => {
  const [list, setList] = useState([]);

  useEffect(()=>{
axios.get(`${import.meta.env.VITE_APIROUTE}/tasks`)
.then((res)=>{
  setList(res?.data)
})
.catch(err=>{
  console.log(err);
})
  },[])
    return (
//       <li><NavLink to='/' className='text-base border-b-2 mb-5 border-sky-300 font-semibold text-blue-600 mr-6'><img className="h-8" src="https://img.icons8.com/?size=48&id=fSVp4a58MbGQ&format=png" alt="" />Home</NavLink></li>
//     <li><NavLink to='/addTask' className='text-base border-b-2 mb-5 border-sky-300  font-semibold text-blue-600 mr-6'><img className="h-8" src="https://img.icons8.com/?size=48&id=11819&format=png" alt="" />Add Task</NavLink></li>
// <li><NavLink to='/manageTask' className='text-base border-b-2 mb-5 border-sky-300  font-semibold text-blue-600 mr-6'><img className="h-8" src="https://img.icons8.com/?size=48&id=AHzRyf2YnLjW&format=png" alt="" />Manage Task</NavLink></li>
//    <li> <NavLink to='/list' className='text-base border-b-2 mb-5 border-sky-300  font-semibold text-blue-600 mr-6'><img className="h-8" src="https://img.icons8.com/?size=80&id=YIeSkSqERDGy&format=png" alt="" />ToDo list</NavLink></li>
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col gap-6 md:ml-10">
    {/* Page content here */}
    <div className="stats stats-vertical lg:stats-horizontal shadow">
  <div className="stat">
    <div className="stat-title">Tasks</div>
    <div className="stat-value">{list.length}</div>
    <div className="stat-desc"></div>
  </div>

  <div className="stat">
    <div className="stat-title">New Users</div>
    <div className="stat-value">7</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">12</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Priority</th>
        <th>Status</th>
        <th>Due Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {list?.map((task,index)=>
        <tr key={task?._id}>
        <th>{index+1}</th>
        <td>{task?.title}</td>
        <td>{task?.priority}</td>
        <td>{task?.status}</td>
        <td>{task?.dueData}</td>
        <td></td>
      </tr>
      )}
    </tbody>
  </table>
</div>
    <label htmlFor="my-drawer-2" className="btn bg-blue-200 drawer-button lg:hidden">
      sidebar
    </label>
  </div>
  <div className="drawer-side bg-base-200 ">
  <div className="text-3xl font-bold  text-blue-800 flex items-center gap-2">
        <img className="h-14 ml-6 rounded-full object-cover" src="https://image.shutterstock.com/image-vector/stopwatch-vector-icon-isolated-on-260nw-546713671.jpg" alt="" />
        Task</div>
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><NavLink to='/' className='text-base border-b-2 mb-5 border-sky-300 font-semibold text-blue-600 mr-6'><img className="h-8" src="https://img.icons8.com/?size=48&id=fSVp4a58MbGQ&format=png" alt="" />Home</NavLink></li>
    <li><NavLink to='/addTask' className='text-base border-b-2 mb-5 border-sky-300  font-semibold text-blue-600 mr-6'><img className="h-8" src="https://img.icons8.com/?size=48&id=11819&format=png" alt="" />Add Task</NavLink></li>
 <li><NavLink to='/manageTask' className='text-base border-b-2 mb-5 border-sky-300  font-semibold text-blue-600 mr-6'><img className="h-8" src="https://img.icons8.com/?size=48&id=AHzRyf2YnLjW&format=png" alt="" />Manage Task</NavLink></li>
<li> <NavLink to='/dashboard' className='text-base bg-blue-100 border-b-2 mb-5 border-sky-300  font-semibold text-blue-600 mr-6'><img className="h-8" src="https://img.icons8.com/?size=80&id=YIeSkSqERDGy&format=png" alt="" />ToDo list</NavLink></li>
    </ul>
  </div>
</div>    
);
};

export default Dashboard;