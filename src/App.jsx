import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from './utils/Theme'
import Navbar from './components/Navbar/Navbar'
import Herosection from './components/Herosection/Herosection'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import { BrowserRouter as Router } from 'react-router-dom'
const Body = styled.div`
background-color:${({ theme }) => theme.bg};
width:100%;
overflow-x:hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(0, 0, 237, 0.478) 0%, rgba(201, 32, 184, 0) 50%);
  linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  color: rgba(255, 255, 255, 0.76);
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
      
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Navbar />
          <Body>
            <Herosection />
            <Wrapper>
              <Skills />
              <Education />
            </Wrapper>
          </Body>
        </Router>
        
      </ThemeProvider>

    </>
  )
}

export default App
