import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../../actions/getSearchProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './subComponent/card'

export const SearchPage = () => {
    useEffect(() => {
        Dispatch(searchProduct('*'))
      }, [])
    const searchTerm = useRef(null);
    const Dispatch = useDispatch();
    const products = useSelector(store => store.searchedProductsReducer.products)
    const searchProducts = () => {
        Dispatch(searchProduct(searchTerm.current.value))
    }
    return ( 
        <div className="col-lg-12">
            <div className="search-feild">
            <input ref={searchTerm}></input>
          <button onClick={searchProducts}>Search</button>
            </div>
            <div className="row">
                {products && products.map((product) => (
                    <ProductCard product={product}/>
                ))
                }
            </div>
        </div>
     );
}
 
export default SearchPage;