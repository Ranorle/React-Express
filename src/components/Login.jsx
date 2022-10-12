import * as React from 'react';
import styles from '../App.scss';
import {UserOutlined, LockOutlined,MailOutlined} from '@ant-design/icons';
import {Input} from 'antd';
import {Button} from 'antd';
import { Carousel } from 'antd';
import {useState} from "react";
import img1 from '../pictures/101779848_p0_master1200.jpg'
import img2 from '../pictures/93364704_p0.png'
import img3 from '../pictures/97502717_p0.jpg'
import img4 from '../pictures/101780548_p0_master1200.jpg'
//登录区域
const DisplayDiv=()=>{return<div className={styles.DisplayDiv}>
<Carousel autoplay={true}>
    <div>
        <img src={img1}/>
    </div>
    <div>
        <img src={img2}/>
    </div>
    <div>
        <img src={img3}/>
    </div>
    <div>
        <img src={img4}/>
    </div>
</Carousel>
</div>}
const LoginContent=(props)=>{
    return<div className={styles.LoginContent}>
        <div className={styles.WelcomeDivCN}>
            <span className={styles.WelcomeCN}>欢迎</span>
        </div>
        <div className={styles.WelcomeDivEN}>
            <span className={styles.WelcomeEN}>Welcome to Ranorle's Blog!</span>
        </div>
        <div className={styles.Input}>
            <Input size="large" placeholder="username" prefix={<UserOutlined/>}/>
        </div>
        <div className={styles.Input}>
            <Input size="large" placeholder="password" prefix={<LockOutlined/>}/>
        </div>
        <div className={styles.forgetpsDiv}>
            <Button type='link' size='small' onClick={()=>{
                props.setstate(2)
            }
            }>忘记密码？</Button>
        </div>
        <div className={styles.ButtonDiv}>
            <Button className={styles.spButton} type='default' shape='round' block onClick={()=>{
                props.setstate(1)
            }}>注册</Button>
            <Button className={styles.siButton} type='primary' shape='round' block>登录</Button>
        </div>
    </div>
}
//注册区域
const RegContent=(props)=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    return<div className={styles.RegContent}>
        <div className={styles.WelcomeDivCN}>
            <span className={styles.WelcomeCN}>注册账号</span>
        </div>
        <div className={styles.WelcomeDivEN}>
            <span className={styles.WelcomeEN}>Welcome to Ranorle's Blog!</span>
        </div>
        <div className={styles.Input}>
            <Input size="large" placeholder="请输入你的邮箱" prefix={<MailOutlined/>}/>
        </div>
        <div className={styles.Input}>
            <Input size="large" placeholder="请输入你的用户名" prefix={<UserOutlined/>}/>
        </div>
        <div className={styles.Input}>
            <Input.Password size="large" placeholder="password" prefix={<LockOutlined/>}/>
        </div>
        <div className={styles.Input}>
            <Input.Password size="large" placeholder="确认你的密码" prefix={<LockOutlined/>}/>
        </div>
        {/*<div className={styles.Input}>*/}
        {/*    <Input.Password size="large" placeholder="输入验证码" prefix={<LockOutlined/>}/>*/}

        {/*</div>*/}
    {/*    <Vertify*/}
    {/*    width={320}*/}
    {/*    height={160}*/}
    {/*    onSuccess={() => alert('success')}*/}
    {/*    onFail={() => alert('fail')}*/}
    {/*    onRefresh={() => alert('refresh')}*/}
    {/*/>*/}
        <div className={styles.ButtonDiv}>
            <Button className={styles.spButton} type='default' shape='round' block onClick={()=>{
                props.setstate(0)
            }
            }>
        返回登录</Button>
            <Button className={styles.siButton} type='primary' shape='round' block>确认注册</Button>
        </div>
    </div>
}
//忘记密码
const ForgetDiv=(props)=>{
    return<div className={styles.ForgetContent}>
        <div className={styles.WelcomeDivCN}>
            <span className={styles.WelcomeCN}>忘记密码啦？^_^</span>
        </div>
        <div className={styles.Input}>
            <Input className={styles.ForgetIp} size="large" placeholder="输入注册邮箱" prefix={<UserOutlined/>}/>
        </div>
        <div className={styles.Input}>
            <Input className={styles.ForgetIp} size="large" placeholder="输入验证码" prefix={<UserOutlined/>}/>
        </div>
        <div className={styles.foButtonDiv}>
            <Button className={styles.foButton} type='primary' shape='round' block>发送验证码以重置</Button>
        </div>
        <div className={styles.foButtonDiv}>
            <Button className={styles.foButton} type='default' shape='round' block onClick={()=>{
            props.setstate(0)
            }
            }>返回</Button>
        </div>
    </div>
}
export const LoginDiv = () => {
    const [state,setstate]=useState(0)
    if(state===0)return <div className={styles.LoginWindow}>
        <DisplayDiv/>
        <LoginContent state={state} setstate={setstate}/>
    </div>
    if(state===1)return <div className={styles.LoginWindow}>
        <DisplayDiv/>
        <RegContent state={state} setstate={setstate}/>
    </div>
    if(state===2)return <div className={styles.LoginWindow}>
        <DisplayDiv/>
        <ForgetDiv state={state} setstate={setstate}/>
    </div>
}
