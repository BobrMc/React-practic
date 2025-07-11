import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate } from 'react-router-dom'
const Pidor = (props) => {
    const router = useNavigate ()

    return (
    <div className = "post">
        <div className = ".post___content">
            <strong>{props.post.id}. </strong>
       <strong>{props.post.title}</strong>
          <div>
              {props.post.body}
          </div>
   </div>
          <div className = ".post___btns">
              <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
                  Открыть
              </MyButton>
             <MyButton onClick={() => props.remove(props.post)}>
                Удалить
             </MyButton>
          </div>
    </div>
   );
}

export default Pidor