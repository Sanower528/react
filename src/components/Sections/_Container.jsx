import React from 'react';

const styles = {
  defaultContainer : {
    border: '2px dashed red',
    margin: 'auto'
  }
}

class Container extends React.Component {

  render() {

    return (
      <div className='row' style={this.props.backgroundStyle}>

        <div
          className='col-xs-12 col-sm-8 col-md-9 col-lg-8'
          style={{
            ...styles.defaultContainer,
            ...this.props.containerStyle }}>

          {this.props.children}

        </div>

      </div>
    );
  }

}

export default Container;
