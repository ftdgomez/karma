import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ChangeRouteTransition } from "./ChangeRouteTransittion";

export function RouteChangeHandler({ children }: { children: any }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    };
    const handleRouteEnd = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteEnd);
    };
  }, [router.events]);

  return (
    <>
      <ChangeRouteTransition loading={loading} />
      {children}
    </>
  );
}
