// import React from 'react'
// import { HashRouter as Router, Switch, Route } from 'react-router-dom'
// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route></Route>
//       </Switch>
//     </Router>
//   )
// }
// export default App;


import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store'


import Longin from './pages/Login'
import Register from './pages/Register'
import BaseLayout from './layouts/BaseLayout'
import PrivateRoute from './utils/PrivateRoute'

const App = () => {
  return (
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route path="/login" component={ Longin }></Route>
          <Route path="/register" component={ Register }></Route>
          <PrivateRoute path="/" component={ BaseLayout }></PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
