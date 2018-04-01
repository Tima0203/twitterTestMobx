import React from 'react'
import { observer } from 'mobx-react'
import Link from 'react-router/lib/Link'
import { Menu, Button } from 'semantic-ui-react'
import MenuItem from 'semantic-ui-react';

@observer(["state", "actions"])
export default class Navigation extends React.Component {

    handleClick = () => {
        this.props.actions.toggleLogin(this.props.state)
        console.log(this.props.state.logedin)
    }

    render() { 
        // const menuNodes = this.props.data.map((item, i) => (
        //     <Link key={i} 
        //             to={this.props.prefix + item.path}  
        //             className={this.props.current===item.path ? "active":null} 
        //             onlyActiveOnIndex={item.path===''}  
        //             activeClassName={"active"} >
        //     {item.title}
        //     </Link>
        // ))

        return (
        <div>
            {this.props.data.map((item, i) => (
                <Button key={i} color='twitter' as={Link} to={this.props.prefix + item.path} >{item.title}</Button>
            ))}
            <Button as={Link} to='/' color='google plus' onClick={this.handleClick}>Log Out</Button>
        </div>)
    }
}