import React, { useState } from 'react';


const LikeCounter = () => {
let [like,setLike] = useState(0)
   return (
      <div>
         <button onClick={()=> {setLike(++like)}}>❤️ Нравится</button>
         <button onClick={()=> {setLike(--like)}}>❤️ Нe Нравится</button>
         <h1>Количество лайков:{like}</h1>
      </div>
   );
}
export default LikeCounter