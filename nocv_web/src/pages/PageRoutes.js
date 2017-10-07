import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Start } from './Start'
import { ProfileCreation } from './ProfileCreation'
import { Login } from './Login'
import { Field } from './Field'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export const PageRoutes = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Start}/>
        <Route path='/login' component={Login}/>
        <Route path='/field' component={Field}/>
        <Route path='/profile' component={ProfileCreation}/>
    </Switch>
  </main>
)
