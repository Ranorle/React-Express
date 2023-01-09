import * as React from 'react';
import styles from '../../App.scss';
import {NavLink} from 'react-router-dom'
export const PageHead=()=>{
    return<div className={styles.FpageheadDiv}>
    <div className={styles.PageheadDiv}>
        <NavLink className={styles.Tabs} to="/">
            <span>博文</span>
        </NavLink>
        <NavLink className={styles.Tabs} to="/games">
            <span>游戏</span>
        </NavLink>
        <NavLink className={styles.Tabs} to="/passages">
            <span>阅读</span>
        </NavLink>
        <NavLink className={styles.Tabs} to="/bangumis">
            <span>番剧</span>
        </NavLink>
    </div>
        </div>
}