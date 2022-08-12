import React from "react";
import { useState } from "react";
import { Avatar, Loader, Meta, Badge, Switch, Button, Input, OutlineButton } from "milky-ui";

const App = () => {
  const [isSwitched, setIsSwitched] = useState(false);
  return (
    <main>
      <Meta
        title="Milky UI sample page"
        description="Random description"
        twitterDescription="Twitter description"
        image="https://blog.urbanpiper.com/content/images/2021/06/logo-react.png"
      />
      <Loader speed={'.5s'} thickness={'4px'} color={'red'} />
      <Loader thickness={'3px'} size={'20px'} />
      <Loader color={'green'} variant={1} />
      <Loader color={'orange'} variant={2} />
      <Avatar src="https://blog.urbanpiper.com/content/images/2021/06/logo-react.png" />
      <Avatar isEmpty={true} radius="30px" bg="#007fff" size="80px" />
      <Avatar isEmpty={true} custom={"transform: scale(.8)"} radius="30px" bg="linear-gradient(45deg, #D38312, yellow)"
              size="80px" />
      <Badge label="3" />
      <Badge label="5300" />
      <OutlineButton label={"Hello world"} radius={"1000px"} hoverColor={"red"} />
      <Button hoverBg={"green"} radius="9999px" label="Rounded button!" bg={"#555"} />
      <Button radius={"10px"} action={() => alert("Yay! button clicked")} label="Click me!" />
      <Button to={"/home"} label={"Go home!"} />
      <Switch onChange={() => {
        setIsSwitched(!isSwitched);
      }} value={isSwitched} />
      <OutlineButton action={() => alert("Yay! button clicked")} label="New button!" />
      <Input placeholder="Your name" />
      <Input disabled placeholder="Your email" />
      <Input isMultiline={true} height="100px" resize="none" placeholder="Message" />
    </main>
  );
};

export default App;
