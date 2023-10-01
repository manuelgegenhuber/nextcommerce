import * as IAnalytics from './interfaces';
export const { GA_TRACKING_ID } = process.env;

// https://developers.google.com/analytics/devguevent_ides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID || '', {
    page_path: url,
  })
}

function fun<T = undefined>(eventId: string, eventName: string, element: string): (...params: T extends undefined ? [] : [T]) => void {
  return (...params: (T extends undefined ? [] : [T])) => {
    window.gtag("event", eventName, {
      eventId,
      element,
      ...(params && params)
    });
  };
}

export default {
  pageview,
  track: {
    staraz: fun<IAnalytics.staraz>("staraz", "click", "collection"),
    ijzndb: fun<IAnalytics.ijzndb>("ijzndb", "click", "sort_by"),
    sbqiby: fun<IAnalytics.sbqiby>("sbqiby", "block_view", "product_card"),
    przfbb: fun<IAnalytics.przfbb>("przfbb", "click", "product_card"),
    davvny: fun("davvny", "click", "search_bar"),
    berupq: fun<IAnalytics.berupq>("berupq", "click", "add_to_cart"),
    amqybp: fun<IAnalytics.amqybp>("amqybp", "block_view", "related_products"),
    mkspxa: fun<IAnalytics.mkspxa>("mkspxa", "click", "related_products"),
    ovhife: fun<IAnalytics.ovhife>("ovhife", "block_view", "new_products"),
    icicqg: fun<IAnalytics.icicqg>("icicqg", "click", "new_products"),
    gjsruk: fun<IAnalytics.gjsruk>("gjsruk", "block_view", "best_sellers"),
    fhuhpd: fun<IAnalytics.fhuhpd>("fhuhpd", "click", "best_sellers"),
    pdsebd: fun("pdsebd", "click", "open_cart"),
    xjgsbj: fun("xjgsbj", "click", "close_cart"),
    fuqwqs: fun<IAnalytics.fuqwqs>("fuqwqs", "click", "remove_product"),
    ixtwas: fun<IAnalytics.ixtwas>("ixtwas", "click", "add_quantity"),
    ijjuls: fun<IAnalytics.ijjuls>("ijjuls", "click", "remove_quantity"),
    bczmbw: fun<IAnalytics.bczmbw>("bczmbw", "click", "proceed_to_checkout"),
  }
}
