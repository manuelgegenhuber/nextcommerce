export const GA_TRACKING_ID = "G-VL811QC7WC" //replace it with your measurement id

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events

export default {
  pageview,
  events: {
    fuqwqs: (params: { sku: string, product_name: string, price: string, quantity: number, variation_type: string }) => {
      window.gtag("event", 'remove_product', { ...params });
    },
    icicqg: (params: { sku: string, product_name: string, price: string }) => {
      window.gtag("event", 'new_products', { ...params });
    },
    fhuhpd: (params: { sku: string, product_name: string, price: string }) => {
      window.gtag("event", 'best_sellers', { ...params });
    },
    pdsebd: () => {
      window.gtag("event", 'open_cart');
    },
    staraz: (params: { collection_type: string }) => {
      window.gtag("event", 'collection', { ...params });
    },
    ijzndb: (params: { sort_by_type: string }) => {
      window.gtag("event", 'sort_by', { ...params });
    },
    przfbb: (params: { search_text: string, sku: string, product_name: string, price: string }) => {
      window.gtag("event", 'product_card', { ...params });
    },
    davvny: () => {
      window.gtag("event", 'search_bar');
    },
    berupq: (params: { sku: string, product_name: string, price: string, variation_type: string }) => {
      window.gtag("event", 'add_to_cart', { ...params });
    },
    mkspxa: (params: { sku: string, product_name: string, price: string }) => {
      window.gtag("event", 'related_products', { ...params });
    },
    xjgsbj: () => {
      window.gtag("event", 'close_cart');
    },
    ixtwas: (params: { sku: string, product_name: string, price: string, variation_type: string }) => {
      window.gtag("event", 'add_quantity', { ...params });
    },
    ijjuls: (params: { sku: string, product_name: string, price: string, variation_type: string }) => {
      window.gtag("event", 'remove_quantity', { ...params });
    },
    bczmbw: (params: { list_size: number, price: string, taxes: string }) => {
      window.gtag("event", 'proceed_to_checkout', { ...params });
    }
  }
}