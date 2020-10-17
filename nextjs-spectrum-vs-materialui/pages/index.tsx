import Greeting from 'src/components/Greeting'
import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      <div className="py-20">
        <Greeting target={'Next.js Starter Kit'} />
      </div>
      <div className="py-20">
        <Link href="sandbox">
          <a>sandbox</a>
        </Link>
      </div>
    </div>
  )
}
