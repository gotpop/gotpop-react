import Grid from "@components/ui/Grid";
import Product from "@components/ui/Product";
import { shopItems } from "../data/shop";

type Item = {
  name: string;
  id: number;
  url: string;
  price: number;
};

export function Shop() {
  return (
    <>
      <h2>Shop</h2>
      <p>Buy your developer accessories here.</p>
      <Grid>
        <>
          {shopItems.map((product: Item, key) => (
            <Product key={key} product={product} />
          ))}
        </>
      </Grid>
    </>
  );
}
