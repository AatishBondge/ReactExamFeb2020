import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../actions/productDetails';
const ProductDetailsPage = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const productId = props.match.params.id;
        dispatch(getProductDetails(productId))
      }, [])
      const productDetail = useSelector(store => store.productDetailsReducer.productsDetails)
      const token = localStorage.getItem('access_token');
      if(!token){
          window.location.href="/"
      }
    return ( 
        <div className="container mt-5">
            <div className="row">
                <img className="col-lg-5" src={productDetail.productList && productDetail.productList[0].compositeProducts[0].EProductMedia.fullURI}></img>
            <div className="col-lg-7">
                <h1>{productDetail.productList && productDetail.productList[0].sfdcName}</h1>
                <h2>{productDetail.productList && productDetail.productList[0].compositeProducts[0].priceEntry.listPrice}</h2>
                <h3>{productDetail.productList && productDetail.productList[0].shortDesc}</h3>
                <p>{productDetail.productList && productDetail.productList[0].longDesc}</p>
            </div>
            </div>
        </div>
     );
}
 
export default ProductDetailsPage;