import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const [data, setData] = useState(null); // تغيير الحالة لتكون كائنًا واحدًا بدلاً من مصفوفة
  const { id } = useParams(); // استخراج id من params
  const baseApi = axios.create({
    baseURL: '/Qalib/src/Components/Details/AllJson.json'
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
    <div>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
        </div>
      ) : (
        <p>لم يتم العثور على البيانات</p>
      )}
    </div>
  );
};

export default Details;
