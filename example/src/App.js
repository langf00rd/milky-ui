import React from 'react'
import { useState } from 'react'
import { MAvatar, MSwitch, MButton, MInput, MOutlineButton } from 'milky-ui'

const App = () => {
  const [isSwitched, setIsSwitched] = useState(false)
  return (
    <main>
      <MAvatar size='80px' radius='10px' src='http://blog.urbanpiper.com/content/images/2021/06/logo-react.png' />
      <MButton action={e => alert('Yay! button clicked')} label='Click me!' />
      <MAvatar bg='#00f777' size='100px' />
      <MOutlineButton action={e => alert('Yay! button clicked')} label='New button!' />
      <MInput placeholder='Your name' />
      <MInput disabled placeholder='Your email' />
      <MInput isMultiline={true} height='100px' resize='none' placeholder='Message' />
      <MSwitch onChange={() => { setIsSwitched(!isSwitched) }} value={isSwitched} />
    </main>
  )
}

export default App
