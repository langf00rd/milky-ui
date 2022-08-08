import React from 'react'
import 'milky-ui/dist/index.css'
import { MAvatar, MButton, MInput, MOutlineButton } from 'milky-ui'

const App = () => {
  return (
    <main>
      <MAvatar size='100px' radius='20px' src='http://blog.urbanpiper.com/content/images/2021/06/logo-react.png' />
      <MButton action={e => alert('Yay! button clicked')} label='Click me!' />
      <MAvatar bg='#00f777' size='100px' />
      <MOutlineButton action={e => alert('Yay! button clicked')} label='Outline me!' />
      <MInput placeholder='Your name' />
      <MInput disabled placeholder='Your email' />
      <MInput isMultiline={true} height='100px' resize='none' placeholder='Message' />
    </main>
  )
}

export default App
