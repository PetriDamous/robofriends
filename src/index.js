import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { robots } from './robots';
let ranNum = Math.floor(Math.random() * 6);


/*
Array.prototype.shuffle = function(){
    for(i = this.length-1; i > 0; i--){
        let j = Math.floor(Math.random()*(i+1));
        let temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
    return this;
}
*/

ReactDOM.render(
    <div>
        <Card id={ robots[ranNum].id } name={robots[ranNum].name } email={ robots[ranNum].email } />
        <Card id={ robots[ranNum].id } name={ robots[ranNum].name } email={ robots[ranNum].email } />
        <Card id={ robots[ranNum].id } name={ robots[ranNum].name } email={ robots[ranNum].email } />
    </div>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
