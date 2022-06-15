import React,{Component} from 'react';

class MenuDisplay extends Component {
    orderId = []

    addItem=(id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
    }
    removeItem=(id)=>{
        if(this.orderId.indexOf(id)>-1){
            this.orderId.splice(this.orderId.indexOf(id),1)
        }
         this.props.finalOrder(this.orderId)
    }

    renderCart = (orders)=> {
        if(orders){
            return orders.map((item,index) => {
                return (
                    <b key={index}>{item} &nbsp; &nbsp;</b>
                )
            })
        }
    }

    renderMenu = ({menuData}) => {
        if (menuData){
            return menuData.map((item)=>{
                return(
                    <div key={item.menu_id}>
                        <div className="col-md-7">
                            <div className='col-md-3'>
                        <img src={item.menu_image} alt={item.menu_name} /></div>
                        <div className='col-md-9'>
                            <b>{item.menu_name}</b>
                           <p><span  className="glyphicon glyphicon-star"></span>
                           <span  className="glyphicon glyphicon-star"></span>
                           <span  className="glyphicon glyphicon-star"></span>
                           <span  className="glyphicon glyphicon-star"></span></p>
                           <span>Rs.{item.menu_price}</span>&nbsp;&nbsp;
                           <span>{item.menu_type}</span>
                           </div>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success" onClick={() => {this.addItem(item.menu_id)}}>
                                ADD
                            </button>
                            &nbsp;&nbsp;
                            <button className="btn btn-danger" onClick={() => {this.removeItem(item.menu_id)}}>
                               Remove
                            </button>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <>
              <div className="col-md-12">
                  <h1>Item Added</h1>
                  Item Number {this.renderCart(this.orderId)} Added &nbsp;&nbsp;
                 
              </div>
              <hr/>
              <div className="col-md-12 ">
                {this.renderMenu(this.props)}
              </div>  
          </>
        )
    }
}

export default MenuDisplay