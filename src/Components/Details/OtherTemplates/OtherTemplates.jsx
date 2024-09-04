import React, { useState, useEffect } from 'react';
import './OtherTemplates.css';
import AllJson from '../../../../public/AllJson.json';
import { Link } from 'react-router-dom';
import { MdExpandMore } from "react-icons/md";

const OtherTemplates = () => {
  const data = AllJson.posts;
  const [savedItems, setSavedItems] = useState([]);
  const [showMorePost, setShowMorePost] = useState(3);

  const loadMore = () => {
    setShowMorePost((prev) => prev + 3);
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedItems')) || [];
    setSavedItems(saved);
  }, []);

  return (
    <>
      <div className='OtherTemplates'>
        <div className="container">
          <div className="row">
            {data
              .sort(() => Math.random() - 0.5) // ترتيب العناصر بشكل عشوائي
              .slice(0, showMorePost) // تحديد عدد العناصر المعروضة
              .map((item, index) => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 marginBoutton" key={index}>
                  <div className="card" style={{ position: 'relative' }}>
                    <a href={`#/Details/${item.id}`} target="_blank">
                      <img src={`${item.img}?${index}`} className="card-img-top" alt="" />
                    </a>
                    <a href={`#/Details/${item.id}`} target="_blank">
                      <div className="card-body mb-2">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </a>
                    <Link to={item.view} target="_blank" className="custom-link">
                      <div className='text-icon2'>
                        <i className="fa-regular fa-eye"></i>
                        <p>لمشاهدة القالب</p>
                      </div>
                    </Link>
                    <Link to={item.download} target="_blank" className="custom-link">
                      <div className="text-icon2">
                        <i className="fa-solid fa-file-arrow-down"></i>
                        <p>لتحميل القالب</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            {showMorePost >= data.length ? null : (
              <div>
                <span className="load-more-button" onClick={loadMore}>
                  للمزيد <MdExpandMore size={20} />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherTemplates;
