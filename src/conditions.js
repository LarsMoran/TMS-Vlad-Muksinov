import React from 'react';
const Conditions = (props) => {
   return (
       <div>
           {Object.keys(props.responseObj).includes('location') ?
               <div>
                   <p><strong>{props.responseObj.location.name}</strong></p>
                   <p>It is currently {Math.round(props.responseObj.current.temperature)}℃ degrees out with {props.responseObj.current.weather_descriptions[0]}.</p>
               </div>
           : null
           }
       </div>
   )
}
export default Conditions;