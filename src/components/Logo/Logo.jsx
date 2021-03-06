import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img
          src={require('./images/logo.png')}
          style={styles.logoImg}
          alt="logo"
        />
        <a href="/" style={styles.logoText}>
          猪肉溯源
        </a>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
  },
  logoImg: {
    width: '40px',
  },
  logoText: {
    display: 'block',
    maxWidth: '120px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginLeft: '10px',
    fontSize: '22px',
    color: '#f29b70',
    fontWeight: 'bold',
  },
};
