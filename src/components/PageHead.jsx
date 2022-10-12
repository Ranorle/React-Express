import * as React from 'react';
import styles from '../App.scss';
export const PageHead=()=>{
    return <div className={styles.PageheadDiv}>
        <div className={styles.Tabs}>
            <span>博文</span>
        </div>
        <div className={styles.Tabs}>
            <span>游戏</span>
        </div>
        <div className={styles.Tabs}>
            <span>阅读</span>
        </div>
        <div className={styles.Tabs}>
            <span>番剧</span>
        </div>
        <div className={styles.Tabs}>
            <span>登录</span>
        </div>
    </div>
}