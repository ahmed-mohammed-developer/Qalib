/*
import React from 'react';
import './Main.css'
import AllJson from '../../../../public/AllJson.json'
import { Link } from 'react-router-dom';


const Main = () => {
  const data = AllJson.posts;



  return (
    <>
    {data.map((item, index) => (
    <div className='main' key={index}>
      <div className="container">
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="card">
              <Link to={`/Qalib/Details/${item.id}`}>
                <img src={`${item.img}?${index}`} className="card-img-top" alt="" />
                </Link>
                <Link to={`/Qalib/Details/${item.id}`}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.content}</p>
                </div>
                </Link>
                <i class="fa-regular fa-eye"></i>
                <i class="fa-solid fa-file-arrow-down"></i>
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
        </div>
      </div>
    </div>
        ))};
        </>
  )
}

export default Main;
*/
import React, { useState, useEffect } from 'react';
import './Main.css';
import AllJson from '../../../../public/AllJson.json';
import { Link } from 'react-router-dom';

const Main = () => {
  const data = AllJson.posts;
  const [savedItems, setSavedItems] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedItems')) || [];
    setSavedItems(saved);
  }, []);

  const saveToLocalStorage = (item) => {
    let updatedSavedItems = [...savedItems];
    if (savedItems.some(savedItem => savedItem.id === item.id)) {
      updatedSavedItems = updatedSavedItems.filter(savedItem => savedItem.id !== item.id);
      setMessage('تم إزالة العنصر من المفضلة');
    } else {
      updatedSavedItems.push(item);
      setMessage('تم حفظ العنصر في المفضلة');
    }
    setSavedItems(updatedSavedItems);
    localStorage.setItem('savedItems', JSON.stringify(updatedSavedItems));
    setTimeout(() => setMessage(''), 4000); // إخفاء الرسالة بعد 2 ثانية
  };

  const isItemSaved = (item) => {
    return savedItems.some(savedItem => savedItem.id === item.id);
  };

  return (
    <>
      {data.map((item, index) => (
        <div className='main' key={index}>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{ position: 'relative' }}>
                  <Link to={`/Qalib/Details/${item.id}`}>
                    <img src={`${item.img}?${index}`} className="card-img-top" alt="" />
                  </Link>
                  <Link to={`/Qalib/Details/${item.id}`} className="custom-link">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                  </Link>
                  <div className="iconCard">
                  <Link to={item.view} target="_blank" className="custom-link">
                  <i className="fa-regular fa-eye"></i>
                  </Link>
                  <Link to={item.don} target="_blank" className="custom-link">
                  <i className="fa-solid fa-file-arrow-down"></i>
                  </Link>
                  <i className={`fa-solid fa-heart ${isItemSaved(item) ? 'saved' : ''}`} 
                    onClick={() => saveToLocalStorage(item)}
                    style={{ color: isItemSaved(item) ? '#6cee69' : 'inherit' }}
                  ></i>
                  {message && <div className="message">{message}</div>}
                  </div>
                
                
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Main;
