import axios from 'axios';

export function productDetails(productId){
    const productDetailsApi = `http://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/products/${productId}?includeErelatedProducts=true`;
    const headers = {
        'Bepsy-SiteId': 'siteUS',
        'Bepsy-CatalogId': 'bepsy_catalog_1',
        'Bepsy-PricelistId': 'defaultPriceGroup'
      };
      return axios.get(productDetailsApi,null, { headers })
}