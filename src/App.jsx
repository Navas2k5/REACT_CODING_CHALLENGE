import { Route, Routes } from "react-router-dom"
import ObjectsDashboard from "./component/ObjectDashboard"
import ObjectList from "./component/ObjectList"
import ObjectAdd from "./component/ObjectAdd"

function App(){


  return(
    <Routes>
      <Route path="/" element={<ObjectsDashboard/>}></Route>
      <Route path="/object-list" element={<ObjectList/>}></Route>
      <Route path="/object-add" element={<ObjectAdd/>}></Route>
    </Routes>
  )

}

export default App