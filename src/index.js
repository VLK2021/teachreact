import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const test = React.createElement('div', {
    id: 'test-id',
    className: 'test-class',
    onClick: () => {
        alert('Hello!')
}
}, <div>Hello world!!!</div>);


const onclick = () => {alert('Hello from castom btn!')};

const btnId = 'btn-test-id';


const CastomButton = (props) =>{
    const {id,children} = props;
    return (
        <button onClick={onclick} id={id}>{children}</button>
    );
};


const testBtn = React.createElement(CastomButton, {
id: 'btn-test-2'
    },
    'click me');



ReactDOM.render(
    testBtn,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);


