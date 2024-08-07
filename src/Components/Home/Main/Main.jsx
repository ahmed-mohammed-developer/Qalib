import React, { useEffect } from 'react';
import BanerJson from '../../../../public/Json/BanerJson.json';
import { Link } from 'react-router-dom';

const Main = () => {
  const data = BanerJson.posts;

  useEffect(() => {
    // كود لإعادة تحميل الصور
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = img.src;
      img.src = '';
      img.src = src;
    });
    console.log('Images reloaded');
  }, []);

  return (
    <Link to={`/Qalib/Details/${data.id}`}>
      <div className='main'>
        <div className="container">
          <div className="row">
            {data.map((item, index) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="card">
                  <img src={item.img} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.content}</p>
                    <Link to={`/Qalib/Details/${item.id}`} className="btn btn-primary">Go somewhere</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Main;
