import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Repositories from './pages/Repositores';
import Home from './pages/Home';

export default function Routes() {
    return (
        // BrowserRouter é o componente principal do React Router DOM
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositories' component={Repositories}/>
            </Switch>
        </BrowserRouter>
    )
}