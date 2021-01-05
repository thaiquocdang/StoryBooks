import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './components/Homepage'
import Login from './components/Login'
import UserList from './components/UserList'
import './App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Homepage} exact></Route>
        <Route path='/login' component={Login} exact></Route>
        <Route path='/userlist' component={UserList} exact></Route>
      </Switch>
    </Router>
  )
}

export default App
