import React, { Fragment } from 'react'

const Sushi = (props) => {
 
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={ () => props.onClick(props.sushiObj)}
           >
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eatenStatus.includes(props.sushiObj) ?
            null
          :
            <img src={props.sushiObj.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiObj.name} - ${props.sushiObj.price}
      </h4>
    </div>
  )
}

export default Sushi