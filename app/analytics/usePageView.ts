'use client'
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from './index';


export const usePageView = (): void => {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      pageview(pathname)
    }
  }, [pathname, searchParams])

}