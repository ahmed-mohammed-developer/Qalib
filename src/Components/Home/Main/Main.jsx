import React from 'react';
import './Main.css'
import AllJson from '../../Json/AllJson.json'
import { Link } from 'react-router-dom';


const Main = () => {
  const data = AllJson.posts;



  return (
    <>
    {data.map((item, index) => (
    <div className='main' key={index}>
      <div className="container">
      <Link to={`/Qalib/Details/${item.id}`}>
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img src={`${item.img}?${index}`} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.content}</p>
                </div>
              </div>
            </div>
        </div>
        </Link>
      </div>
    </div>
        ))};
        </>
  )
}

export default Main;
