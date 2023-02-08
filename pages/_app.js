import '../styles/global.scss'
import '../styles/style.scss'

import '../components/SliderAutoPlay/slick-theme.css'
import '../components/SliderAutoPlay/slick.css'

import App from 'next/app'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
