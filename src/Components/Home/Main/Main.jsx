import React from 'react'
import IM from '../../../assets/images/2.png'



const Main = () => {
  return (
    <div className='main'>
      <div className="container">
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div class="card">
  <img src={IM} class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div class="card">
  <img src={IM} class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div class="card">
  <img src={IM} class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
