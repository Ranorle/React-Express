import * as React from 'react';
import styles from '../../App.scss';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
const markdown =`## 可选链
+ 有些时候，我们需要在调用属性或方法不存在时返回undefined而非报错，此时可用可选链——"?."
?.会检查左侧是否为null/undefined，如果不是则继续运算，否则就返回undefined;

~~~
let player = {
    name: 'Alice',  
}
console.log(player?.birthday?.month); // undefined
~~~
## 类型转换
+ "+"等同于"Number()"的作用；
+ "!!"可以发挥"Boolean()"的作用；
~~~
let a = '2';
let b = '4';
console.log(+a * +b);  // 8
console.log(!! null);  // false
console.log(!! a);     // true
~~~
## 数值提取
+ "parseInt"和"parseFloat"可以从字符串开头读取数字
~~~
console.log(parseInt('100'));        // 100
console.log(parseInt('100px'));      // 100
console.log(parseFloat('12.5em'));   // 12.5

console.log(parseInt('a12345'));     // NaN
console.log(parseFloat('XYZ14.6'));  // NaN
~~~
## 数组合并
+ "apply"方法将两个数组合并
+ "push"方法对数组进行扩充
~~~
const a=[1,2,3,4,5]
const b=[6,7]
a.push.apply(a,b) // a=[1,2,3,4,5,6,7]
~~~
+ 此外还有es6的语法可以使用
~~~
let a = [1, 7, 4, 9, 6, 1];
let b = [2, 1];
c = [...a, ...b]; // 生成一个新的数组
a.push(...b);     // 直接在原数组进行操作
~~~
`
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('前端技术', 'sub1', <MailOutlined />, [
        getItem('Js的一些语法糖', null, null,  )
    ]),
    getItem('后端技术', 'sub2', <AppstoreOutlined />),
    getItem('其他', 'sub4', <SettingOutlined />),
];
const onClick = (e) => {
    console.log('click', e);
};

export const MeanDiv=()=>{
    return <div className={styles.Menudiv}>
        <div className={styles.Menutitle}><span>文章索引</span></div>
        <Menu
            onClick={onClick}
            style={{
                width: 256,
            }}
            mode="vertical"
            items={items}
        />
    </div>
    // return <div className={styles.Navigationdiv}>
    //     <div className="navigation">
    //         <MarkdownNavbar source={markdown} />
    //     </div>
    // </div>

}