import React from 'react';
import styled from 'react-emotion';
import {CodePane, Deck, Fill, Heading, Image, Layout, List, ListItem, Notes, Slide, Text} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import createTheme from 'spectacle/lib/themes/default';

import 'normalize.css';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-groovy';
import 'prismjs/components/prism-bash';

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

const SexyCodeSlide = styled(CodeSlide)`
  h1 {
    border: none !important;
    color: #2c374c !important;
  }
`;

const WideSexyCodeSlide = styled(SexyCodeSlide)`
  max-width: 85vw;
  pre {
    transform: translateY(-85px);
  }
`;

const WideSlide = styled(Slide)`
  max-width: 85vw;
  pre {
    border-radius: 3px;
  }
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
        textSize={textSize}
        theme={'light'}
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
          <Heading size={3} textColor="secondary">What are Firebase Functions?</Heading>
          <List textColor="tertiary">
            <ListItem>Backend code responds to events triggered by Firebase features and HTTPS requests</ListItem>
            <ListItem>Code stored in Google's cloud</ListItem>
            <ListItem>Runs in a managed environment</ListItem>
            <ListItem>No need to manage and scale servers</ListItem>
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
          <Heading textColor="secondary">How achieve that?</Heading>
          <List ordered textColor="tertiary">
            <ListItem>Create a Firebase Functions project</ListItem>
            <ListItem>Get or write your own wrappers</ListItem>
            <ListItem>Code your very first Kotlin Express program</ListItem>
            <ListItem>Build it</ListItem>
            <ListItem>Deploy it</ListItem>
            <ListItem>Run it</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading textColor="secondary">What do we need?</Heading>
          <List ordered textColor="tertiary">
            <ListItem><strong>A Gradle config file</strong></ListItem>
          </List>
        </Slide>

        <WideSexyCodeSlide
          bgColor={'primary'}
          lang='groovy'
          code={require('raw-loader!../../kt-api/build.gradle')}
          ranges={[
            {loc: [1, 2], title: 'build.gradle'},
            {loc: [6, 9], title: 'build.gradle'},
            {loc: [11, 12], title: 'build.gradle'},
            {loc: [17, 21], title: 'build.gradle'},
            {loc: [22, 28], title: 'build.gradle'}
          ]}
        >
        </WideSexyCodeSlide>

        <Slide>
          <Heading textColor="secondary">What do we need?</Heading>
          <List ordered textColor="tertiary">
            <ListItem>A Gradle config file</ListItem>
            <ListItem><strong>A database</strong></ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading textColor="secondary">Firestore</Heading>
        </Slide>

        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          code={require('raw-loader!../assets/api-express-save.kt')}
          ranges={[
            {loc: [0, 3], title: 'Firestore Wrappers'}
          ]}
        >
        </WideSexyCodeSlide>

        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="typescript"
          code={require('raw-loader!../../kt-api/node_modules/firebase-admin/lib/index.d.ts')}
          ranges={[
            {loc: [57, 65], title: 'firebase-admin/index.d.ts'}
          ]}
        >
        </WideSexyCodeSlide>

        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          code={require('raw-loader!../../kt-api/src/main/kotlin/com/firebase/wrapper/admin/Admin.kt')}
          ranges={[
            {loc: [0, 15], title: 'Admin.kt'},
            {loc: [6, 7], title: 'Admin.kt'},
            {loc: [12, 13]}
          ]}
        >
        </WideSexyCodeSlide>

        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          code={require('raw-loader!../../kt-api/src/main/kotlin/com/firebase/wrapper/admin/firestore/Firestore.kt')}
          ranges={[
            {loc: [0, 6], title: 'Firestore.kt'}
          ]}
        >
        </WideSexyCodeSlide>

        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="javascript"
          code={require('raw-loader!../../kt-api/functions/index.js')}
          ranges={[
            {loc: [575, 576], title: 'kt-api/index.js'}
          ]}
        >
        </WideSexyCodeSlide>

        <Slide>
          <Heading textColor='secondary'>Keywords</Heading>
          <List textColor='tertiary'>
            <ListItem><strong>dynamic</strong> references a dynamic type in Kotlin/JS code</ListItem>
            <ListItem><strong>external</strong> marks a declaration as implemented not in Kotlin (accessible through JNI
              or in JavaScript)</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading textColor="secondary">What do we need?</Heading>
          <List ordered textColor="tertiary">
            <ListItem>A Gradle config file</ListItem>
            <ListItem>A database</ListItem>
            <ListItem><strong>A Web Framework</strong></ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading textColor="secondary">To do what?</Heading>
          <List ordered textColor="tertiary">
            <ListItem><strong>Store</strong> new events in Database</ListItem>
            <ListItem><strong>List</strong> all stored events</ListItem>
            <ListItem><strong>Get</strong> detailed informations about an event</ListItem>
          </List>
        </Slide>

        <WideSexyCodeSlide bgColor={'primary'}
                           lang='kotlin' code={require('raw-loader!../assets/api-express.kt')}
                           ranges={[
                             {loc: [0, 2], title: 'index.kt'},
                             {loc: [8, 12], title: 'index.kt'},
                           ]}
        >
        </WideSexyCodeSlide>
        <WideSexyCodeSlide bgColor={'primary'}
                           lang='kotlin'
                           code={require('raw-loader!../assets/api-express-dataclass.kt')}
                           ranges={[
                             {loc: [0, 1], title: 'EventInput'},
                             {loc: [1, 2], title: 'Event'},
                             {loc: [2, 3], title: 'Params'},
                             {loc: [3, 4], title: 'Message'},
                           ]}>
        </WideSexyCodeSlide>
        <WideSexyCodeSlide bgColor={'primary'}
                           lang='kotlin'
                           code={require('raw-loader!../assets/api-express-create.kt')}
                           ranges={[
                             {loc: [0, 23], title: 'CreateEvent'},
                             {loc: [2, 9], title: 'CreateEvent'},
                             {loc: [9, 10], title: 'CreateEvent'},
                             {loc: [9, 19], title: 'CreateEvent'},
                             {loc: [20, 21], title: 'CreateEvent'},
                           ]
                           }
        >
        </WideSexyCodeSlide>
        {demoSlide}
        <Slide>
          <Heading size={3} textColor="secondary">Can I do frontend also with Kotlin?</Heading>
          <List textColor="tertiary">
            <ListItem>Create <b>HTML</b> content</ListItem>
            <ListItem><b>React</b> application</ListItem>
          </List>
        </Slide>
        <Slide maxHeight={100} maxWidth={100}>
          <Heading>Kotlinx.html</Heading>
        </Slide>
        <WideSlide bgColor={'secondary'}>
          <Heading margin={50} size={3} textColor="primary">Gradle</Heading>
          {codePan(24, 'groovy', require('raw-loader!../assets/htmlx-gradle-example.gradle'))}
        </WideSlide>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="groovy"
          code={require('raw-loader!../assets/htmlx-gradle-example.gradle')}
          ranges={[
            {loc: [0, 10], title: 'Gradle'},
            {loc: [5, 7]},
            {loc: [7, 8]},
            {loc: [0, 4]}
          ]}/>
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
        <SexyCodeSlide
          bgColor={'primary'}
          lang="bash"
          code={require('raw-loader!../assets/kt-styled-npm.sh')}
          ranges={[
            {loc: [0, 6], title: 'Kotlin with style 💃'},
            {loc: [2, 3]},
            {loc: [4, 5]}
          ]}/>
        <SexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          code={require('raw-loader!../assets/styled.kt')}
          ranges={[
            {loc: [0, 17], title: 'Kotlin with style 💃'},
            {loc: [4, 5]},
            {loc: [6, 7]},
            {loc: [8, 9]},
            {loc: [5, 12]},
            {loc: [0, 3]}
          ]}>
          <Notes>
            <p>La plupart des propriétés CSS sont supportés sinon possible ajout à la main <code>put("key",
              "val")</code>
            </p>
            <p>Possibilité de créer des feuilles de style en Kotlin et ainsi utiliser des sélecteurs <code>hover,
              etc.</code></p>
          </Notes>
          {/*{codePan(24, 'kotlin', require('raw-loader!../assets/styled.kt'))}*/}
        </SexyCodeSlide>
        {demoSlide}
        <Slide>
          <Heading size={2} caps textColor="secondary">
            What if I want to share my app to the 🌎?
          </Heading>
          <Heading textColor="tertiary" size={3}>
            Hello World Firebase Hosting 🔥
          </Heading>
        </Slide>
        <SexyCodeSlide
          bgColor={'primary'}
          lang="bash"
          code={require('raw-loader!../assets/firebase-hosting.sh')}
          ranges={[
            {loc: [0, 14], title: 'Get Firebase working'},
            {loc: [0, 3]},
            {loc: [4, 5]},
            {loc: [6, 7]},
            {loc: [8, 9]},
            {loc: [10, 11]}
          ]}/>
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
