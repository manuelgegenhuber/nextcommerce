'use client'

import { GridTileImage } from "components/grid/tile";
import { Product } from "lib/shopify/types";
import Link from "next/link";
import { useEffect } from "react";
import analytics from '../../analytics';

interface IProps {
  relatedProducts: Product[]
}

const RelatedProductsView = ({ relatedProducts }: IProps) => {


  useEffect(() => {
    relatedProducts.forEach((product) => {
      analytics.track.amqybp({
        sku: product.id,
        product_name: product.title,
        list_size: `${relatedProducts.length}`
      });
    });
  }, []);

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link
              className="relative h-full w-full"
              href={`/product/${product.handle}`}
              onClick={(() => {
                analytics.track.mkspxa({
                  sku: product.id,
                  product_name: product.title,
                  price: `${product.priceRange.minVariantPrice.amount} - ${product.priceRange.maxVariantPrice.amount}`
                });
              })}
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
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default RelatedProductsView;