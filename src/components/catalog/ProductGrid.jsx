import {useProducts} from "@/hooks/useProducts";
import {UiContext} from "@/pages/_app";
import {css} from "@emotion/css";
import {useContext} from "react";
import {ProductTile} from "./ProductTile";

export const ProductGrid = () => {
  const { products, loading } = useProducts();
  const {itemsPerRow: perRow} = useContext(UiContext)

  // useMemo
  const itemsPerRow = parseInt(perRow);

  // evaluate loading
  if (loading === true) {
    return <>...loading</>

  }

  if (products.length < 1) {
    return <>There are no products</>
  }

  const gridCss = css`
  display: grid;
  row-gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(${itemsPerRow}, 1fr);
    column-gap: 32px;
  }
  `;

  return <ul className={gridCss}>
    {products.map((product) => {
      return <li key={product.id}>
        <ProductTile product={product}></ProductTile>
      </li>
    })}
  </ul>
}
