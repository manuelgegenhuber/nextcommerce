'use client'

import { GridTileImage } from 'components/grid/tile';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';
import analytics from '../../app/gtag';

interface IProps {
  products: Product[];
}

const CarouselView = ({ products }: IProps) => (
  <div className=" w-full overflow-x-auto pb-6 pt-1">
    <ul className="flex animate-carousel gap-4">
      {products.map((product, i) => (
        <li
          key={`${product.handle}${i}`}
          className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
        >
          <Link
            href={`/product/${product.handle}`}
            className="relative h-full w-full"
            onClick={() => {
              analytics.events.fhuhpd({
                sku: product.id,
                product_name: product.title,
                price: `${product.priceRange.minVariantPrice} - ${product.priceRange.maxVariantPrice}`
              });
            }}
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode
              }}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default CarouselView;