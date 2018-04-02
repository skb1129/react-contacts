import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class MyCard extends Component {
  render() {
    return (
      <Card className='card'>
        <CardHeader
          title={this.props.card.author}
          avatar={this.props.card.author_url}
          subtitle={`${this.props.card.read_time} min read`}
        />
        <CardMedia
          overlay={<CardTitle title={this.props.card.title} />}
        >
          <img className='card-img' src={this.props.card.image_url} alt={this.props.card.title} />
        </CardMedia>
        <CardText>{this.props.card.description}</CardText>
        <CardActions>
          <FlatButton label={`${this.props.card.likes} Likes`} onClick={() => (this.props.updateLikes(this.props.card))}/>
        </CardActions>
      </Card>
    );
  }
}

export default MyCard;
