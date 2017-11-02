import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from '../components/Landing/Landing';
import Mobile from '../components/Mobile/Mobile';
import About from '../components/About/About';
import Explore from '../components/Explore/Explore';
import Idea1 from '../components/Idea1/Idea1';
import Idea2 from '../components/Idea2/Idea2';
import Idea3 from '../components/Idea3/Idea3';
import Idea4 from '../components/Idea4/Idea4';
import Share from '../components/Share/Share';
import Campaign from '../components/Campaign/Campaign';
import Donate from '../components/Donate/Donate';
import Thanks from '../components/Thanks/Thanks';


export default (
    <Switch>
        <Route component = { Landing } exact path = "/"  />
        <Route component = { Mobile } path = "/mobile" />
        <Route component = { About } path = "/about" /> 
        <Route component = { Explore } path = "/explore" />
        <Route component = { Idea1 } path = "/idea1" /> 
        <Route component = { Idea2 } path = "/idea2" /> 
        <Route component = { Idea3 } path = "/idea3" /> 
        <Route component = { Idea4 } path = "/idea4" /> 
        <Route component = { Share } path = "/share" />
        <Route component = { Campaign } path = "/campaign" />
        <Route component = { Donate } path = "/donate" />
        <Route component = { Thanks } path = "/thanks" />
    </Switch>
)