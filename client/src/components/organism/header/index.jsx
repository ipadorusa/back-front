import Link from 'next/link'
import style from './header.module.scss'
import Ci from '@/public/assets/svg/ci.svg'
export default function Header() {
  return (
    <header id="sri_header" className={style.header}>
      <Link href="/">Link - HOME</Link>
      <Link href="/about">Link - about</Link>
      <Link href="/time">Link - time</Link>
      <Link href="/blog">Link - blog</Link>
      <Link href="/todo">Link - todo</Link>
    </header>
  )
}
