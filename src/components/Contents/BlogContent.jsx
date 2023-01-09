import * as React from 'react';
import styles from '../../App.scss';
import {Pagenation} from "../others/pagenation";
import pic1 from "../../pictures/es6.jpeg";
import {Route, Routes,Link} from 'react-router-dom';
import {MarkdownContent} from "./MarkdownContent";

const BlogCards = () => {
    return <Link className={styles.CardDivs} to='js-es6'>
        <div className={styles.CardImg}>
            <img className={styles.BlogImg} src={pic1}></img>
        </div>
        <div className={styles.CardInfo}>
            <div className={styles.CardTitle}><span>Js的一些语法糖</span></div>
            <div className={styles.CardInfomin}>
                <div className={styles.CardComment}>一些js的语法糖归纳和整理</div>
                <div className={styles.CardInfodet}>2022-10-20</div>
            </div>
        </div>
    </Link>
}
const ContentCards=()=>{
    return<div className={styles.BlogContentDiv}>
        <div className={styles.carddivs}>
            <BlogCards/>
        </div>
        <div className={styles.pagination}>
            <Pagenation/>
        </div>
    </div>
}
export const ContentMd=()=>{
    return<div className={styles.BlogContentDiv}>
        <MarkdownContent/>
    </div>
}
export const BlogContentDiv = () => {
    return <Routes>
        <Route path="" element={<ContentCards/>}/>
    </Routes>
    // return <div className={styles.BlogContentDiv}>
    //     <MarkdownContent/>
    // </div>
}
