import {Layout} from '@/layouts';
import Head from 'next/head';

const CartPage = () => {
  return (
    <>
      <Head>
        <title>Cart - PixelLab E-commerce App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>Welcome</Layout>
    </>
  );
};

export default CartPage;
