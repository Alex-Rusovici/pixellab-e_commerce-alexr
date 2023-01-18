import { Layout } from '@/layouts';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>PixelLab E-commerce App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>This is main</main>
      </Layout>
    </>
  );
}
