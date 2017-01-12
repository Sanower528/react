import React from 'react';


class Section extends React.Component {

  render() {

    const styles = {
      border: '4px dashed red',
      height: this.props.height
    }
    
    return (
      <div style={styles}>

        <h1> {this.props.title} </h1>
        {this.props.children}

      </div>
    );
  }

}

export default Section;
