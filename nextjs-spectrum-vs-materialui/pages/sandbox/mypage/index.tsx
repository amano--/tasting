import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      <div className="py-20">
        <Link href="/sandbox/mypage/Main">
          <a>Main</a>
        </Link>
      </div>
    </div>
  )
}
