import { Header, Footer } from '../organism'

export default function AboutLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
