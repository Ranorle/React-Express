import './App.scss';
import * as React from 'react';
import styles from './App.scss';
import {LoginDiv} from './components/Login'
// import {Link,Routes,Route} from "react-router-dom";
export function App() {
    return <div id={'app'}>
        <div className={styles.Background}>
        <LoginDiv/>
        </div>
        </div>;
}
export default App;