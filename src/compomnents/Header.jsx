import React from 'react'
import { Link } from 'react-router-dom';

function Header({search} ) {

  const onsearch=(word)=>{  //1 داله تستقبل الكلام ال هكتبه ف السيرش
    search(word) //2 هبعت الكلام ال كتبته للسيرش
  }

  return (
          <header className="py-1 mb-2 ">

              {
              
       <nav className="navbar navbar-expand-lg ">
          <div className="container">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

                <div className="collapse navbar-collapse my-1" id="navbarTogglerDemo01">

                 <Link to="/">< img src={require('../images/movies_logo_for-header.png')} className="img4" alt="" /></Link>
                    {/* <ul className="navbar-nav  me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                          <a className="nav-link active text-light"  href="#!">افلام</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text-light" href="#!">مسلسلات</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text-light" href="#!">كارتون</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text-light" href="#!">مصارعه</a>
                        </li>

                    </ul> */}

              <form className="d-flex ms-auto" role="search">

                <input type="text" onChange={(e)=>onsearch(e.target.value)} className="form-control   search mt-2"  placeholder="ابحث هنا" />
                <button className="btn btn-outline-light mx-2 " type="submit">Search</button>

              </form>
            </div>
          </div>
        </nav>

      }
</header>

  )
}

export default Header