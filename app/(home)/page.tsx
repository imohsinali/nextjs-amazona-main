// import { HomeCard } from '@/components/shared/home/home-card';
import { HomeCarousel } from '@/components/shared/home/home-carousel';
// import ProductSlider from '@/components/shared/product/product-slider';
// import { getProductsByTag } from '@/lib/actions/product.actions';
import data from '@/lib/data';
// import { Loader } from 'lucide-react';
// import { Loader } from 'lucide-react';
import dynamic from 'next/dynamic';
const HomeCard = dynamic(
  () => import('../../components/shared/home/home-card'),
  {
    // loading: () => <Loader />,
    ssr: true,
  }
);
// const BrowsingHistoryList = dynamic(
//   () => import('../../components/shared/browsing-history-list'),
//   {
//     loading: () => <Loader className='flex justify-center items-center' />,
//   }
// );

export default async function Page() {
  // const todaysDeals = await getProductsByTag({ tag: 'todays-deal' });
  // const bestSellingProducts = await getProductsByTag({ tag: 'best-seller' });

  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className='md:p-4 md:space-y-4 bg-border'>
        <HomeCard />

        {/* <Card className='w-full rounded-none'>
          <CardContent className='p-4 items-center gap-3'>
            <ProductSlider title={"Today's Deals"} products={todaysDeals} />
          </CardContent>
        </Card> */}

        {/* <Card className='w-full rounded-none'>
          <CardContent className='p-4 items-center gap-3'>
            <ProductSlider
              title='Best Selling Products'
              products={bestSellingProducts}
              hideDetails
            />
          </CardContent>
        </Card> */}
      </div>
      <div className='p-4 bg-background'>{/* <BrowsingHistoryList /> */}</div>
    </>
  );
}
