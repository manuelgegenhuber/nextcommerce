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
      window.gtag("event", 'remove_product', {
        ...params
      })
    }
  }
}