import './App.scss';
import * as React from 'react';
import styles from './App.scss';
import {PageHead} from "./components/others/PageHead";
import {MeanDiv} from "./components/others/Menu";
import {BlogContentDiv,ContentMd} from "./components/Contents/BlogContent";
import ReactLive2d from 'react-live2d';
import {Pagefoot} from "./components/others/pagefoot";
import {Route, Routes} from 'react-router-dom';
import {GamesContent} from "./components/Contents/GamesContent";
import {PassagesContent} from "./components/Contents/PassagesContent";
import {BangumiContent} from "./components/Contents/BangumiContent";

export function App() {
    return <div id={'app'}>
        <ReactLive2d width={300} height={400} top='1' left='1' right='1' ModelList={['mingshi']} menuList={[]}/>
        <div className={styles.Background}>
            <PageHead/>
            <div className={styles.ContentsDiv}>
                <MeanDiv/>
                <Routes>
                    <Route path="/" element={<BlogContentDiv/>}/>
                    <Route path="/games" element={<GamesContent/>}/>
                    <Route path="/passages" element={<PassagesContent/>}/>
                    <Route path="/bangumis" element={<BangumiContent/>}/>
                    <Route path="/js-es6" element={<ContentMd/>}/>
                </Routes>
            </div>
            <div className={styles.pagefoot}>
                <Pagefoot/>
            </div>
        </div>
    </div>;
}

export default App;