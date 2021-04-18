import { Stack, Text } from "@fluentui/react";
import { Line, LineChart, XAxis } from "recharts";
import { retailSalesStyles } from "./RetailSales.styles";
import { IProductState } from "../../store/reducers";
import { useSelector } from "react-redux";
import { parseISO } from "date-fns";

function RetailSales(): JSX.Element {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const styles = retailSalesStyles();
  const retailSales = useSelector(
    (state: IProductState) => state.productInfo[0].sales
  );

  const renderRetailGraph = () => {
      return  <LineChart
      width={1600}
      height={500}
      data={retailSales}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}>
      <XAxis
        tickCount={10}
        tickLine={false}
        dataKey='weekEnding'
        style={{
          fill: "#BCBCBC",
          fontSize: "16px",
          fontFamily: "Segoe UI",
          fontWeight: 400,
          lineHeight: "18px",
          stroke: "#BCBCBC",
          strokeWidth: 0.5,
        }}
        tickFormatter={(str) => {
          const date = parseISO(str);
          // check if the date is for the first week
          if (date.getDate() <= 7) {
            const month = date.getMonth();
            return monthNames[month];
          }
          return "";
        }}
      />
      <Line
        type='monotone'
        strokeWidth={5}
        dataKey='retailerMargin'
        stroke='#0078d4'
        dot={false}
      />
      <Line
        strokeWidth={5}
        type='monotone'
        dataKey='retailSales'
        stroke='#69797e'
        dot={false}
      />
    </LineChart>
  }

  return retailSales.length ? (
    <Stack styles={styles.salesContainer}>
      <Text styles={styles.header}>Retail Sales</Text>
      {renderRetailGraph()}
    </Stack>
  ) : (
    <></>
  );
}

export default RetailSales;
