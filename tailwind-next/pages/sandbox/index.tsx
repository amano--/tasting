/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'

const Index = (props) => (
  <>
    <hr />
    React
    <hr />
    <Link href="sandbox/concurrent">
      <a>React concurrent</a>
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
