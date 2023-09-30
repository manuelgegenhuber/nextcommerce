export const GA_TRACKING_ID = "G-VL811QC7WC" //replace it with your measurement event_id

// https://developers.google.com/analytics/devguevent_ides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguevent_ides/collection/gtagjs/events

export default {
  pageview,
  events: {
    fuqwqs: (params: { sku: string, product_name: string, price: string, quantity: string, variation_type: string }) => {
      window.gtag("event", 'click', {
        event_id: 'fuqwqs',
        element: 'remove_product',
        ...params
      });
    },
    icicqg: (params: { sku: string, product_name: string, price: string }) => {
      window.gtag("event", 'click', {
        event_id: 'icicqg',
        element: 'new_products',
        ...params
      });
    },
    fhuhpd: (params: { sku: string, product_name: string, price: string }) => {
      window.gtag("event", 'click', {
        event_id: 'fhuhpd',
        element: 'best_sellers',
        ...params
      });
    },
    pdsebd: () => {
      window.gtag("event", 'click', {
        event_id: 'pdsebd',
        element: 'open_cart',
      });
    },
    staraz: (params: { collection_type: string }) => {
      window.gtag("event", 'collection', {
        event_id: 'staraz',
        element: 'collection',
        ...params
      });
    },
    ijzndb: (params: { sort_by_type: string }) => {
      window.gtag("event", 'sort_by', {
        event_id: 'ijzndb',
        element: 'sort_by',
        ...params
      });
    },
    przfbb: (params: { search_text: string, sku: string, product_name: string, price: string }) => {
      window.gtag("event", 'click', {
        event_id: 'przfbb',
        element: 'product_card',
        ...params
      });
    },
    davvny: () => {
      window.gtag("event", 'click', {
        event_id: 'davvny',
        element: 'search_bar',
      });
    },
    berupq: (params: { sku: string, product_name: string, price: string, variation_type: string }) => {
      window.gtag("event", 'add_to_cart', { ...params });
    },
    mkspxa: (params: { sku: string, product_name: string, price: string }) => {
      window.gtag("event", 'click', {
        event_id: 'mkspxa',
        element: 'related_products',
        ...params
      });
    },
    xjgsbj: () => {
      window.gtag("event", 'click', {
        event_id: 'xjgsbj',
        element: 'close_cart',
      });
    },
    ixtwas: (params: { sku: string, product_name: string, price: string, variation_type: string }) => {
      window.gtag("event", 'click', {
        event_id: 'ixtwas',
        element: 'add_quantity',
        ...params
      });
    },
    ijjuls: (params: { sku: string, product_name: string, price: string, variation_type: string }) => {
      window.gtag("event", 'click', {
        event_id: 'ijjuls',
        element: 'remove_quantity',
        ...params
      });
    },
    bczmbw: (params: { list_size: string, price: string, taxes: string }) => {
      window.gtag("event", 'click', {
        event_id: 'bczmbw',
        element: 'proceed_to_checkout',
        ...params
      });
    },
    ovhife: (params: { sku: string, product_name: string }) => {
      window.gtag("event", 'block_view', {
        event_id: 'ovhife',
        element: 'new_products',
        ...params
      });
    },
    amqybp: (params: { sku: string, product_name: string, list_size: string }) => {
      window.gtag("event", 'block_view', {
        event_id: 'amqybp',
        element: 'related_products',
        ...params
      });
    },
    gjsruk: (params: { sku: string, product_name: string, list_size: string }) => {
      window.gtag("event", 'block_view', {
        event_id: 'gjsruk',
        element: 'best_sellers',
        ...params
      });
    },
    sbqiby: (params: { search_text: string, list_size: string, sort_by_type: string, collection_type: string, product_name: string, }) => {
      window.gtag("event", 'block_view', {
        event_id: 'sbqiby',
        element: 'product_card',
        ...params
      });
    },
  }
}