import React from 'react';
import styled from 'react-emotion';
import { CodePane, Deck, Fill, Heading, Image, Layout, List, ListItem, Notes, Slide, Text } from 'spectacle';
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
    const demoSlide = (<Slide>
      <Heading size={3} textColor="secondary">
        Seems easy, right? Let's see
      </Heading>
      <Heading textColor="tertiary" size={3}>
        It's demo time! Yay!
      </Heading>
    </Slide>);

    const codePan = (textSize, lang, source) =>
      (<CodePane
        style={'.prism-code { border-radius: 5px; }'}
        textSize={textSize}
        theme={'coy'}
        lang={lang}
        source={source}/>);

    return (
      <Deck transition={['fade']} transitionDuration={300} theme={theme}>
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
              <RoundImage
                src={'https://pbs.twimg.com/profile_images/1048231075284242434/KvJaS94d_400x400.jpg'}
                height={400}/>
              <Text textColor="secondary" textSize={24}>Julien</Text>
              <Text textColor="tertiary" textSize={24}>@jsmadja</Text>
            </Fill>
            <Fill>
              <RoundImage
                src={'https://pbs.twimg.com/profile_images/755315452981673984/u0qV1kbU_400x400.jpg'}
                height={400}/>
              <Text textColor="secondary" textSize={24}>Benjamin</Text>
              <Text textColor="tertiary" textSize={24}>@benjlacroix</Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgImage={'https://xebia.fr/static/img/home-header-desktop.503fa83.jpg'} bgDarken={.5}>
          <Image
            src={'https://d33wubrfki0l68.cloudfront.net/1cedc4baaee77ee7d32fe0e6c65bb8d8ad46643c/77eb0/img/xebia.png'}
          />
        </Slide>
        <Slide>
          <Heading size={1} textColor="secondary">Kotlin & Kotlin.js</Heading>
          <Heading size={3} textColor="tertiary">Where does it come from?</Heading>
        </Slide>
        <Slide
          bgImage="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/JetBrains_Logo_2016.svg/1200px-JetBrains_Logo_2016.svg.png"
          bgRepeat="no-repeat"
          bgDarken=".9"
          bgSize="contain"
        >
          <List textColor="primary">
            <ListItem>Created in <b>2011</b></ListItem>
            <ListItem>Open sourced in <b>2012</b></ListItem>
            <ListItem>Kotlin.js announced in <b>2017</b> with <b>v1.1</b></ListItem>
            <ListItem>Improved in <b>2018</b> with <b>v1.2.7</b></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Kotlin on Firebase
          </Heading>
          <Heading textColor="tertiary" size={3}>
            is it possible?
          </Heading>
        </Slide>
        <Slide>
          <Heading fit caps lineHeight={1} textColor="secondary">
            What are Firebase Functions?
          </Heading>
          <List textColor="secondary">
            <ListItem>Cloud Functions for Firebase lets you automatically <strong>run backend code</strong> in response
              to events triggered by Firebase features and HTTPS requests.</ListItem>
            <ListItem>Your code is stored in Google's cloud and runs in a managed environment.</ListItem>
            <ListItem>There's no need to manage and scale your own servers.</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">
            Unfortunately that's only for Node.JS...
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">
            What if we could use Kotlin.JS to create our own Firebase Functions?
          </Heading>
        </Slide>
        <Slide>
          <Image src={'https://d3nmt5vlzunoa1.cloudfront.net/kotlin/files/2017/11/MPP.png'}/>
        </Slide>
        <Slide>
          <Heading fit caps lineHeight={1} textColor="secondary">
            How achieve that?
          </Heading>
          <List ordered textColor="secondary">
            <ListItem>Create a Firebase Cloud Functions project</ListItem>
            <ListItem>Get or write your own wrappers</ListItem>
            <ListItem>Code your very first Kotlin Express program</ListItem>
            <ListItem>Build it</ListItem>
            <ListItem>Deploy it</ListItem>
            <ListItem>Run it</ListItem>
          </List>
        </Slide>
        <Slide bgColor={'secondary'}>
          <Heading size={3} textColor="primary">Wrappers</Heading>
          <Heading textColor="tertiary" size={3}>
            What
          </Heading>
        </Slide>
        <Slide bgColor={'secondary'}>
          <Heading margin={50} size={3} textColor="primary">Wrappers</Heading>
          {codePan(30, 'kotlin', require('raw-loader!../assets/api-express-save.kt'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          <Heading size={3} textColor="primary">Gradle - from(kt).to(js)</Heading>
          {codePan(15, 'groovy', require('raw-loader!../assets/api-gradle-example'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          <Heading size={3} textColor="primary">Express - routing</Heading>
          {codePan(30, 'kotlin', require('raw-loader!../assets/api-express.kt'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          <Heading size={3} textColor="primary">Express - data transfert object</Heading>
          {codePan(30, 'kotlin', require('raw-loader!../assets/api-express-dataclass.kt'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          <Heading size={3} textColor="primary">Express - params</Heading>
          {codePan(30, 'kotlin', require('raw-loader!../assets/api-express-create.kt'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          <Heading size={3} textColor="primary">Express - datastore</Heading>
          {codePan(30, 'kotlin', require('raw-loader!../assets/api-express-save.kt'))}
        </Slide>
        {demoSlide}
        <Slide>
          <Heading size={3} textColor="secondary">Can I do frontend also with Kotlin?</Heading>
          <List textColor="tertiary">
            <ListItem>Create <b>HTML</b> content</ListItem>
            <ListItem><b>React</b> application</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Kotlinx.html</Heading>
        </Slide>
        <Slide bgColor={'secondary'}>
          <Heading margin={50} size={3} textColor="primary">Gradle</Heading>
          {codePan(24, 'groovy', require('raw-loader!../assets/htmlx-gradle-example.kt'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          {codePan(17, 'kotlin', require('raw-loader!../assets/htmlx-example.kt'))}
        </Slide>
        {demoSlide}
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            TODO: caption of app
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React?
          </Heading>
          <Heading textColor="tertiary" size={3}>
            Create React Kotlin App
          </Heading>
        </Slide>
        <Slide bgColor={'secondary'}>
          {codePan(24, 'bash', require('raw-loader!../assets/kt-react-setup.sh'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          <Notes>
            <ol>
              <li>Close to JavaScript React code</li>
              <li>JSX replaced by DSL</li>
              <li>Because it's React: 3 types of components</li>
            </ol>
          </Notes>
          {codePan(22, 'kotlin', require('raw-loader!../assets/react-app.kt'))}
        </Slide>
        <Slide>
          <List ordered>
            <ListItem>Functional components</ListItem>
            <ListItem>Class components</ListItem>
            <ListItem>Stateful (-class) components</ListItem>
          </List>
        </Slide>
        <Slide bgColor={'secondary'}>
          <Notes>
            Functional components: simple et rapide à mettre en oeuvre, il n'y a que <code>render()</code>
          </Notes>
          {codePan(22, 'kotlin', require('raw-loader!../assets/react-functional-component.kt'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          <Notes>
            Class components: plus complexe, il y a un cycle de vie et les entrées (<code>props</code>) sont
            typées
          </Notes>
          {codePan(22, 'kotlin', require('raw-loader!../assets/react-class-component.kt'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          <Notes>
            Stateful components: garde un état (champ texte, etc.)
          </Notes>
          {codePan(18, 'kotlin', require('raw-loader!../assets/react-stateful-component.kt'))}
        </Slide>
        <Slide>
          <Notes>
            <p>Possible d'importer la bibliothèque dans <code>index.html</code> puis de l'utiliser en globale.</p>
            <p>Aujourd'hui, plus <code>AMD</code> ou <code>CommonJS</code></p>
            <p><code>Kotlin.js</code> permet de faire la même chose</p>
          </Notes>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            That's it?
          </Heading>
          <Heading textColor="tertiary" size={3}>
            How to consume an API with <code>Axios</code>
          </Heading>
        </Slide>
        <Slide bgColor={'secondary'}>
          {codePan(24, 'bash', require('raw-loader!../assets/axios-npm.sh'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          <Notes>
            <p><code>dynamic</code> est utilisé pour permettre l'ajout de bibliothèques externes pas typées</p>
            <p>Quel intérêt d'utiliser des bibliothèques pas typées si on utilise Kotlin ?</p>
            <p>Possible de faire un interface à la main</p>
          </Notes>
          {codePan(22, 'kotlin', require('raw-loader!../assets/axios-dynamic.kt'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          <Notes>
            <p>Possible à la main, un peu long et laborieux, quelque chose de mieux ?</p>
          </Notes>
          {codePan(22, 'kotlin', require('raw-loader!../assets/axios-interface.kt'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          <Notes>
            <p>Production d'un fichier Kotlin de typage d'Axios à partir du typage TypeScript</p>
            <p>Quelques problèmes</p>
            <ol>
              <li>Renommer le fichier en Axios.kt</li>
              <li>Ajout du @JsModule</li>
              <li>Suppression de default pas nécessaire</li>
              <li>Collision entre la classe Error JavaScript et Kotlin, utilisation d'une définition externe</li>
            </ol>
          </Notes>
          {codePan(24, 'bash', require('raw-loader!../assets/axios-ts2kt.sh'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          {codePan(24, 'kotlin', require('raw-loader!../assets/axios-types.kt'))}
        </Slide>
        <Slide>
          <Heading size={2} caps textColor="secondary">
            Promise syntax in Kotlin in 2018? 😱
          </Heading>
          <Heading textColor="tertiary" size={3}>
            No way... Coroutines!
          </Heading>
        </Slide>
        <Slide>
          <Notes>
            <p>Pas d'async await comme en TypeScript</p>
            <p>On parle de suspending function</p>
            <p>kotlinx.coroutines bibliothèque avancée pour manipuler les coroutines @JetBrains</p>
            <p>Scope d'exécution, attente de la fin d'exécution, thread au régime, plus comme un démon qui tourne en
              fond</p>
          </Notes>
          <Heading size={1} caps textColor="secondary">
            Coroutines
          </Heading>
          <Heading textColor="tertiary" size={3}>
            Asynchronous programming
          </Heading>
        </Slide>
        <Slide bgColor={'secondary'}>>
          {codePan(24, 'bash', require('raw-loader!../assets/coroutine-npm.sh'))}
        </Slide>
        <Slide>
          <Notes>
            <p><code>await()</code> est donné par la bibliothèque coroutines</p>
            <p>plus besoin de s'occuper du <code>then()</code> et du <code>catch()</code></p>
            <p>la méthode retourne directement le résultat (pas comme en JavaScript une Promise)</p>
            <p>le scope <code>CoroutineScope</code> permet de créer un scope au composant, job regroupe les coroutines
              en exécution</p>
          </Notes>
          {codePan(22, 'kotlin', require('raw-loader!../assets/coroutine-axios.kt'))}
        </Slide>
        <Slide>
          <List>
            <ListItem>React in Kotlin</ListItem>
            <ListItem>Libraries with typing</ListItem>
            <ListItem>Clean async with coroutines</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} caps textColor="secondary">
            Fits for prototyping?
          </Heading>
          <Heading textColor="tertiary" size={3}>
            Only if material-ui works, does it?
          </Heading>
        </Slide>
        <Slide bgColor={'secondary'}>
          <Notes>
            <p>Difficile de faire fonctionner <code>ts2kt</code> le code produit est incomplet</p>
            <p>Il va falloir le faire à la main</p>
          </Notes>
          {codePan(24, 'bash', require('raw-loader!../assets/material-ui-npm.sh'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          <Notes>
            <p>Obliger de redéfinir les <code>props</code> pour avoir la complétion.</p>
            <p>⚠️ Import du module pour récupération du component (défaut)</p>
          </Notes>
          {codePan(20, 'kotlin', require('raw-loader!../assets/material-ui-snackbar.kt'))}
        </Slide>
        <Slide>
          <Heading size={2} caps textColor="secondary">
            Can I write CSS the kotlin way?
          </Heading>
          <Heading textColor="tertiary" size={3}>
            Yes! Another DSL
          </Heading>
        </Slide>
        <Slide>
          <Notes>
            <p><code>styled-components</code>permet de définir le style d'un composant React via backsticks <code>tagged
              templates</code> (quote)</p>
            <p><code>inline-style-prefixer</code>permet d'ajouter un préfixe au style défini et ainsi l'encapsuler</p>
          </Notes>
          <Heading size={2} caps textColor="secondary">
            Kotlin wrappers for
          </Heading>
          <List>
            <ListItem>styled-components</ListItem>
            <ListItem>inline-style-prefixer</ListItem>
          </List>
        </Slide>
        <Slide bgColor={'secondary'}>
          {codePan(24, 'bash', require('raw-loader!../assets/kt-styled-npm.sh'))}
        </Slide>
        <Slide bgColor={'secondary'}>
          <Notes>
            <p>La plupart des propriétés CSS sont supportés sinon possible ajout à la main <code>put("key",
              "val")</code>
            </p>
            <p>Possibilité de créer des feuilles de style en Kotlin et ainsi utiliser des sélecteurs <code>hover,
              etc.</code></p>
          </Notes>
          {codePan(24, 'kotlin', require('raw-loader!../assets/styled.kt'))}
        </Slide>
        {demoSlide}
        <Slide>
          <Heading size={2} caps textColor="secondary">
            What if I want to share my app to the 🌎?
          </Heading>
          <Heading textColor="tertiary" size={3}>
            Hello World Firebase Hosting 🔥
          </Heading>
        </Slide>
        <Slide>
          {codePan(24, 'bash', require('raw-loader!../assets/firebase-hosting.sh'))}
        </Slide>
        <Slide>
          <Heading size={2} caps textColor="secondary">
            Let's code our next React app in Kotlin?
          </Heading>
        </Slide>
        <Slide>
          <Notes>
            <p>Très jeune, beaucoup de changements</p>
            <p>Pas encore de wrapper
              pour <code>Jest</code>, <code>Enzyme</code>, <code>storybook</code>, <code>Sinon</code></p>
            <p>Pas encore beaucoup de wrapper à part ceux de JetBrains</p>
          </Notes>
          <Heading size={2} caps textColor="secondary">
            Well...
          </Heading>
          <Heading size={2} caps textColor="secondary">
            no
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps textColor="secondary">
            Current available wrappers
          </Heading>
          <List>
            <ListItem>kotlin-css</ListItem>
            <ListItem>kotlin-extensions</ListItem>
            <ListItem>kotlin-mocha</ListItem>
            <ListItem>kotlin-react</ListItem>
            <ListItem>kotlin-react-dom</ListItem>
            <ListItem>kotlin-react-redux</ListItem>
            <ListItem>kotlin-react-router-dom</ListItem>
            <ListItem>kotlin-redux</ListItem>
            <ListItem>kotlin-styled</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} caps textColor="secondary">
            Take away
          </Heading>
          <List>
            <ListItem>github.com/JetBrains/create-react-kotlin-app</ListItem>
            <ListItem>github.com/JetBrains/kotlin-wrappers</ListItem>
            <ListItem>kotlinlang.org</ListItem>
            <ListItem>kotlinlang.org/docs/reference/js-overview.html</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} caps textColor="secondary">
            Thank you!
          </Heading>
          <Heading size={2} caps textColor="secondary">
            Let's build our next React app in Kotlin?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
