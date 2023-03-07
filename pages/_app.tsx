import { extendTheme, StyleFunctionProps } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import React from 'react'
import 'react-phone-input-2/lib/style.css'
import { Provider } from 'react-redux'
import Layout from '../components/Layout'
import { store } from '../services/store'
import '../styles/globals.css'

//Theme Customization
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#E5E5E5',
      },
    }),
  },
  colors: {
    //ipcolor-imalipay colorcode
    ipcolor: '#014342',
    inputcolor: '#7C7C7C',
    placholdercolor: '#9B9B9B',
    selectcolor: 'f2f2f2',
    divider: '#cecece',
    error: '#F8E7E7',
    dashborder: '#D9D9D9',
    ipcolor2: '#DDDDDD',
    buttoncolor: '#101010',
    review: '#FFF2D8',
    success: '#E4F2D1',
    almostBlack: '#101010',
    C4C4C4: '#c4c4c4',
  },
  components: {
    Button: {
      variants: {
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'light' ? 'ipcolor' : 'null',
        }),
      },
      defaultProps: {
        colorScheme: 'ipcolor',
      },
    },
  },
  space: {},
})

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  const isLayoutDashboard = ['/post-errand', '/errandMarket/errands'].includes(
    appProps.router.pathname,
  )

  const LayoutComponent = isLayoutDashboard ? Layout : React.Fragment

  return (
    <Provider store={store}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </Provider>
  )
}
