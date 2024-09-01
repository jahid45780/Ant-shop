import { Route, Routes } from "react-router-dom";
// import Home from "../../Page/Home/Home";
import Category from "../../Page/Category/Category";

function AppRoutes (){
     return <Routes>
        <Route path="/" element={<Category/>} ></Route>
        <Route path="/:categoryId" element={<Category/>} ></Route>
     </Routes>
}

export default AppRoutes