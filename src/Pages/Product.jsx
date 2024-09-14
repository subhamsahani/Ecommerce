import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breakcrumb/Breadcrumb';
import Productdisplay from '../Components/Productdisplay/Productdisplay'
import DescriptionBox from '../Components/DesciptionBox/DescriptionBox';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      {/* <Breadcrumb product={product}/> */}
      <Productdisplay product={product}/>
      <DescriptionBox/>
    </div>
  )
}

export default Product