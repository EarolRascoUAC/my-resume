import { Box, Heading, Text } from '@chakra-ui/react'
import "./globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;