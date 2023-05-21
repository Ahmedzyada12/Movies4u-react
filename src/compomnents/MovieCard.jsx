import React from 'react'
import { Link } from 'react-router-dom'

import {BsEyeFill}from'react-icons/bs'
import {AiFillStar}from'react-icons/ai'

function MovieCard({movies}) {
  return (

  <div className="col-md-3  col-sm-6">
    
      <div className="card  mt-4  text-center">
      

            <img src= {`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} className="img1 rounded-3 " alt="" />
          
                    <div className=" overlay text-center mt-1 text-white ">

                        <div className="text">
                            
                              <h5> {movies.title}</h5>
                              <h5> {movies.release_date}</h5>  
                              <p> {movies.vote_count} <BsEyeFill/>   {movies.vote_average} <AiFillStar/></p>
                            
                              <Link to={`./detalis/${movies.id}`} className="btn btn-outline-light ">التفاصيل</Link>
                        </div>
                  </div>
              
        <div/>
     </div>
   

  </div>

  )


}

export default MovieCard