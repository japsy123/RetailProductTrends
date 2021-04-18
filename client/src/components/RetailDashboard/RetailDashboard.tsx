import ProductSideDetails from "../ProductSideDetails/ProductSideDetails";
import RetailSales from "../RetailSales/RetailSales";
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { LOAD_PRODUCT_DETAILS } from "../../store/actions";
import { Stack } from "@fluentui/react";
import { dashboardStyles } from "./RetailDashboard.styles";
import stackline from '../../stackline.svg'
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
    const styles = dashboardStyles();

    useEffect(()=> {
        dispatch({type: LOAD_PRODUCT_DETAILS})
    },[dispatch])

    return <Stack styles={styles.dashboardContainer}>
        <Stack styles={styles.navbar} horizontal>
            <img style={{height: '20px'}}
                src={stackline} alt="StacklineLogo" />
        </Stack>
        <Stack horizontal>
           <ProductSideDetails/>
           <Stack>
               <RetailSales/>
            </Stack>
        </Stack>
    </Stack>
}

export default RetailDashboard