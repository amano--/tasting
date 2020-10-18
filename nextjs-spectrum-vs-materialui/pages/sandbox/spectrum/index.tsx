import Link from 'next/link'

export default function IndexPage() {
  return (
    <>
      <div>
        <a href="https://github.com/devongovett/rsp-next/tree/master/pages"> SSR - 参考サイト </a>
      </div>
      <hr />
      <Link href="/sandbox/spectrum/ui">
        <a>spectrum/ui</a>
      </Link>
      <hr />
      <Link href="/sandbox/spectrum/Stately">
        <a>Stately</a>
      </Link>
      <hr />
      <Link href="/sandbox/spectrum/ui/forms">
        <a>Form サンプル</a>
      </Link>
    </>
  )
}
