// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom component
import Interactive from '../assets/interactive';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  city:     require('../assets/city.jpg').replace('/', ''),
  kat:      require('../assets/kat.png').replace('/', ''),
  logo:     require('../assets/formidable-logo.svg').replace('/', ''),
  markdown: require('../assets/markdown.png').replace('/', ''),
};

preloader(images);

const theme = createTheme({
  primary:    '#fafafa',
  secondary:  '#333',
  tertiary:   '#be9d31',
  quartenary: '#333',
}, {
  primary:   'Alegreya Sans',
  secondary: 'Alegreya',
  tertiary:  'Source Sans Pro',
});

const style = {
  codePane: {
    backgroundColor: '#333',
    display:         'inline-block',
    margin:          '0 auto',
    maxWidth:        'inherit',
    minWidth:        'inherit',
  },
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} transitionDuration={500}>

          <Slide>
            <Heading size={1} caps fit lineHeight={1} textColor='secondary'>
              React + Redux
            </Heading>
            <Heading size={1} fit>
              Using the WordPress REST API
            </Heading>
            <Text size={1} fit textColor='secondary' textFont='secondary' textSize='1em' margin='4em 0em 0em'>WordPress Lisbon Meetup &middot; June 6, 2016</Text>
          </Slide>

          <Slide notes='The story up till now...'>
            <Heading size={3} caps fit margin='0' padding='0' textColor='#999'>
              MV*
            </Heading>
            <Heading size={3} caps fit margin='0' padding='0' textColor='#bbb'>
              (Model-View-Whatever)
            </Heading>
          </Slide>

          <Slide>
            {/*
            <Image src={images.kat} margin='0 auto 40px' />
            */}
            <Text>TODO: MV* example diagram</Text>
          </Slide>

          <Slide>
            <Text>TODO: MV* issues at scale</Text>
          </Slide>

          <Slide>
            <Text>TODO: Components</Text>
          </Slide>

          <Slide>
            <Text>TODO: Component Example</Text>
          </Slide>

          <Slide>
            <Text>TODO: Component Lifecycle</Text>
          </Slide>

          <Slide>
            <Text>TODO: React components are roughly equivalent to views</Text>
          </Slide>

          <Slide>
            <Text>TODO: But JSX is weird!</Text>
          </Slide>

          <Slide>
            <Text>TODO: But CSS in JS is weird!</Text>
          </Slide>

          <Slide>
            <Text>TODO: Redux</Text>
          </Slide>

          <Slide>
            <Text>TODO: Smart Components vs Dumb Components</Text>
          </Slide>

          <Slide>
            <Heading size={1} fit>
              Components dispatch
            </Heading>
            <Heading size={2} caps fit>
              Actions
            </Heading>
            <Heading size={1} fit>
              which are objects with a type and payload.
            </Heading>
          </Slide>

          <Slide bgColor='secondary'>
            <Heading size={5} textColor='primary' caps margin='0 auto 3rem'>
              Standard Actions
            </Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/action-success.example')}
                  style={style.codePane}
                  textSize='1rem'
                />
              </Fill>
              <Fill>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/action-error.example')}
                  style={style.codePane}
                  textSize='1rem'
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide bgColor='secondary'>
            <Heading size={5} textColor='primary' caps margin='0 auto 3rem'>
              Action Creators
            </Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/action-creator-success.example')}
                  style={style.codePane}
                  textSize='1rem'
                />
              </Fill>
              <Fill>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/action-creator-error.example')}
                  style={style.codePane}
                  textSize='1rem'
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Text>What about async actions?</Text>
          </Slide>

          <Slide>
            <Heading size={1} fit>
              Asynchronous behaviour achieved with
            </Heading>
            <Heading size={2} caps fit>
              Thunks
            </Heading>
            <Heading size={1} fit>
              A simple middleware that dispatches actions.
            </Heading>
          </Slide>

          <Slide bgColor='secondary'>
            <Heading size={5} textColor='primary' caps margin='0 auto 3rem'>
              Example Thunk
            </Heading>
            <CodePane
              lang='js'
              source={require('raw!../assets/redux-thunk.example')}
              style={style.codePane}
              textSize='1rem'
            />
          </Slide>

          <Slide>
            <Heading size={4} caps>
              Thunks
            </Heading>
            <List>
              <ListItem>Simple</ListItem>
              <ListItem>Imperative approach</ListItem>
              <ListItem>Components dispatch actions or thunks</ListItem>
              <ListItem>No way to cancel side effects</ListItem>                  
            </List>
          </Slide>

          <Slide>
            <Heading size={1} fit>
              Asynchronous behaviour also achieved with
            </Heading>
            <Heading size={2} caps fit>
              Sagas
            </Heading>
            <Heading size={1} fit>
              A middleware that dispatches <u>and orchestrates</u> actions.
            </Heading>
          </Slide>

          <Slide bgColor='secondary'>
            <Heading size={5} textColor='primary' caps margin='0 auto 3rem'>
              Example Saga
            </Heading>
            <CodePane
              lang='js'
              source={require('raw!../assets/redux-saga.example')}
              style={style.codePane}
              textSize='1rem'
            />
          </Slide>

          <Slide>
            <Heading size={4} caps>
              Sagas
            </Heading>
            <List>
              <ListItem>Rely on generators</ListItem>
              <ListItem>Declarative approach</ListItem>
              <ListItem>Components only dispatch actions</ListItem>                  
              <ListItem>Side effect orchestration</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} fit>
              Action data are fed into
            </Heading>
            <Heading size={2} caps fit>
              Reducers
            </Heading>
            <Heading size={1} fit>
              that consolidate and update app state.
            </Heading>
          </Slide>

          <Slide bgColor='secondary'>
            <Heading size={5} textColor='primary' caps margin='0 auto 3rem'>
              Example Reducer
            </Heading>
            <CodePane
              lang='js'
              source={require('raw!../assets/reducer.example')}
              style={style.codePane}
              textSize='1rem'
            />
          </Slide>

          <Slide>
            <Heading size={1} fit>
              Application state exists in a
            </Heading>
            <Heading size={2} caps fit>
              Store
            </Heading>
            <Heading size={1} fit>
              which is the single source of truth.
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit>
              Store is passed to your
            </Heading>
            <Heading size={2} caps fit>
              Components
            </Heading>
            <Heading size={1} fit>
              and the whole cycle begins anew!
            </Heading>
          </Slide>

          <Slide>
            <Text>Problem</Text>
          </Slide>

          <Slide>
            <Heading size={2} fit>
              <code>shouldComponentUpdate()</code>
            </Heading>
            <Heading size={1} caps fit>
              Is Slow
            </Heading>
            <Heading size={2} fit>
              (Blame all the deep object comparisons.)
            </Heading>
          </Slide>

          <Slide>
            <Text>Solution</Text>
          </Slide>

          <Slide>
            <Heading size={1} caps fit>
              Immutable
            </Heading>
            <Heading size={2} caps fit>
              Data Structures
            </Heading>
          </Slide>

          <Slide bgColor='secondary'>
            <Layout>
              <Fill>
                <Heading size={5} textColor='primary' caps margin='0 auto 3rem'>
                  Before
                </Heading>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/immutable-before.example')}
                  style={style.codePane}
                  textSize='1rem'
                />
              </Fill>
              <Fill>
                <Heading size={5} textColor='primary' caps margin='0 auto 3rem'>
                  After
                </Heading>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/immutable-after.example')}
                  style={style.codePane}
                  textSize='1rem'
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading size={4} caps>
              Stop worrying about...
            </Heading>
            <List>
              <Appear><ListItem>Comparing state</ListItem></Appear>
              <Appear><ListItem>Concurrent data access</ListItem></Appear>
              <Appear><ListItem>Unexpected changes</ListItem></Appear>
              <Appear><ListItem>Inconsistent application state</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={2} caps fit>
              Time Travel!
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} caps>
              Pros
            </Heading>
            <List>
              <Appear><ListItem>Deterministic application state</ListItem></Appear>
              <Appear><ListItem>Mostly declarative, highly reusable components</ListItem></Appear>
              <Appear><ListItem>Rendering performance</ListItem></Appear>
              <Appear><ListItem>Porting to React Native is easy</ListItem></Appear>
              <Appear><ListItem>Time travelling debugger!</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={4} caps>
              Cons
            </Heading>
            <List>
              <Appear><ListItem>Complex ecosystem</ListItem></Appear>
              <Appear><ListItem>Server-side rendering requires Node</ListItem></Appear>
              <Appear><ListItem>Most WordPress plugins won't work</ListItem></Appear>
              <Appear><ListItem>Bloaty inline styles (but you don't have to use them!)</ListItem></Appear>
              <Appear><ListItem>Async actions can be tricky to manage</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} textSize='3rem' caps margin='0 auto 3rem' textColor='tertiary'>
              Thank You
            </Heading>
            <Text size={1} textSize='1em'>
              <Link href='https://goblindegook.com/'>goblindegook.com</Link>
            </Text>
          </Slide>

          {/*

          <Slide bgImage={images.city} bgDarken={0.50}>
            <Appear fid='1'>
              <Heading size={1} caps fit textColor='primary'>
                Full Width
              </Heading>
            </Appear>
            <Appear fid='2'>
              <Heading size={1} caps fit textColor='tertiary'>
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid='3'>
              <Heading size={1} caps fit textColor='primary'>
                Background Imagery
              </Heading>
            </Appear>
          </Slide>

          <Slide>
            <Heading size={1} caps fit textColor='tertiary'>
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>

          */}

        </Deck>
      </Spectacle>
    );
  }
}
