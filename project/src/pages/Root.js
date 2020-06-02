import React from 'react'
import { 
    BrowserRouter as Router, 
    Switch,
    Route
 } from 'react-router-dom'

 import Search from './Promotion/Search/Search'
 import Form from './Promotion/Form/Form'

function Root() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/create" component={Form}/>
                    <Route path="/edit/:id" component={Form}/>
                    <Route path="/" component={Search}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Root
