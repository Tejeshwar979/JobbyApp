import {Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

const PublicRoute = props => {
  const jwtToken = Cookies.get('JwtToken')

  if (jwtToken !== undefined) {
    return <Redirect to="/Home" />
  }
  return <Route {...props} />
}

export default PublicRoute
