import React from "react";
import { useState } from "react";
import { MAvatar, MBadge, MSwitch, MButton, MInput, MOutlineButton } from "milky-ui";

const App = () => {
  const [isSwitched, setIsSwitched] = useState(false);
  return (
    <main>
      <MAvatar src="https://blog.urbanpiper.com/content/images/2021/06/logo-react.png" />
      <MAvatar radius="30px" bg="#007fff" size="80px" />
      <MAvatar custom={'transform: scale(.8)'} radius="30px" bg="linear-gradient(45deg, #D38312, yellow)" size="80px" />
      <MBadge label="3" />
      <MBadge label="5300" />
      <MButton radius={"10px"} action={() => alert("Yay! button clicked")} label="Click me!" />
      <MSwitch onChange={() => {
        setIsSwitched(!isSwitched);
      }} value={isSwitched} />
      <MOutlineButton action={() => alert("Yay! button clicked")} label="New button!" />
      <MInput placeholder="Your name" />
      <MInput disabled placeholder="Your email" />
      <MInput isMultiline={true} height="100px" resize="none" placeholder="Message" />
    </main>
  );
};

export default App;
