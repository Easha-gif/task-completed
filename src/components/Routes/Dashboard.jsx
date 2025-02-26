import { NavLink } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
         <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
      sidebar
    </label>
    {/* Page content here */}content
  </div>
  <div className="drawer-side bg-blue-200">
  <div className="text-3xl font-bold text-blue-800 flex items-center gap-2 mb-2">
        <img className="h-14 rounded-full object-cover ml-6" src="https://image.shutterstock.com/image-vector/stopwatch-vector-icon-isolated-on-260nw-546713671.jpg" alt="" />
        Task</div>
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-blue-200  min-h-full w-72 p-4">
      {/* Sidebar content here */}
      <li><NavLink to='/' className='text-base border-b-2 mb-5 border-sky-300 font-semibold text-blue-600 mr-6'><img className="h-8" src="https://img.icons8.com/?size=48&id=fSVp4a58MbGQ&format=png" alt="" />Home</NavLink></li>
    <li><NavLink to='/addTask' className='text-base border-b-2 mb-5 border-sky-300  font-semibold text-blue-600 mr-6'><img className="h-8" src="https://img.icons8.com/?size=48&id=11819&format=png" alt="" />Add Task</NavLink></li>
<li><NavLink to='/manageTask' className='text-base border-b-2 mb-5 border-sky-300  font-semibold text-blue-600 mr-6'><img className="h-8" src="https://img.icons8.com/?size=48&id=AHzRyf2YnLjW&format=png" alt="" />Manage Task</NavLink></li>
   <li> <NavLink to='/list' className='text-base border-b-2 mb-5 border-sky-300  font-semibold text-blue-600 mr-6'><img className="h-8" src="https://img.icons8.com/?size=80&id=YIeSkSqERDGy&format=png" alt="" />ToDo list</NavLink></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Dashboard;