import * as React from 'react';
import styles from '../../App.scss';
import {Pagenation} from "../others/pagenation";
import { Empty } from 'antd';

export const BangumiContent = () => {
    return <div className={styles.BlogContentDiv}>
        <div className={styles.carddivs}>
        <Empty/>
        </div>
        <div className={styles.pagination}>
            <Pagenation/>
        </div>
    </div>
}