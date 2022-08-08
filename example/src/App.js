import React from 'react'
import { MAvatar, MButton, MInput, MOutlineButton } from 'milky-ui'

const App = () => {
  return (
    <main>
      <MAvatar size='100px' radius='20px' src='http://blog.urbanpiper.com/content/images/2021/06/logo-react.png' />
      <MButton label='Click me!' />
      <MOutlineButton label='Outline me!' />
      <MInput placeholder='Your name' />
    </main>
  )
}

export default App
