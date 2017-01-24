import React from 'react';

import HomeSection from './Sections/HomeSection';
import AdvantageSection from './Sections/AdvantageSection';
import CarrouselSection from './Sections/CarrouselSection';
import GalerieSection from './Sections/GalerieSection'
import FooterSection from './Sections/FooterSection'


class App extends React.Component {

  render() {
    return (
      <div>

        <HomeSection/>
        <AdvantageSection/>
        <GalerieSection/>
        <CarrouselSection/>
        <FooterSection/>

      </div>
    );
  }
}

export default App;
