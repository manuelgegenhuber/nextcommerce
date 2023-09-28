'use client'
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from '../app/gtag';


export const PageView = () => {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      console.log(pathname);
      pageview(pathname)
    }
  }, [pathname, searchParams])

  return null;

}