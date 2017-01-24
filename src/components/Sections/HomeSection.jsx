import React from 'react';
import Container from './_Container';


const styles = {
  containerStyle : {
    height: '100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'column',
    color:'white',
    padding:20,
    textAlign:'center'
  },
  backgroundStyle:{
    backgroundImage: 'url(/img/bg-homesection.jpg)',
    backgroundSize: 'cover'
  },
  input:{
    width:150,
    height:30,
    marginBottom:10,
    borderRadius:10
  }
}


class HomeSection extends React.Component {

  render() {
    return (
      <Container
        backgroundStyle = {styles.backgroundStyle}
        containerStyle= {styles.containerStyle}>

        <h1 style={{color:'black'}}> Nom de la Marque </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <input style={styles.input} type='text' placeholder='Entrer votre mail'/>
        <button> {"S'abonner"} </button>



      </Container>
    );
  }

}

export default HomeSection;
