import React from 'react';
import Container from './_Container';


const styles = {
  containerStyle : {
    height: '500px'
  }
}

class AdvantageSection extends React.Component {

  render() {
    return (
      <Container containerStyle={styles.containerStyle}>

        <h1> Advantage section </h1>

      </Container>
    );
  }
}

export default AdvantageSection;
