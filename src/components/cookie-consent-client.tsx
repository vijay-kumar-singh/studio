"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const CookieConsent = dynamic(() => import('@/components/cookie-consent'), {
  ssr: false,
});

export default function CookieConsentClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CookieConsent />
    </Suspense>
  );
}