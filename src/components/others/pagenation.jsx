import { Pagination } from 'antd';
import React from 'react';
import styles from '../../App.scss';

export const Pagenation = () => {
    return <div className={styles.paginationinfo}>
        <Pagination
            size="default"
            total={1}
            showSizeChanger
        />
    </div>
}