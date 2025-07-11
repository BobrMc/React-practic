import React from 'react';


const UserCard = ({name,age,city}) => {
   return (
      <div className='nameStyle'>
       <h2>👤 {name}</h2>
         <p>📍 {city}</p>
         <p>🎂 Возраст: {age} лет</p>
      </div>
   );
}

export default UserCard