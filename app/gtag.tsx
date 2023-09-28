export const GA_TRACKING_ID = "G-VL811QC7WC" //replace it with your measurement id

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
interface IEventProps {
  action: any;
  category: string | undefined;
  label: string | undefined;
  value: number | undefined;
}

export const event = ({ action, category, label, value }: IEventProps) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}