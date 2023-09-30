'use client'
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import analytics from '../app/gtag';


export const PageView = () => {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      analytics.pageview(pathname)
    }
  }, [pathname, searchParams])

  return null;

}