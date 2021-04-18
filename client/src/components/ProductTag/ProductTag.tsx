import { Stack } from "@fluentui/react";
import {productTagStyles} from './ProductTag.styles'

interface IProductTag {
    tag: string,
    id: number
}

function ProductTag(props: IProductTag) {
    const styles = productTagStyles();
    const {tag, id} = props

    return <Stack styles={styles.tag} key={id}>{tag}</Stack>
}

export default ProductTag