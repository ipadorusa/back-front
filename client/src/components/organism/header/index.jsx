import Link from 'next/link'
import style from './header.module.scss'
import Ci from '@/public/assets/svg/ci.svg'
export default function Header() {
  return (
    <header id="sri_header" className={style.header}>
      <Link href="/">Link - HOME</Link>
      <Link href="/grid">Link - grid</Link>
      <Link href="/board">Link - board</Link>
      <Link href="/about">Link - about</Link>
      <Link href="/time">Link - time</Link>
      <Link href="/blog">Link - blog</Link>
      <Link href="/infi">Link - infi</Link>
      <Link href="/counter">Link - counter</Link>
      <Link href="/story">Link - story</Link>
      <Link href="/test">Link - test</Link>
    </header>
  )
}
