
import React, { useEffect, useState } from "react";
import Mealitem from "./Mealitem";
import RecepieIndex from "./RecipeIndex";



const Meal = () =>{

    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");

const [item,setItem] = useState();
const [show, setShow] = useState(false);
const [search,setSearch] = useState("");

useEffect(()=>{

fetch(url).then(res => res.json()).then(data =>{
    console.log(data.meals);
    setItem(data.meals);
    setShow(true);
    
})

},[url])


const setIndex = (alpha) =>{
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
}


const searchRecipe=(event)=>{
    if(event.key==='Enter'){
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
}




    return(
    <>
    <div className="main">
        <div className="heading">
            <h1>Welcome to Bhukar Bhakkar Corners Page</h1>
            <h2>"Satisfy Your Curiosity and Your Appetite—Discover, Learn, and Feast!"</h2>
            <h4>Welcome to Bhukkar Bhakkar Corner—your ultimate destination for all things food! Whether you're a seasoned foodie or just curious about the culinary world, this is the place for you. Explore a wide variety of dishes, discover their ingredients, and learn about their origins. Our platform not only provides you with mouth-watering recipes but also offers engaging YouTube videos that bring each dish to life. From local delicacies to international cuisines, Bhukkar Bhakkar Corner serves up a feast of flavors right at your fingertips.</h4>
        </div>
        <div className="serachbox">
            
            <input type="search" className="search-bar" onChange={event=>setSearch(event.target.value)} onKeyDown={searchRecipe} />
        </div>
        <div className="container">


{
    show ? <Mealitem data={item}/>: "Not Found"
}
        </div>

        <div className="indexContainer">
            <RecepieIndex alphaIndex={(alpha)=> setIndex(alpha)}/>
        </div>
    </div>
    
    </>
    
)

}
export default Meal