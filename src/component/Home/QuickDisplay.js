import React from 'react';
import {Link} from 'react-router-dom'


const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if (mealData){
            return mealData.map((item)=> {
                return(
                <Link to={`listing/${item.mealtype_id}`} key={item.mealtype_id}>
                <div className="tilecontainer">
                <div className="image-container"><img src={item.meal_image} /></div>
                <div className="text-container">
                 {item.mealtype}
                </div>
            </div>
            </Link>
                )
            })
        }

    }

    return (
        <>
            {listMeal(props)}
        
        </>
    )

}

export default QuickDisplay