import React, { useEffect, useState } from 'react';
import './Details.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AllJson from '../../../public/AllJson.json'


const Details = () => {
  const [data, setData] = useState(null); // تغيير الحالة لتكون كائنًا واحدًا بدلاً من مصفوفة
  const { id } = useParams(); // استخراج id من params
  const baseApi = axios.create({
    baseURL: '/Qalib/AllJson.json'
  });
 const tech = AllJson.posts[0].tech;
 console.log(tech)

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
          <div className="col-lg-8 col-md-12 col-sm-12">
              <img src={data.img} alt={data.title} />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="title-qalib">
              <h2>{data.title}</h2>
              <Link to={data.ByUrl} target="_blank" className="custom-link"><p><span>تصميم : </span>{data.By}</p></Link>
            </div>
            <div className="text-det">
              <h2>وفر الوقت والجهد مع قوالب الويب.</h2>
            <div className="text-point">
            <i class="fa-regular fa-circle-check"></i>
            <p>ابدأ مشروعك الرقمي الآن😍</p>
            </div>
            <div className="text-point">
            <i class="fa-regular fa-circle-check"></i>
            <p>حوّل رؤيتك إلى واقع 😍</p>
            </div>
            <div className="text-point">
            <i class="fa-regular fa-circle-check"></i>
            <p>اجعل موقعك يتألق 😍</p>
            </div>
            </div>
            <Link to={data.don} target="_blank" className="custom-link">
            <div className='text-icon'>
            <i className="fa-regular fa-eye"></i>
            <p>لمشاهدة القالب</p>
            </div>
            </Link>
            <Link to={data.don} target="_blank" className="custom-link">
            <div className="text-icon">
            <i className="fa-solid fa-file-arrow-down"></i>
            <p>لتحميل القالب</p>
            </div>
            </Link>
          </div>
           <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
            <div className='description'>
              <h3>تفاصيل القالب :</h3>
              <p>{data.description}</p>
              <h3 className='hdes'>التقنيات المستخدمة :</h3>
              {tech.map((item, index) => (
            <p key={index} className="tech">{item}</p>
          ))}
                  </div>
            </div>
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
