import React from 'react'
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


import BaseLayout from './layout/index'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ BaseLayout }></Route>
      </Switch>
    </Router>
  )
}

export default App
