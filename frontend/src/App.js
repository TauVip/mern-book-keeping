import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import AddBook from './components/Books/AddBook'
import Books from './components/Books/Books'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from './components/users/LoginUser'
import RegisterUser from './components/users/RegisterUser'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/books' component={Books} />
          <Route exact path='/addbook' component={AddBook} />
          <Route exact path='/register' component={RegisterUser} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default App
