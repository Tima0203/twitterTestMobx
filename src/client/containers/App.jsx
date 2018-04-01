import React from 'react'
import { observer } from 'mobx-react'
import Navigation from '../components/Navigation.jsx'
import Login from '../containers/pages/Login.jsx'

var menuData = [
//   {title: "Browse", path:"Browse?wait=1000"}, 
//   {title: "About", path:"about"},
//   {title: "Not Found", path:"this_url_doesnt_exist"},
  {title: "Tweets", path:"tweets"},
  {title: "New Tweet", path:"new-tweet"}
]
@observer(["state", "actions"]) 
export default class App extends React.Component {
    render(){
        return (
        <div>
            {this.props.state.logedin && <Navigation prefix='/' data={menuData} /> }
            {/* <Navigation prefix='/' data={menuData} /> */}
            {this.props.children}
        </div>
        )}
}
