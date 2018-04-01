import React from 'react'
import { action } from 'mobx'
import { observer } from 'mobx-react'
import { Button, Input, Card, Icon } from 'semantic-ui-react'

@observer(["state"]) // Only required if you use or change the state outside fetchData
export default class Tweets extends React.Component {
    render() {
        const extra = (
            <div>
              <Icon name='twitter' />
              <Icon name='retweet' />
              <Icon name='like' />
            </div>
          )

        return <div>
            <h1>My Tweets</h1>
            {this.props.state.tweets.map((tweet, i) => (
                <Card key={i} header={tweet.title} description={tweet.text} meta={i} extra={extra}/>
            ))}
        </div>
    }
}