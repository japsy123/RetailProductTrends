import { IStackTokens, Stack, Text } from '@fluentui/react'
import {useSelector} from 'react-redux'
import {productSideStyles} from './ProductSideDetails.styles'
import { productSideDetails } from '../selectors/Product.selectors'
import { useRef } from 'react';
import ProductTag from '../ProductTag/ProductTag'

function ProductSideDetails(): JSX.Element {
    const productData = useSelector(productSideDetails);
    const styles = productSideStyles();
    const panelToken = useRef({ childrenGap: 10 } as IStackTokens);

    const renderComponent = (): JSX.Element => {
        return <Stack styles={styles.sidePanel} tokens={panelToken.current}>
        <img src={productData.image} style={{height: '120px'}} alt='SharkNinja'></img>
        <Stack styles={styles.info}>
            <Text>{productData.title}</Text>
            <Stack styles={styles.subInfo}>{productData.subtitle}</Stack>
        </Stack>
        <Stack horizontal styles={styles.tagsContainer}>
        {productData.tags.length > 0 && productData.tags.map((tag,id) =>
            <ProductTag tag={tag} id={id} />)}
        </Stack>
    </Stack>
    }

    return renderComponent()
}

export default ProductSideDetails