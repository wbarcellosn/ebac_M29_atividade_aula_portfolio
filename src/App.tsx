import { ThemeProvider } from 'styled-components' // Importação para poder utilizar temas

import EstiloGlobal, { Container } from './Styles'
import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'
import { useState } from 'react'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  function changeTheme() {
    setDarkTheme(!darkTheme)
  }

  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar chageTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
