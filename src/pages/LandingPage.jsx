import { NavLink } from "react-router-dom"
import Login from "./Login"

function LandingPage() {

  return (
    
    // <div 
    //   className='text-3xl flex flex-col gap-10 justify-center items-center w-screen h-screen font-black text-blue-900'>
    //     Landing Page
    //     <div className="text-lg font-semibold border-2 rounded-full p-4 border-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer">
          // <NavLink to='/banking'>Go to Banking</NavLink>
    //     </div>
    // </div>
    <Login />
  )
}

export default LandingPage