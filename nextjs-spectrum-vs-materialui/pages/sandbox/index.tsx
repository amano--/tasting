import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      <div className="py-20">
        <Link href="/sandbox/mypage">
          <a>mypage</a>
        </Link>
      </div>

      <div className="py-20">
        <Link href="/sandbox/material_ui-samples/templates/Templates">
          <a>material_ui-samples/templates/Templates</a>
        </Link>
      </div>

      <div className="py-20">
        <Link href="/sandbox/spectrum">
          <a>spectrum</a>
        </Link>
      </div>
    </div>
  )
}
