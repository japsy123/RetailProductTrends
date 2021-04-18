import { IStackTokens, Stack, Text } from '@fluentui/react'
import {useSelector} from 'react-redux'
import {productSideStyles} from './ProductSideDetails.styles'
import { productSideDetails } from '../selectors/Product.selectors'
import { useRef } from 'react';
import ProductTag from '../ProductTag/ProductTag'
import { IProductState } from '../../store/reducers';

function ProductSideDetails(): JSX.Element {
    const productData = useSelector(productSideDetails);
    const loading = useSelector((state:IProductState) => state.loading)
    const styles = productSideStyles();
    const panelToken = useRef({ childrenGap: 10 } as IStackTokens);
    console.log(productData)
    const renderComponent = (): JSX.Element => {
        if(loading) {
            return <div>Loading</div>
        } else return <Stack styles={styles.sidePanel} tokens={panelToken.current}>
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