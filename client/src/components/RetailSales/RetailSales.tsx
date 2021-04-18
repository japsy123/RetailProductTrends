import { format, Stack, Text } from "@fluentui/react";
import { Line, LineChart, XAxis, YAxis } from "recharts"
import { retailSalesStyles } from "./RetailSales.styles"
import {IProductState} from '../../store/reducers'
import { useSelector } from "react-redux";
import { parseISO } from "date-fns";

function RetailSales(): JSX.Element {
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

    const styles = retailSalesStyles()
    const retailSales = useSelector((state:IProductState) => state.productInfo[0].sales);
    console.log(retailSales)
    return retailSales.length ?
    <Stack styles={styles.salesContainer}>
        <Text styles={styles.header}>Retail Sales</Text>
         <LineChart
    width={1700}
    height={500}
    data={retailSales}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <XAxis
 tickCount={10} tickLine={false} dataKey="weekEnding"
 style={{
    fill: "#BCBCBC",
                    fontSize: "16px",
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    lineHeight: "18px"

}}
tickFormatter={str => {
        const date = parseISO(str)
        if(date.getDate() <=7) {
            console.log(date.getMonth())

            const month = date.getMonth()
            return monthNames[month]
        }
        return ''
    }}/>
   <Line
      type="monotone"
      strokeWidth={5}
      dataKey="retailerMargin"
      stroke="blue"
      dot={false}
    />
    <Line strokeWidth={5} type="monotone" dataKey="retailSales" stroke="grey" dot={false}/>
    </LineChart>
    </Stack> : <></>
}

export default RetailSales