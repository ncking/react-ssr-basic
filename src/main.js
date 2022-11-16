import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from './component/Home.jsx';

const content = (props) => renderToString(React.createElement(Home, props));


export default content
