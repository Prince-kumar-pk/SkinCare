import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Admin from "./components/Admin/Admin";
import UpdateData from "./components/Admin/UpdateData";


function App() {
  return (
  <>
<Routes>
<Route path="/" element={<Layout />}>
  <Route path="/" element={<Hero/>}/>
  <Route path="/admin" element={<Admin/>}/>
  <Route path="/updateHeroSection/:id" element={<UpdateData/>}/>
</Route>
</Routes>
  </>
  );
}

export default App;
