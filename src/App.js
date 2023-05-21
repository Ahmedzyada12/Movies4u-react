import React, {useState,useEffect} from 'react'
import axios from 'axios'

import Header from './compomnents/Header'
import Slide from './compomnents/Slide'
import MoviesList from './compomnents/MoviesList'
import Footer from './compomnents/Footer'
import Detalis from './compomnents/Detalis'
import { Route, Routes } from 'react-router-dom'
//

function App() {

        const[movies,setMovies]=useState([]);
        const getMovies=async()=>{
          const respons=await axios .get(`https://api.themoviedb.org/3/movie/popular?api_key=66eb3bde9cca0487f03e78b512b451e4&language=en-US`);
          setMovies(respons.data.results)
        }//moveis 1

        const search = async (word)=>{
          if(word=== ""){
          getMovies() //2
        }else{

        const respons=await axios .get(`https://api.themoviedb.org/3/search/movie?api_key=66eb3bde9cca0487f03e78b512b451e4&language=ar&query=${word}&include_adult=false`);

        setMovies(respons.data.results)
        
        }  
      }//search 3


        useEffect(()=>{
          getMovies()
        },[])

  return (
         <div>
                                
      <Header search={search} /> "4"
      <Slide/>
    <Routes>
     
     <Route path='/'  element={<MoviesList movies={movies}/>} />
     <Route path='/detalis/:id'  element={<Detalis/>} />
    
   </Routes>
      <Footer/>
         </div>
  )
}

export default App