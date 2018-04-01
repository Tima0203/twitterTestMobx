import React from 'react'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react'
import { Form } from 'semantic-ui-react'

@observer(["state"]) // Only required if you use or change the state outside
export default class NewTweet extends React.Component {

    @observable title = ''
    @observable text = ''
    @observable message = false

  handleChange = (field) => (event, data) => {
    this[field] = data.value 
  }

  handlePostTweet = (newTitle, newText) => () => {
      const newTweet = {title: newTitle, text: newText}
    this.props.state.tweets.push(newTweet)
    alert("Tweet has been posted")
    this.title = ''
    this.text = ''
  }

    render() {
        return <div>
            <h1>Something to share?</h1>
            <Form>
                <Form.Input placeholder='Title' label='Title' value={ this.title } onChange={ this.handleChange('title')}/>
                <Form.Input placeholder='Text' label='Text' value={ this.text } onChange={ this.handleChange('text')}/>
                <Form.Button onClick={this.handlePostTweet(this.title, this.text)}>Post Tweet</Form.Button>
            </Form>            
        </div>
    }
}