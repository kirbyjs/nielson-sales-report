// Created by kirby15 on 2/1/18.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import RootStore from './mobx/root-store';
import InjectedApp from './injected-components/app';
import '../sass/main.scss';

ReactDOM.render(
    <Provider rootStore={new RootStore()}>
        <InjectedApp />
    </Provider>,
    document.getElementById('root')
);
