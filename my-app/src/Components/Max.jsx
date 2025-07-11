import React, { useEffect, useState } from 'react';


const Max = () => {
   let [maxNumber, setMaxNumber] = useState(0)
   let count = [123,321,432,312,54,12,342,123,234,123,32433,453,532]
   maxNumber = count.reduce((acc,number) =>  acc + number,0)
   
   useEffect(() => {
      
   }, []);
   return(
      <div className= 'number'>
         {count}
         <div>
         {maxNumber}
         </div>
      </div>
    
   )
}

export default Max

