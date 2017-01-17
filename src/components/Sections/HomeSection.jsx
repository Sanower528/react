import React from 'react';
import Container from './_Container';


const styles = {
  containerStyle : {
    height: '100vh'
  },
  backgroundStyle:{
    backgroundImage: 'url(/img/bg-homesection.jpg)',
    backgroundSize: 'cover'
  }
}

class HomeSection extends React.Component {

  render() {
    return (
      <Container
        backgroundStyle= {styles.backgroundStyle}
        containerStyle= {styles.containerStyle}>

        <h1> Home section </h1>

      </Container>
    );
  }

}

export default HomeSection;
