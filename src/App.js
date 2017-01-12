import React from 'react';
import Section from './components/Section';

class App extends React.Component {

  render() {

    return (

      <div>

        <Section height={'100vh'} title='Home Section' >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Section>


        <Section height={600} title='Advantage Section' />

      </div>
    );
  }
}

export default App;
