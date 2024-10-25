
import BottomBar from "./components/BottomBar";
import Blogs from "./components/Blogs";
import TopBar from "./components/TopBar";
import './App.css'
import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
export default function App() {

  const {handlePageChange,page}= useContext(AppContext);
  useEffect(()=>{
    handlePageChange(page);
  },[])
  return(
    
    <div className="w-full h-full flex flex-col gap-y-4 justify-center items-center">

  <TopBar />
  <hr className="w-full border-t-2 border-gray-300 my-1" />
  
  <Blogs />
  <hr className="w-full border-t-2 border-gray-300 my-1" />
  
  <BottomBar />
</div>

    
    )
}
