import * as React from 'react';
import styles from '../App.scss';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { Input } from 'antd';
export const LoginDiv=()=>{
    return <div className={styles.LoginWindow}>
        <div>
            <span className={styles.Welcome}>Welcome!</span>
        </div>
        <div className={styles.Input}>
        <Input  placeholder="username" prefix={<UserOutlined />}/>
        </div>
        <div className={styles.Input}>
        <Input  placeholder="password" prefix={<LockOutlined />}/>
        </div>
    </div>
}