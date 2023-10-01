'use client'

import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import analytics from '../../app/analytics';

export default function ProductGridItems({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    products.forEach((product) => {
      analytics.track.sbqiby({
        search_text: searchParams.get('q') || '',
        product_name: product.title,
        list_size: `${products.length}`,
        sort_by_type: searchParams.get('sort') || 'relevance',
        collection_type: pathname.split('/').pop() || '',
      });
    });
  }, []);

  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link
            className="relative inline-block h-full w-full"
            href={`/product/${product.handle}`}
            onClick={() => {
              analytics.track.przfbb({
                search_text: searchParams.get('q') || '',
                sku: product.id,
                product_name: product.title,
                price: `${product.priceRange.minVariantPrice.amount} - ${product.priceRange.maxVariantPrice.amount}`
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
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
