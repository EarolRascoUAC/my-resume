import Career from "../../components/career";
import Certifications from "../../components/certifications";
import Education from "../../components/education";
import Heading from "../../components/heading";
import Skills from "../../components/skills";
import WorkExperience from "../../components/workexperience";

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )
}


export default function Home() {
  return (
    <div>
      <Heading />
      <Career />
      <Education />
      <Skills />
      <Certifications />
      <WorkExperience />
    </div>
  )
}
