import React from 'react'
import './Products.css'
import product_1 from '../../assets/product-hairstyle.jpg'
import product_2 from '../../assets/product-manicure.jpg'
import product_3 from '../../assets/product-facial.jpg'
import producticon_1 from '../../assets/producticon_1.png'
import producticon_2 from '../../assets/producticon_2.png'
import producticon_3 from '../../assets/producticon_3.png'

function Products() {
    return (
        <div className='products'>
            <div className="product">
                <img src={product_1} alt="" />
                <div className="caption">
                    <img src={producticon_1} alt="" />
                    <p>Haircut and Styling</p>
                </div>
            </div>
            <div className="product">
                <img src={product_2} alt="" />
                <div className="caption">
                    <img src={producticon_2} alt="" />
                    <p>Manicure and Pedicure</p>
                </div>
            </div>
            <div className="product">
                <img src={product_3} alt="" />
                <div className="caption">
                    <img src={producticon_3} alt="" />
                    <p>Facial Treatments</p>
                </div>
            </div>
        </div>
    )
}

export default Products