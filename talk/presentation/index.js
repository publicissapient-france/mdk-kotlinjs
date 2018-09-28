import React from "react";
import styled from 'react-emotion';
import {BlockQuote, Cite, Deck, Fill, Heading, Image, Layout, List, ListItem, Quote, Slide, Text, S} from "spectacle";
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");

const theme = createTheme({
  primary: "#f1f3f4",
  secondary: "#2c374c",
  tertiary: "#c7b299",
  quaternary: "#fbb03b"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const RoundImage = styled(Image)`
  border-radius: 100%;
  border: solid 5px white;
  margin: 0 auto;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={300} theme={theme}>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Kotlin.js
          </Heading>
          <Heading textColor="tertiary" size={3}>
            ready or not?
          </Heading>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <RoundImage src={'https://pbs.twimg.com/profile_images/812379001989824513/R761-8An_400x400.jpg'}
                          height={400}/>
              <Text textColor="secondary" textSize={24}>Julien</Text>
              <Text textColor="tertiary" textSize={24}>@jsmadja</Text>
            </Fill>
            <Fill>
              <RoundImage src={'https://pbs.twimg.com/profile_images/755315452981673984/u0qV1kbU_400x400.jpg'}
                          height={400}/>
              <Text textColor="secondary" textSize={24}>Benjamin</Text>
              <Text textColor="tertiary" textSize={24}>@benjlacroix</Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgImage={'https://xebia.fr/static/img/home-header-desktop.503fa83.jpg'} bgDarken={.5}>
          <Image
            src={'https://d33wubrfki0l68.cloudfront.net/1cedc4baaee77ee7d32fe0e6c65bb8d8ad46643c/77eb0/img/xebia.png'}/>
        </Slide>
        <Slide>
          <Heading size={1} textColor="secondary">Kotlin & Kotlin.js</Heading>
          <Heading size={3} textColor="tertiary">Where does it come from?</Heading>
        </Slide>
        <Slide
          bgImage="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/JetBrains_Logo_2016.svg/1200px-JetBrains_Logo_2016.svg.png"
          bgRepeat="no-repeat"
          bgDarken=".9"
          bgSize="contain">
          <List textColor="primary">
            <ListItem>Created in 2011</ListItem>
            <ListItem>Open sourced in 2012</ListItem>
            <ListItem>Kotlin.js announced in 2017 with v1.1</ListItem>
            <ListItem>Improved in 2018 with v1.2.7</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
