import React from 'react';
import { AppProps } from 'next/app';
import {useEffect} from 'react'
import Entry from '@dependent/entry'

const App = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() =>{
    console.log('App Started!');
  })
  return (
    <Entry Component={Component} pageProps={pageProps} router={router}/>
  );
};

export default App;
