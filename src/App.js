import React from "react";
import Employee from "./Components/FunctionComp";
import DepartmentComp from "./Components/ClassComp";
import ListComponent from "./Components/ListComponent";
import ComponentHook from "./Components/ComponentHook.JS";
import QuizComp from "./QuizComponent/QuizComp";

function App(){
  return (
    <div>
      {/* <h2>Function Components</h2>
      <Employee name={Vijay}/>
      
      <h2>.................</h2>
      <h2>Class Component</h2>
        <DepartmentComp hod={"Mohandas"}/> */}

        {/* <h2>..................</h2>
        <ListComponent/>
        <h2>..................</h2>
        <ComponentHook/> */}
        <QuizComp/>
    </div>
  )
}

export default App;