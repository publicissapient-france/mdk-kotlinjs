import React from 'react';
import styled from 'react-emotion';
import {CodePane, Deck, Fill, Heading, Image, Layout, List, ListItem, Slide, Text} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('prismjs/components/prism-kotlin');
require('prismjs/components/prism-groovy');
require('prismjs/components/prism-bash');

const theme = createTheme({
  primary: '#f1f3f4',
  secondary: '#2c374c',
  tertiary: '#c7b299',
  quaternary: '#fbb03b'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

const RoundImage = styled(Image)`
  border-radius: 100%;
  border: solid 5px white;
  margin: 0 auto;
`;

export default class Presentation extends React.Component {
  render() {
    const demoSlide = <Slide>
      <Heading size={3} textColor='secondary'>
        Seems easy, right? Let's see
      </Heading>
      <Heading textColor='tertiary' size={3}>
        It's demo time! Yay!
      </Heading>
    </Slide>;

    const codePan = (textSize, lang, source) => <CodePane
      style={'.prism-code { border-radius: 5px; }'}
      textSize={textSize}
      theme={'coy'}
      lang={lang}
      source={source}
    />;

    return (
      <Deck transition={['fade']} transitionDuration={300} theme={theme}>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Kotlin.js
          </Heading>
          <Heading textColor='tertiary' size={3}>
            ready or not?
          </Heading>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <RoundImage src={'https://pbs.twimg.com/profile_images/812379001989824513/R761-8An_400x400.jpg'}
                          height={400}/>
              <Text textColor='secondary' textSize={24}>Julien</Text>
              <Text textColor='tertiary' textSize={24}>@jsmadja</Text>
            </Fill>
            <Fill>
              <RoundImage src={'https://pbs.twimg.com/profile_images/755315452981673984/u0qV1kbU_400x400.jpg'}
                          height={400}/>
              <Text textColor='secondary' textSize={24}>Benjamin</Text>
              <Text textColor='tertiary' textSize={24}>@benjlacroix</Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgImage={'https://xebia.fr/static/img/home-header-desktop.503fa83.jpg'} bgDarken={.5}>
          <Image
            src={'https://d33wubrfki0l68.cloudfront.net/1cedc4baaee77ee7d32fe0e6c65bb8d8ad46643c/77eb0/img/xebia.png'}/>
        </Slide>
        <Slide>
          <Heading size={1} textColor='secondary'>Kotlin & Kotlin.js</Heading>
          <Heading size={3} textColor='tertiary'>Where does it come from?</Heading>
        </Slide>
        <Slide
          bgImage='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/JetBrains_Logo_2016.svg/1200px-JetBrains_Logo_2016.svg.png'
          bgRepeat='no-repeat'
          bgDarken='.9'
          bgSize='contain'>
          <List textColor='primary'>
            <ListItem>Created in 2011</ListItem>
            <ListItem>Open sourced in 2012</ListItem>
            <ListItem>Kotlin.js announced in 2017 with v1.1</ListItem>
            <ListItem>Improved in 2018 with v1.2.7</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Kotlin on Firebase
          </Heading>
          <Heading textColor='tertiary' size={3}>
            is it possible?
          </Heading>
        </Slide>
        <Slide>
          <Heading fit caps lineHeight={1} textColor='secondary'>
            What are Firebase Functions?
          </Heading>
          <List textColor='secondary'>
            <ListItem>Cloud Functions for Firebase lets you automatically <strong>run backend code</strong> in response
              to events triggered by Firebase features and HTTPS requests.</ListItem>
            <ListItem>Your code is stored in Google's cloud and runs in a managed environment.</ListItem>
            <ListItem>There's no need to manage and scale your own servers.</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} textColor='secondary'>
            Unfortunately that's only for Node.JS...
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor='secondary'>
            What if we could use Kotlin.JS to create our own Firebase Functions?
          </Heading>
        </Slide>
        <Slide>
          <Heading fit caps lineHeight={1} textColor='secondary'>
            How achieve that?
          </Heading>
          <List textColor='secondary'>
            <ListItem>Create a Firebase Cloud Functions project</ListItem>
            <ListItem>Get or write your own wrappers</ListItem>
            <ListItem>Code your very first Kotlin Express program</ListItem>
            <ListItem>Build it</ListItem>
            <ListItem>Deploy it</ListItem>
            <ListItem>Run it</ListItem>
          </List>
        </Slide>
        {demoSlide}
        <Slide>
          <Heading size={3} textColor='secondary'>Can I do frontend also with Kotlin?</Heading>
          <List textColor='tertiary'>
            <ListItem>Create <b>HTML</b> content</ListItem>
            <ListItem><b>React</b> application</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Kotlinx.html</Heading>
        </Slide>
        <Slide bgColor={'secondary'}>
          <Heading margin={50} size={3} textColor='primary'>Gradle</Heading>
          {codePan(24, 'groovy', require('raw-loader!../assets/htmlx-gradle-example.kt'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          {codePan(17, 'kotlin', require('raw-loader!../assets/htmlx-example.kt'))}
        </Slide>
        {demoSlide}
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            React?
          </Heading>
          <Heading textColor='tertiary' size={3}>
            Create React Kotlin App
          </Heading>
        </Slide>
        <Slide>
          {codePan(24, 'bash', require('raw-loader!../assets/kt-react-setup.sh'))}
        </Slide>
      </Deck>
    );
  }
}
