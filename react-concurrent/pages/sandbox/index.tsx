/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

const Index = (props) => (
  <>
    <hr />
    React concurrent
    <hr />
    <Link href="sandbox/concurrent/01_suspense">
      <a>01_suspense</a>
    </Link>
    <br />
    <br />
    <Link href="sandbox/concurrent/02_useTransition">
      <a>02_useTransition </a>
    </Link>
    {/* 
    <hr />
    <hr />
    <Link href="sandbox/concurrent">
      <a></a>
    </Link>
    
    <hr />
    <hr />
    <Link href="sandbox/concurrent">
      <a></a>
    </Link> 
    */}
  </>
)

export default Index
