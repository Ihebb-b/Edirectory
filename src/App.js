import logo from './logo.svg';
import './App.css';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './Pages/Home';
import RestaurantList from './Pages/RestaurantList';
import MenusList from './Pages/MenusList';
import RecipesList from './Pages/RecipesList';
import RestaurantDetail from './Pages/RestaurantDetail';
import RecipeDetail from './Pages/RecipeDetail';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Role from './Pages/Role';
import AuthPage from './Pages/AuthPage';

function App() {

  return (

   <div className= "App">
        <BrowserRouter  basename={document.baseURI.substring(document.baseURI.indexOf(window.location.origin) + window.location.origin.length, document.baseURI.lastIndexOf('/'))} >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rlist" element={<RestaurantList />} />
                <Route path="/menulist" element= { <MenusList/> } />
                <Route path="/recipelist" element= { <RecipesList/> } />
                <Route path="/restaurantdetail" element= { <RestaurantDetail/> } />
                <Route path="/recipedetail" element= { <RecipeDetail/> } />
                <Route path="/signin" element= { <SignIn/> } />
                <Route path="/signup" element= { <SignUp/> } />
                <Route path="/profile" element= { <Profile/> } />
                <Route path="/authpage" element= { <AuthPage/> } />
                <Route path="/role" element= { <Role/> } />
                

                
            </Routes>
        </BrowserRouter>


   </div>   
  );
}

export default App;
