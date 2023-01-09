import * as React from 'react';
import ReactMarkdown from 'react-markdown'
import styles from '../../App.scss';
import remarkGfm from 'remark-gfm'
import 'github-markdown-css'
import { Tag } from 'antd';
import markdown from '../../MarkDown/js-es6.md'
export const MarkdownContent=()=>{
    return <div className={styles.MarkdownBorder}>
        <div className={styles.MarkdownTitle}>
            <span className={styles.TopTitle}>Js的一些语法糖</span>
            <hr />
            <div><span>作者:Ranorle</span></div>
            <div><span>标签:</span><Tag>前端</Tag><Tag>JavaScript</Tag></div>
            <div><span>发布日期:2022-10-20</span></div>
            <hr />
        </div>
    <div className="markdown-body" style={{ backgroundColor: 'white' }}>
    <ReactMarkdown  className={styles.MarkdownContent} remarkPlugins={[remarkGfm]} children={markdown}/>
    </div>
        </div>
}