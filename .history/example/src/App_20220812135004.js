import React from "react";
import { useState } from "react";
import { Avatar, Label,Spinner, Meta, Badge, Switch, Button, Input, OutlineButton } from "milky-ui";

const App = () => {
  const [isSwitched, setIsSwitched] = useState(false);

  const buttonClick=()=>{
    alert("Yay! button clicked")
  }

  return (
    <main>
      <Meta
        title="Milky UI Components"
        description="Random description"
        twitterDescription="Twitter description"
        image="https://blog.urbanpiper.com/content/images/2021/06/logo-react.png"
      />
      <Spinner speed={'.5s'} thickness={'4px'} color={'red'} />
      <Spinner thickness={'3px'} size={'20px'} />
      <Spinner color={'green'} variant={1} />
      <Spinner color={'orange'} variant={2} />
      <Avatar src="https://blog.urbanpiper.com/content/images/2021/06/logo-react.png" />
      <Avatar isEmpty={true} radius="30px" bg="#007fff" size="80px" />
      <Avatar isEmpty={true} custom={"transform: scale(.8)"} radius="30px" bg="linear-gradient(45deg, #D38312, yellow)"
              size="80px" />
      <Badge label="3" />
      <Badge label="5300" />
      <Label color='blue' text='COMPONENTS' />
      <Label type='error' text='ERROR' />
      <Label type='success' text='SUCCESS' />
      <OutlineButton label={"Hello world"} radius={"1000px"} hoverColor={"red"} />
      <Button bg='#3182ce' label='Click'/>
      <OutlineButton color='green' label='Click'/>
      <Button hoverBg={"green"} radius="9999px" label="Rounded button!" bg={"#555"} />
      <Button radius={"10px"} action={buttonClick} label="Click me!" />
      <Button to={"/home"} label={"Go home!"} />
      <Switch onChange={() => {
        setIsSwitched(!isSwitched);
      }} value={isSwitched} />
      <OutlineButton action={buttonClick} label="New button!" />
      <Input placeholder="Your name" />
      <Input borderStyle='dashed' disabled placeholder="Your email" />
      <Input isMultiline={true} height="300px" resize="vertical" placeholder="Message" />
    </main>
  );
};

export default App;
