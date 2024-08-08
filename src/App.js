import React from "react";
import Meal from "./Components/Meal";
import './Components/style.css';
import { Route,Routes } from "react-router-dom";
import RecepieInfo from "./Components/RecipeInfo";

function App() {
  return (
<>
<Routes>
<Route path = "/" element={<Meal/>}/>
<Route path = "/:MealId" element={<RecepieInfo/>}/>


</Routes>

</>

  )
}

export default App;
