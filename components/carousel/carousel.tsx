import { getCollectionProducts } from 'lib/shopify';
import CarouselView from './carousel.view';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({
    collection: 'hydrogen',
  });

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <CarouselView products={carouselProducts} />
  );
}
