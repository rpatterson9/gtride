import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import "mapbox-gl/dist/mapbox-gl.css"
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp