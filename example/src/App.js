import React from 'react';
import { useState } from "react";
import { MAvatar, MBadge, MSwitch, MButton, MInput, MOutlineButton } from "milky-ui";

const App = () => {
  const [isSwitched, setIsSwitched] = useState(false);
  return (
    <main>
      <MAvatar src="https://blog.urbanpiper.com/content/images/2021/06/logo-react.png" />
      <MAvatar radius="30px" bg="#00ff77" size="80px" />
      <MBadge label="3" />
      <MButton radius={"10px"} action={() => alert("Yay! button clicked")} label="Click me!" />
      <MOutlineButton action={() => alert("Yay! button clicked")} label="New button!" />
      <MInput placeholder="Your name" />
      <MInput disabled placeholder="Your email" />
      <MInput isMultiline={true} height="100px" resize="none" placeholder="Message" />
      <MSwitch onChange={() => {
        setIsSwitched(!isSwitched);
      }} value={isSwitched} />
    </main>
  );
};

export default App;
