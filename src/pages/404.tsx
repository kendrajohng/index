import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Custom404() {
  return (
    <>
      <Head>
        <link rel="icon" href="/Untitled_1400_x_1400_px_.jpg" type="image/jpeg" />
      </Head>
      
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">404</h1>
          <p className="text-lg text-gray-600">Sorry, we couldn't find the page you requested. This page may have been moved, deleted, or never existed.</p>
          <Button asChild>
            <Link href="/">
              Return to home page
            </Link>
          </Button>
        </div>
      </main>
    </>
  )
}
