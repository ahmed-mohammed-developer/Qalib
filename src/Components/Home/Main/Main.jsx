import React from 'react'
import BanerJson from '../../../../public/Json/BanerJson.json'
import { Link } from 'react-router-dom';




const Main = () => {
  const data = BanerJson.posts;

  return (
    <Link to={`/Qalib/Details/${data.id}`}>
    <div className='main'>
      <div className="container">
      <div className="row">
      {data.map((item, index)=> (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
            <div class="card">
  <img src={item.img} class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.content}</p>
    <Link to={`/Qalib/Details/${item.id}`} className="btn btn-primary">Go somewhere</Link>  </div>
</div>
            </div>
                            ))}
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Main
