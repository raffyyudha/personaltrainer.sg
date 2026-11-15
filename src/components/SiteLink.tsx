"use client";

import { forwardRef, type ComponentProps } from "react";
import NextLink from "next/link";

type SiteLinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & { href: string };

// The Pages export uses document navigation, so it does not need a second
// React Server Component payload file for every one of the 19,866 SEO pages.
const SiteLink = forwardRef<HTMLAnchorElement, SiteLinkProps>(function SiteLink(props, ref) {
  if (process.env.NEXT_PUBLIC_STATIC_EXPORT !== "1") {
    return <NextLink {...props} ref={ref} />;
  }

  const {
    prefetch, replace, scroll, shallow, locale, legacyBehavior, passHref,
    onNavigate, ...anchorProps
  } = props;
  return <a {...anchorProps} ref={ref} />;
});

export default SiteLink;
