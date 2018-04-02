import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MyCard from './MyCard';

class ListMyCards extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className='cards-list'>
        {this.props.cards.map((card) => (
          <MyCard key={card.id} card={card} />
        ))}
      </div>
    );
  }
}

export default ListMyCards;
