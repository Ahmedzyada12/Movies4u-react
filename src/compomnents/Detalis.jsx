import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {AiFillStar}from'react-icons/ai'
import {BsEyeFill}from'react-icons/bs'
function Detalis() {

  const param = useParams();
  const[movie,setMovie]=useState([]);
  const getMovie=async()=>{
    const respons=await axios .get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=66eb3bde9cca0487f03e78b512b451e4&language=ar`);
    setMovie(respons.data)
  }

  useEffect(()=>{
    getMovie()
  },[])



  return (
  <section id="Movies-list py-4">
  <div className="container">
    <div className="card1  p-3 text-center rounded-4 text-white my-4">
      <div className="row">
        <div className="col-7  text-center py-4 ">
          <div className="card1 mb-1 text-white p-1 rounded-3 w-50"><h4>{movie.title} </h4></div> 
          <div className="card1 mb-1 text-white p-1 rounded-3 w-50"> <h4>{movie.release_date} </h4></div> 
          <div className="card1 mb-1 text-white p-1 rounded-3 w-50"> <h4>{movie.vote_count} <BsEyeFill/></h4></div> 
          <div className="card1 mb-1 text-white p-1 rounded-3 w-50"><h4>{movie.vote_average} <AiFillStar/></h4></div> 
          <p className='wtext'>{movie.overview}</p>
        </div>
        <div className="col-5 ">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  className="card1 img3 rounded-4  mx-auto" alt />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Detalis