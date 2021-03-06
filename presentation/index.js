// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  mvvm:      require('../assets/mvvm.png').replace('/', ''),
  redux:     require('../assets/redux-flow.png').replace('/', ''),
  spaghetti: require('../assets/spaghetti.jpg').replace('/', ''),
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
  code: {
    backgroundColor: '#333',
    display:         'inline-block',
    margin:          '0 auto',
    maxWidth:        'inherit',
    minWidth:        'inherit',
  },
  image: {
    maxHeight: '80%',
    maxWidth:  '80%',
  }
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
            <Text size={1} fit textColor='secondary' textFont='secondary' textSize='1em' margin='4em 0em 0em'>Lisbon WordPress Meetup &middot; June 6, 2016</Text>
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
            <Image src={images.mvvm} style={style.image} />
          </Slide>

          <Slide>
            <Heading size={1} caps fit>
              React components
            </Heading>
            <Heading size={2} caps fit>
              are <u>almost</u> like MV* views
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} caps>
              React Component Philosophy
            </Heading>
            <List>
              <ListItem>Self-contained building blocks</ListItem>
              <ListItem>Declarative approach</ListItem>
              <ListItem>Components are affected only by their properties</ListItem>
              <ListItem>Prevent unnecessary DOM updates</ListItem>
            </List>
          </Slide>

          <Slide bgColor='secondary'>
            <Heading size={5} textColor='primary' caps margin='0 auto 3rem'>
              Component
            </Heading>
            <CodePane
              lang='jsx'
              source={require('raw!../assets/component.example')}
              style={style.code}
              textSize='1rem'
            />
          </Slide>

          <Slide>
            <Heading size={4} caps>
              <code>render()</code>
            </Heading>
            <List>
              <ListItem>Does <u>not</u> return a string</ListItem>
              <ListItem>Does <u>not</u> return a DOM node</ListItem>
              <ListItem>Returns a lightweight Virtual DOM representation</ListItem>
              <ListItem>Document updates only where the VDOM changes</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={4} caps>
              Component Lifecycle
            </Heading>
            <Heading size={5} margin='2rem 0 0'>
              Creation
            </Heading>
            <List>
              <ListItem><code>componentWillMount</code></ListItem>
              <ListItem><code>componentDidMount</code> (set timers, AJAX, etc.)</ListItem>
            </List>
            <Heading size={5} margin='2rem 0 0'>
              Destruction
            </Heading>
            <List>
              <ListItem><code>componentWillUnmount</code>  (unset timers, etc.)</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={4} caps>
              Component Lifecycle
            </Heading>
            <Heading size={5} margin='2rem 0 0'>
              Updates
            </Heading>
            <List>
              <ListItem><code>componentWillReceiveProps</code></ListItem>
              <ListItem><code>shouldComponentUpdate</code></ListItem>
              <ListItem><code>componentWillUpdate</code></ListItem>
              <ListItem><code>componentDidUpdate</code></ListItem>
            </List>
          </Slide>

          <Slide>
            <Text>But JSX is weird!</Text>
          </Slide>

          <Slide bgColor='secondary'>
            <Heading size={5} textColor='primary' caps margin='0 auto 3rem'>
              JSX is Optional
            </Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang='jsx'
                  source={require('raw!../assets/component.example')}
                  style={style.code}
                  textSize='1rem'
                />
              </Fill>
              <Fill>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/component-no-jsx.example')}
                  style={style.code}
                  textSize='1rem'
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Text>But CSS in JS is weird!</Text>
          </Slide>

          <Slide bgColor='secondary'>
            <Heading size={5} textColor='primary' caps margin='0 auto 3rem'>
              CSS in JS is Optional
            </Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang='jsx'
                  source={require('raw!../assets/component-styles-inline.example')}
                  style={style.code}
                  textSize='1rem'
                />
              </Fill>
              <Fill>
                <CodePane
                  lang='jsx'
                  source={require('raw!../assets/component-styles-module.example')}
                  style={style.code}
                  textSize='1rem'
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading size={2} fit caps>
              To split HTML, JS & CSS
            </Heading>
            <Heading size={2} fit caps>
              in React is not separating
            </Heading>
            <Heading size={1} fit caps>
              concerns
            </Heading>
            <Heading size={2} fit caps>
              Only separating technologies.
            </Heading>
          </Slide>

          <Slide>
            <Image src={images.mvvm} style={style.image} />
          </Slide>

          <Slide bgImage={images.spaghetti} bgDarken={0} />

          <Slide>
            <Heading size={1} caps fit>
              Redux
            </Heading>
          </Slide>

          <Slide>
            <Image src={images.redux} style={style.image} />
          </Slide>

          <Slide>
            <Heading size={2} caps fit>
              Containers
            </Heading>
            <Heading size={1} caps>
              vs.
            </Heading>
            <Heading size={2} caps fit>
              Presentational
            </Heading>
            <Heading size={2} caps fit>
              Components
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} caps>
              "Smart" Container Components
            </Heading>
            <List>
              <ListItem>Concerned with <u>how things work</u></ListItem>
              <ListItem>Top-level, contain only other components...</ListItem>
              <ListItem>...and usually render no markup themselves</ListItem>
              <ListItem>Able to dispatch Redux actions directly</ListItem>
              <ListItem>Provide data and callbacks to child components</ListItem>
            </List>
          </Slide>

          <Slide bgColor='secondary'>
            <Heading size={5} textColor='primary' caps margin='0 auto 3rem'>
              "Smart" Container Component
            </Heading>
            <CodePane
              lang='jsx'
              source={require('raw!../assets/component-smart.example')}
              style={style.code}
              textSize='1rem'
            />
          </Slide>

          <Slide>
            <Heading size={4} caps>
              "Dumb" Presentational Components
            </Heading>
            <List>
              <ListItem>Concerned with <u>how things look</u></ListItem>
              <ListItem>Best defined using functions</ListItem>
              <ListItem>Rarely hold state or manipulate data</ListItem>
              <ListItem>Independent from app architecture</ListItem>
              <ListItem>Callbacks received via <code>props</code> if necessary</ListItem>
              <ListItem>Allow containment with <code>props.children</code></ListItem>
            </List>
          </Slide>

          <Slide bgColor='secondary'>
            <Heading size={5} textColor='primary' caps margin='0 auto 3rem'>
              "Dumb" Presentational Component
            </Heading>
            <CodePane
              lang='jsx'
              source={require('raw!../assets/component-dumb.example')}
              style={style.code}
              textSize='1rem'
            />
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
                  style={style.code}
                  textSize='1rem'
                />
              </Fill>
              <Fill>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/action-error.example')}
                  style={style.code}
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
                  style={style.code}
                  textSize='1rem'
                />
              </Fill>
              <Fill>
                <CodePane
                  lang='js'
                  source={require('raw!../assets/action-creator-error.example')}
                  style={style.code}
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
              Thunk
            </Heading>
            <CodePane
              lang='js'
              source={require('raw!../assets/redux-thunk.example')}
              style={style.code}
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
              Saga
            </Heading>
            <CodePane
              lang='js'
              source={require('raw!../assets/redux-saga.example')}
              style={style.code}
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
              Reducer
            </Heading>
            <CodePane
              lang='js'
              source={require('raw!../assets/reducer.example')}
              style={style.code}
              textSize='1rem'
            />
          </Slide>

          <Slide>
            <Heading size={4} caps>
              Reducers
            </Heading>
            <List>
              <ListItem>Multiple reducers allowed (and encouraged)</ListItem>
              <ListItem>Each reducer handles a different branch of app state</ListItem>
              <ListItem><u>New</u> state objects are created on update</ListItem>
              <ListItem>This matters because <u>determinism</u></ListItem>
            </List>
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
            <Heading size={4} caps>
              Store
            </Heading>
            <List>
              <ListItem>Holds application state</ListItem>
              <ListItem>Anyone can read state and subscribe to updates</ListItem>
              <ListItem>Middleware integrates with the store</ListItem>
              <ListItem>Can only be updated by dispatching actions</ListItem>
              <ListItem>There is <u>only one</u> store</ListItem>
            </List>
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
            <Image src={images.redux} style={style.image} />
          </Slide>

          <Slide>
            <Text>Problem</Text>
          </Slide>

          <Slide>
            <Heading size={2} fit>
              <code>shouldComponentUpdate()</code>
            </Heading>
            <Heading size={1} caps fit>
              Can Be Slow
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
                  style={style.code}
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
                  style={style.code}
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
              <Appear><ListItem>Hot reloading and time-travelling debugger!</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={4} caps>
              Cons
            </Heading>
            <List>
              <Appear><ListItem>Complex ecosystem, tons of modules</ListItem></Appear>
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

        </Deck>
      </Spectacle>
    );
  }
}
