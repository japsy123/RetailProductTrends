import { Stack, Text } from '@fluentui/react'
import {useSelector} from 'react-redux'
import {productSideStyles} from './ProductSideDetails.styles'
import { productSideDetails } from '../selectors/Product.selectors'

function ProductSideDetails(): JSX.Element {
    const productData = useSelector(productSideDetails);
    const styles = productSideStyles();

    console.log(productData)
    return <Stack styles={styles.sidePanel}>
            <img src={productData.image} style={{height: '80px'}} alt='Stackline'></img>
            <h4>{productData.title}</h4>
            <h6>{productData.subtitle}</h6>
            {productData.tags.length && productData.tags.map((tag,id) =>
                <Text key={id}>{tag}</Text>)}
    </Stack>
}

export default ProductSideDetails