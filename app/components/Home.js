// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import FaDatabase from 'react-icons/lib/fa/database';

// Set Home Page and Navigation Links
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Shawmut Enterprise Query</h2>
          	<Link to="/counter"><FaDatabase /></Link>
        </div>
      </div>
    );
  }
}
