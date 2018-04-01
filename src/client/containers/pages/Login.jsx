import React from 'react'
import { action, observable } from 'mobx'
import { Input, Button, Form, Icon } from 'semantic-ui-react'
import { Link } from 'react-router'
import { observer } from 'mobx-react'

@observer(["state", "actions"]) // Only required if you use or change the state outside
export default class Login extends React.Component {
    @observable username = ''
    @observable password = ''
    @observable path = '/'

  handleChange = (field) => (event, data) => {
    this[field] = data.value
    this.username && this.password &&  (this.path = '/tweets')
  }

    handleClick = () => () => {
        if (this.username && this.password) {
            // this.path = '/tweets'
            this.props.actions.toggleLogin(this.props.state)
            
        }
        console.log(this.props.state.logedin, this.path)
    }

    render() {
        return (
            <div>
                <Icon name='twitter' size='massive'/>
                <Form>
                <h1>Who are You?</h1>
                <Form.Input placeholder='Username' label='Username' value={ this.username } onChange={ this.handleChange('username')}/>
                <Form.Input placeholder='Password' label='Password' value={ this.password } onChange={ this.handleChange('password')}/>
                <Form.Field><Button as={Link} to={this.path} onClick={this.handleClick()}>Log In</Button></Form.Field>
                {console.log(this.path)}
                </Form>
            </div>
        )
    }
}