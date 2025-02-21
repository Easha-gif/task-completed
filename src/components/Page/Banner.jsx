import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${'https://img.freepik.com/free-vector/ombre-blue-curve-light-blue-background_53876-173299.jpg'})`,height:"610px" ,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
       <div className="flex flex-col justify-center items-center py-44">
        <h1 className="text-[3rem] font-bold text-blue-700 text-center">Complete your Task</h1>
        <p className="text-sm text-blue-400 font-semibold text-center py-4">Now , Its time to finish all the Task .Push through and finish strong! Success is built <br></br>  one step at a time,and you're almost there!</p>
      <Link to='/login'>
       <button className="text-white hover:text-blue-700 bg-[#4b9dee] btn">Google Sign In</button>
      </Link>
       </div>
        </div>
    );
};

export default Banner;