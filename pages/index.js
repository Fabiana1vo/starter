import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Olá!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Site em construção" />
        <p className="description">
          Volte amanhã!
        </p>
      </main>

      <Footer />
    </div>
  )
}
