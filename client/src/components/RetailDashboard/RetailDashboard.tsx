import ProductSideDetails from "../ProductSideDetails/ProductSideDetails";
import RetailDetailsList from "../RetailDetailsList/RetailDetailsList";
import RetailSales from "../RetailSales/RetailSales";
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { LOAD_PRODUCT_DETAILS } from "../../store/actions";
export interface IRootState {
    productInfo: [
        {
            tags:[],
            name:'',

        }
    ];
}
function RetailDashboard(): JSX.Element {
    const dispatch = useDispatch()
    const productData = useSelector((state:IRootState) => state.productInfo)
    console.log(productData)

    useEffect(()=> {
        dispatch({type: LOAD_PRODUCT_DETAILS})
    },[dispatch])
    return <div>
        <RetailSales/>
        <RetailDetailsList/>
        <ProductSideDetails/>
    </div>
}

export default RetailDashboard