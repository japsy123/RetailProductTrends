import ProductSideDetails from "../ProductSideDetails/ProductSideDetails";
import RetailSales from "../RetailSales/RetailSales";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_PRODUCT_DETAILS } from "../../store/actions";
import { Stack } from "@fluentui/react";
import { dashboardStyles } from "./RetailDashboard.styles";
import stackline from "../../stackline.svg";
import { IProductState } from "../../store/reducers";
export interface IRootState {
  productInfo: [
    {
      tags: [];
      name: "";
    }
  ];
}

function RetailDashboard(): JSX.Element {
  const dispatch = useDispatch();
  const styles = dashboardStyles();
  const isLoading = useSelector((state: IProductState) => state.loading);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCT_DETAILS });
  }, [dispatch]);

  const renderDashboard = () => {
    return isLoading ? (
      <Stack styles={styles.loading}>Loading...</Stack>
    ) : (
      <Stack styles={styles.dashboardContainer}>
        <Stack styles={styles.navbar} horizontal>
          <img style={{ height: "20px" }} src={stackline} alt='StacklineLogo' />
        </Stack>
        <Stack horizontal>
          <ProductSideDetails />
          <RetailSales />
        </Stack>
      </Stack>
    );
  };

  return renderDashboard();
}

export default RetailDashboard;
