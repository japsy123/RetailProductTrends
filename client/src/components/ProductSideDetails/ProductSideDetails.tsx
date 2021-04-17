import {useDispatch, useSelector} from 'react-redux'
import { createSelector } from 'reselect'
import { productSideDetails } from '../selectors/Product.selectors'
interface rootState {
    productInfo: [
        {details:[]}
    ];
}

function ProductSideDetails(): JSX.Element {
    const productData = useSelector(productSideDetails)
    console.log(productData)
    return <div>ProductSideDetails</div>
}

export default ProductSideDetails