/*
    ./src/components/App.jsx
*/
import React from 'react';
import styles from '../css/global';

export default class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Hello World</h1>
                <h2 className={styles.red}>This is our React application!</h2>
            </div>
        );
    }
}