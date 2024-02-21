import React from 'react'

function Cartbilling() {
  return (
    <div className='cart-price'>
      <h2>Price Details</h2>
      <div>
            <div className='each-price'>
                <div>
                <label htmlFor="Price for Items">Price for Items</label>
                </div>
                <div>
                    <input type="text" />
                </div>
               
            </div>
            <div className='each-Discount'>
            <div>
                <label htmlFor="Price for Items">Discount</label>
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div className='each-delivery'>
            <div>
                <label htmlFor="Price for Items">Delivery Charges</label>
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div className='each-totalamt'>
            <div>
                <label htmlFor="Price for Items">Total Amount</label>
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div className='each-cartbtn' ><button className='cart-cartbutton'>Place Order</button></div>
      </div>
    </div>
  )
}

export default Cartbilling
