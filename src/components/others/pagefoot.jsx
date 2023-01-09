import * as React from 'react';
import styles from '../../App.scss';
import beianimg from '../../pictures/beianimg.png';
export const Pagefoot=()=>{
    return<div className={styles.pagefootinfo}>
        <div className={styles.beian}>
            <a href="https://beian.miit.gov.cn/#/Integrated/index"><p>京ICP备2022029720号-1 | </p></a><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802040838"><img src={beianimg}/><p>京公网安备 11010802040838号</p></a>
        </div>
    </div>
}