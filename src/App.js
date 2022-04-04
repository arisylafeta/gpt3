import React from 'react'
import './App.css'

import { Footer, Blog, Possibility, Feautes, WhatGPT3, Header } from './containers';
import {CTA, Brand, Navbar} from './components';

const App = () => {
    return(
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />    
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}