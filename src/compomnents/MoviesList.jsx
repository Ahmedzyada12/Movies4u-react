import React from 'react'
import MovieCard from './MovieCard'

function MoviesList({movies}) {
  return (
     
     <section id="Movies-list  py-4">
           
             <div className="container">
             
                <div className="row  ">
{
        movies.length >=1 ?
        movies.map(function(movies){
      return(<MovieCard key={movies.id}movies={movies} />)
        }):
        <h1 className='alert alert-danger'>لايوجد افلام</h1>
}
  
                </div>
           
            </div>


      </section>
  
  )
}

export default MoviesList