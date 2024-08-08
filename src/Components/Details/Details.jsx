import React, { useEffect, useState } from 'react';
import './Details.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const [data, setData] = useState(null); // تغيير الحالة لتكون كائنًا واحدًا بدلاً من مصفوفة
  const { id } = useParams(); // استخراج id من params
  const baseApi = axios.create({
    baseURL: '/Qalib/AllJson.json'
  });


  const fetchDetails = async () => {
    try {
      const response = await baseApi.get('');
      console.log("البيانات المستجابة:", response.data.posts); // طباعة البيانات المستجابة
      // العثور على العنصر الذي يتطابق مع id
      const item = response.data.posts.find(post => post.id === parseInt(id));
      if (item) {
        setData(item); // تحديث الحالة بالعنصر المستخرج
      } else {
        console.log("لم يتم العثور على العنصر:", id);
      }
    } catch (error) {
      console.log("Exist", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  return (
    <div className="details">
    <div className="container">
      <div className="row">
        {data ? (
          <>
          <div className="col-lg-8 col-md-8 col-sm-12">
              <img src={data.img} alt={data.title} />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="title-qalib">
              <h2>{data.title}</h2>
            </div>
            <div className="text-det">
              <h2>وفر الوقت والجهد مع قوالب الويب.</h2>
            </div>
                  <i className="fa-regular fa-eye"></i>
                  <i className="fa-solid fa-file-arrow-down"></i>
          </div>
            <div>
              <h2>{data.title}</h2>
              <p>{data.content}</p>
            </div>
          </>
        ) : (
          <p>لم يتم العثور على البيانات</p>
        )}

      </div>
    </div>
  </div>
  
  );
};

export default Details;
