import * as React from 'react';
import {setNavigationObject} from '@dependent/navigation';
interface IProps {
  Component: any;
  pageProps: any;
  router: any;
}

const App = (props:IProps) : React.ReactElement=> {
  setNavigationObject();
  return (
      <props.Component {...props.pageProps} />
  );
};

export default App;
