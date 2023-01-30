import {CartControls} from '@/components/cart';
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

      <Layout>
        <main className="container px-4 mx-auto">
          <div>
            {/* Add components/ui/common/ContinueShopping.jsx */}
          </div>

          <header className="flex justify-between">
            <CartControls></CartControls>
          </header>
        </main>
      </Layout>
    </>
  );
};

export default CartPage;
