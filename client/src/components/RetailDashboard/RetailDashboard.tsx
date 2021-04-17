import ProductSideDetails from "../ProductSideDetails/ProductSideDetails";
import RetailDetailsList from "../RetailDetailsList/RetailDetailsList";
import RetailSales from "../RetailSales/RetailSales";

function RetailDashboard() {


    return <div>
        <RetailSales/>
        <RetailDetailsList/>
        <ProductSideDetails/>
    </div>
}

export default RetailDashboard