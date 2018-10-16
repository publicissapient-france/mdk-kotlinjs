import React from 'react';
import styled from 'react-emotion';
import {Deck, Fill, Heading, Image, Layout, List, ListItem, Notes, Slide, Text} from 'spectacle';
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
    transform: translateY(-14%);
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

    return (
      <Deck transition={['fade']} transitionDuration={300} theme={theme} progress={'bar'}>
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
          <Heading size={1} caps textColor={'secondary'}>Agenda</Heading>
          <List>
            <ListItem>Firebase function</ListItem>
            <ListItem>Kotlin.X HTML</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Coroutines</ListItem>
            <ListItem>Firebase Hosting</ListItem>
          </List>
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
          lang={'groovy'}
          code={require('raw-loader!../../kt-api/build.gradle')}
          ranges={[
            {loc: [1, 2], title: 'build.gradle'},
            {loc: [6, 9], title: 'build.gradle'},
            {loc: [11, 12], title: 'build.gradle'},
            {loc: [17, 21], title: 'build.gradle'},
            {loc: [22, 28], title: 'build.gradle'}
          ]}/>

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
          ]}/>

        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="typescript"
          code={require('raw-loader!../../kt-api/node_modules/firebase-admin/lib/index.d.ts')}
          ranges={[
            {loc: [57, 65], title: 'firebase-admin/index.d.ts'}
          ]}/>

        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          code={require('raw-loader!../../kt-api/src/main/kotlin/com/firebase/wrapper/admin/Admin.kt')}
          ranges={[
            {loc: [0, 15], title: 'Admin.kt'},
            {loc: [6, 7], title: 'Admin.kt'},
            {loc: [12, 13]}
          ]}/>

        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          code={require('raw-loader!../../kt-api/src/main/kotlin/com/firebase/wrapper/admin/firestore/Firestore.kt')}
          ranges={[
            {loc: [0, 6], title: 'Firestore.kt'}
          ]}/>

        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="javascript"
          code={require('raw-loader!../../kt-api/functions/index.js')}
          ranges={[
            {loc: [575, 576], title: 'kt-api/index.js'}
          ]}/>

        <Slide>
          <Heading textColor="secondary">Keywords</Heading>
          <List textColor="tertiary">
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

        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin" code={require('raw-loader!../assets/api-express.kt')}
          ranges={[
            {loc: [0, 2], title: 'index.kt'},
            {loc: [8, 12], title: 'index.kt'}
          ]}/>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          code={require('raw-loader!../assets/api-express-dataclass.kt')}
          ranges={[
            {loc: [0, 1], title: 'EventInput'},
            {loc: [1, 2], title: 'Event'},
            {loc: [2, 3], title: 'Params'},
            {loc: [3, 4], title: 'Message'}
          ]}/>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          code={require('raw-loader!../assets/api-express-create.kt')}
          ranges={[
            {loc: [0, 23], title: 'CreateEvent'},
            {loc: [2, 9], title: 'CreateEvent'},
            {loc: [9, 10], title: 'CreateEvent'},
            {loc: [9, 19], title: 'CreateEvent'},
            {loc: [20, 21], title: 'CreateEvent'}
          ]
          }/>
        {demoSlide}
        <Slide>
          <Image src={'./images/demo1.png'}
          />
        </Slide>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang={'bash'}
          code={require('raw-loader!../assets/api-demo.sh')}
          ranges={[
            {loc: [0, 0], title: 'Demo!'},
            {loc: [0, 9], title: 'git clone'},
            {loc: [10, 11]},
            {loc: [12, 32], title: 'kt2js'},
            {loc: [35, 42], title: 'setup project'},
            {loc: [42, 57]},
            {loc: [57, 68]},
            {loc: [71, 92]},
            {loc: [100, 113]},
            {loc: [114, 127]},
            {loc: [128, 146]}
          ]}/>
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
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="groovy"
          code={require('raw-loader!../assets/htmlx-gradle-example.gradle')}
          ranges={[
            {loc: [0, 10], title: 'Gradle'},
            {loc: [5, 7], note: 'stdlib'},
            {loc: [7, 8], note: 'kotlinx-html'},
            {loc: [0, 4]}
          ]}/>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          notes={'appendHTML est dans stream<br>head, html sont dans la DSL Kotlin HTML'}
          code={require('raw-loader!../assets/htmlx-example.kt')}
          ranges={[
            {loc: [0, 26], title: 'HTML.X'},
            {loc: [0, 1], note: 'String builder'},
            {loc: [1, 2], note: 'HTML appender'},
            {loc: [2, 5], note: 'HEAD'},
            {loc: [5, 11], note: 'STYLE'},
            {loc: [13, 14], note: 'BODY'},
            {loc: [14, 22]}
          ]}/>
        {demoSlide}
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React?
          </Heading>
          <Heading textColor="tertiary" size={3}>
            Create React Kotlin App
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            TODO: caption of app
          </Heading>
        </Slide>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="bash"
          notes={'npx node > 5.2<br>JDK 8 only<br>react 16<br>react-dom<br>react-scripts-kotlin'}
          code={require('raw-loader!../assets/kt-react-setup.sh')}
          ranges={[
            {loc: [0, 0], title: 'Setup'},
            {loc: [2, 3], note: 'Node.js scripts to bootstrap app'},
            {loc: [7, 9], note: 'Run app 🚀'}
          ]}/>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          notes={'close to React JS code<br>JSX vs DSL<br>3 types de composants (comme en React)'}
          code={require('raw-loader!../assets/react-app.kt')}
          ranges={[
            {loc: [0, 0], title: 'React component'},
            {loc: [0, 1], note: 'extend RComponent with RProps and RState'},
            {loc: [1, 2], note: 'familiar render() method'},
            {loc: [2, 10], note: 'kotlinx.html DSL'},
            {loc: [13, 14], note: 'make component available'}
          ]}/>
        <Slide>
          <List ordered>
            <ListItem>Functional components</ListItem>
            <ListItem>Class components</ListItem>
            <ListItem>Stateful (-class) components</ListItem>
          </List>
        </Slide>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          notes={'simple et rapide à coder, render() only'}
          code={require('raw-loader!../assets/react-functional-component.kt')}
          ranges={[
            {loc: [0, 0], title: 'Functional component'},
            {loc: [0, 6]},
            {loc: [7, 11], note: 'empty content dummy component'}
          ]}/>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          notes={'garde un état (champ texte, etc.)'}
          code={require('raw-loader!../assets/react-stateful-component.kt')}
          ranges={[
            {loc: [0, 0], title: 'Stateful component'},
            {loc: [0, 3], note: 'Typed props (RProps)'},
            {loc: [4, 7], note: 'Typed state (RState)'},
            {loc: [8, 10]},
            {loc: [13, 14]},
            {loc: [14, 15]},
            {loc: [10, 18], note: 'Use state and method'},
            {loc: [21, 22]},
            {loc: [22, 23]},
            {loc: [19, 25], note: 'Mutate state and use props'}
          ]}/>
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
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          notes={'garde un état (champ texte, etc.)'}
          code={require('raw-loader!../assets/axios-npm.sh')}
          ranges={[
            {loc: [0, 0], title: 'Axios'},
            {loc: [2, 3], note: 'Dependency'}
          ]}/>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          notes={'dynamic ajout de bibliothèque externes sans type<br>why?<br>interface à la main'}
          code={require('raw-loader!../assets/axios-dynamic.kt')}
          ranges={[
            {loc: [0, 0], title: 'Axios'},
            {loc: [0, 1], note: '@JsModule'},
            {loc: [1, 2], note: 'No typing 😭'},
            {loc: [8, 9], note: 'componentDidMount'},
            {loc: [9, 10], note: 'fetch data'},
            {loc: [10, 13], note: 'update state'},
            {loc: [13, 15], note: 'catch error'},
            {loc: [3, 6], note: 'state'},
            {loc: [7, 18]}
          ]}/>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          notes={'à la main, long, laborieux...'}
          code={require('raw-loader!../assets/axios-interface.kt')}
          ranges={[
            {loc: [0, 0], title: 'Axios typed, manually'},
            {loc: [1, 2]},
            {loc: [10, 14], note: '⚠️ definedExternally'},
            {loc: [7, 9]},
            {loc: [3, 6]}
          ]}/>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="bash"
          notes={'ts2kt<br>génère un fichier Kotlin à partir d\'une définition TS<br><ol><li>renommer</li><li>ajout @JsModule</li><li>Suppression default</li><li>Error vs Kotlin Error</li></ol>'}
          code={require('raw-loader!../assets/axios-ts2kt.sh')}
          ranges={[
            {loc: [0, 0], title: 'Axios typed, using ts2kt'},
            {loc: [2, 3], note: 'ts2kt v0.1.3'}
          ]}/>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          code={require('raw-loader!../assets/axios-types.kt')}
          ranges={[
            {loc: [0, 0], title: 'Axios typed, using ts2kt'},
            {loc: [17, 19]},
            {loc: [2, 3]},
            {loc: [3, 4]},
            {loc: [0, 1]}
          ]}/>
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
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="bash"
          code={require('raw-loader!../assets/coroutine-npm.sh')}
          ranges={[
            {loc: [0, 0], title: 'Coroutines'},
            {loc: [2, 3]}
          ]}/>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          notes={'launch builder coroutine + context<br>pas de then() ou catch()<br>pas de promise, directement le résultat<br>job regroupe les coroutines du scope'}
          code={require('raw-loader!../assets/coroutine-axios.kt')}
          ranges={[
            {loc: [0, 0], title: 'Coroutines'},
            {loc: [0, 2], note: 'scope'},
            {loc: [6, 7]},
            {loc: [5, 12]},
            {loc: [17, 18], note: 'suspend'},
            {loc: [17, 19], note: 'await'},
            {loc: [3, 4], note: 'job'},
            {loc: [14, 15]},
            {loc: [13, 16]}
          ]}/>
        <Slide>
          <List>
            <ListItem>React in Kotlin</ListItem>
            <ListItem>Libraries with typing</ListItem>
            <ListItem>Clean async with coroutines</ListItem>
          </List>
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
        <SexyCodeSlide
          bgColor={'primary'}
          lang="bash"
          code={require('raw-loader!../assets/firebase-hosting.sh')}
          ranges={[
            {loc: [0, 0], title: 'Get Firebase working'},
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
            available wrappers
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
          <Heading size={3} textColor="tertiary">
            Let's build our next React app in Kotlin?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps textColor="secondary">
            Fits for prototyping?
          </Heading>
          <Heading textColor="tertiary" size={3}>
            Only if material-ui works, does it?
          </Heading>
        </Slide>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="bash"
          notes={'no ts2kt code incomplet, wrapper open source en dev, à la main'}
          code={require('raw-loader!../assets/material-ui-npm.sh')}
          ranges={[
            {loc: [0, 0], title: 'material-ui'},
            {loc: [2, 3]}
          ]}/>
        <WideSexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          notes={'définition des props, import du module et du composant par défaut'}
          code={require('raw-loader!../assets/material-ui-snackbar.kt')}
          ranges={[
            {loc: [0, 0], title: 'Snackbar'},
            {loc: [0, 1], note: 'JsModule'},
            {loc: [0, 2], note: 'module'},
            {loc: [2, 4], note: 'default export'},
            {loc: [5, 10], note: 'props'},
            {loc: [11, 12], note: 'class component'},
            {loc: [13, 20], note: 'use imported component'},
            {loc: [23, 26]},
            {loc: [26, 29]}
          ]}/>
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
            {loc: [0, 0], title: 'Kotlin with style 💃'},
            {loc: [2, 3]},
            {loc: [4, 5]}
          ]}/>
        <SexyCodeSlide
          bgColor={'primary'}
          lang="kotlin"
          notes={'la plupart des props CSS existent, sinon ajout à la main put("key","val")<br>possible créer feuille de style et ainsi utiliser :hover<br>'}
          code={require('raw-loader!../assets/styled.kt')}
          ranges={[
            {loc: [0, 0], title: 'Kotlin with style 💃'},
            {loc: [4, 5]},
            {loc: [6, 7]},
            {loc: [8, 9]},
            {loc: [5, 12]},
            {loc: [0, 3]}
          ]}/>
      </Deck>
    );
  }
}
