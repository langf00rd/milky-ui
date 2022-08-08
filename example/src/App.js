import React from 'react'
import { MAvatar, MButton, MInput, MOutlineButton } from 'milky-ui'

const App = () => {
  return (
    <main>
      <MAvatar size='100px' radius='20px' src='http://blog.urbanpiper.com/content/images/2021/06/logo-react.png' />
      <MButton label='Click me!' />
      <MAvatar bg='#00f777' size='100px' />
      <MOutlineButton label='Outline me!' />
      <MInput placeholder='Your name' />
      <MInput placeholder='Your email' />
      <MInput isMultiline={true} height='100px' resize='none' placeholder='Message' />
    </main>
  )
}

export default App
