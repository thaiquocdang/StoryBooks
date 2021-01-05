import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './components/Homepage'
import Login from './components/Login'
import './App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Homepage} exact></Route>
        <Route path='/login' component={Login} exact></Route>
      </Switch>
    </Router>
  )
}

export default App
