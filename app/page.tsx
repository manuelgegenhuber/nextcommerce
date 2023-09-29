import { Carousel } from 'components/carousel/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export default async function HomePage() {

  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
