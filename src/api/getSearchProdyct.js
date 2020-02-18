import axios from 'axios';

const searchApi = 'http://dev-bepsy-api.objectedge.com/oe_commerce_api/solr/v1/search'

export function getSearchProduct(term){
    const data = {
        "term": term,
        "sortBy": "new asc",
        "page": 0,
        "recordsPerPage": 20,
        "heirarchical": [],
        "multiselect": [],
        "singleselect": [],
        "range": []
    }
    const headers = {
        'Bepsy-SiteId': 'siteUS',
        'Bepsy-CatalogId': 'cloudCatalog',
        'Bepsy-PricelistId': 'defaultPriceGroup',
        'Content-Type': 'application/json'
    }
    return axios.post(searchApi, data, { headers });
}