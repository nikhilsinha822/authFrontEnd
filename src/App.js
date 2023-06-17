import Registration from "./component/Registration";
import Login from "./component/Login";
import Home from "./component/Home";
import Layout from "./component/Layout";
import Editor from "./component/Editor";
import Admin from "./component/Admin";
import Missing from "./component/Missing";
import Unauthorized from "./component/Unauthorized";
import Lounge from "./component/Lounge";
import LinkPage from "./component/LinkPage";
import RequireAuth from "./component/RequireAuth";
import { Route,Routes } from "react-router-dom";

const ROLES={
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  return <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Registration/>}/>
      <Route path='linkpage' element={<LinkPage/>}/>
      <Route path='unauthorized' element={<Unauthorized/>}/>
      
      <Route element={<RequireAuth allowedRoles={[ROLES.User]}/>}>
        <Route path='/' element={<Home/>}/>
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Editor]}/>}>
        <Route path='editor' element={<Editor/>}/>
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>}>
        <Route path='admin' element={<Admin/>}/>
      </Route>
      
      <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor]}/>}>
        <Route path='lounge' element={<Lounge />}/>
      </Route>

      <Route path="*" element={<Missing/>}/>
    </Route>
  </Routes>
}

export default App;
