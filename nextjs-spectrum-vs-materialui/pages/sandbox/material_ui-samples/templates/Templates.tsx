import Link from 'next/link'
import React, { FC } from 'react'

function Templates(props) {
  return (
    <>
      <hr />
      <Link href="album/Album">
        <a>Album</a>
      </Link>
      {/* <hr />
      <Link href="blog/Blog">
        <a>Blog</a>
      </Link> */}
      <hr />
      <Link href="checkout/Checkout">
        <a>Checkout</a>
      </Link>
      <hr />
      <Link href="dashboard/Dashboard">
        <a>dashboard</a>
      </Link>
      <hr />
      <Link href="pricing/Pricing">
        <a>Pricing</a>
      </Link>
      <hr />
      <Link href="sign-in/SignIn">
        <a>SignIn</a>
      </Link>
      <hr />
      <Link href="sticky-footer/StickyFooter">
        <a>StickyFooter</a>
      </Link>
      <hr />
    </>
  )
}
export default Templates
