'use client';

import { GridTileImage } from 'components/grid/tile';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';
import analytics from '../../app/gtag';

const ThreeItemGridItem = ({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) => {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link className="relative block aspect-square h-full w-full"
        href={`/product/${item.handle}`}
        onClick={() => {
          analytics.events.icicqg({
            sku: item.id,
            product_name: item.title,
            price: `${item.priceRange.minVariantPrice} - ${item.priceRange.maxVariantPrice}`
          })
        }}
      >
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export default ThreeItemGridItem;