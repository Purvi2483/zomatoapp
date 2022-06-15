import React from 'react';
import {Link} from 'react-router-dom';

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if (listData){
            if(listData.length>0){
                return listData.map((item) => {
                    return(
                        <div className="restraunt" key={item.restaurant_id}>
                      <Link to={`/Details?restId=${item.restaurant_id}`}>
                    <div className="image-Container"><img src={item.restaurant_thumb} ></img>
                    </div>
                   
                       
                    <div
                    className="restinfo-container">
                        <center>
                        <h2>{item.restaurant_name}</h2>
                        <p>{item.address}</p>
                           
                        <p className="glyphicon glyphicon-star"></p>{item.average_rating}&nbsp;&nbsp;&nbsp;
                        <p>Cost for two Rs.{item.cost}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <p>{item.cuisines.cuisine_name1}</p>
                        </center> 
                       
                    </div>                
                   </Link>
                    </div>
                    )
                })
            }else{
                return(
                    <>
                    <h2>No Data For Filter</h2>
                    </>
                )
            }
            
        }else {
            return(
            
                   <h1>Loading.....</h1>
            )
        }
    }

    return(
        <div id="Content">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay