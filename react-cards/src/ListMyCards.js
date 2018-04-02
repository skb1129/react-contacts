import React, {Component} from 'react';
import MyCard from './MyCard';

class ListMyCards extends Component {
  state = {
    cards: [
      {
        id: 1,
        title: `JAPAN'S BEAUTY PARKS`,
        image_url: 'https://unsplash.it/500/250?random=30',
        description: `To break the changes is to kill the man, the fight that comes with evil and bland, we don't sow, we don't cry. We make the changes we must fry, because we are kings among people`,
        author: 'Michael Fisher',
        author_url: 'https://randomuser.me/api/portraits/men/29.jpg',
        likes: 783,
        read_time: 7
      }, {
        id: 2,
        title: `THE SUMMER IS OVER`,
        image_url: 'https://unsplash.it/500/250?random=5',
        description: `Well it isn't too hard to create random data made from random strings, that don't reallymean much. My IDE makes this super easy, I can just type some shit, and it'll come up as plus`,
        author: 'Kendra Jones',
        author_url: 'https://randomuser.me/api/portraits/women/57.jpg',
        likes: 958,
        read_time: 18
      }, {
        id: 3,
        title: `IN THIS MOMENT, I AM`,
        image_url: 'https://unsplash.it/500/250?random=10',
        description: `Euphoric. Not because of any phony God's blessing. But because, I am enlightened by my intelligenceand my belief in the way of the katana, and my study in the way of the blade`,
        author: 'Aalewis Argown',
        author_url: 'https://randomuser.me/api/portraits/men/47.jpg',
        likes: 376,
        read_time: 3
      }, {
        id: 4,
        title: `NO MORE WAR`,
        image_url: 'https://unsplash.it/500/250?random=15',
        description: `To break the changes is to kill the man, the fight that comes with evil and bland, we don't sow, we don't cry. We make the changes we must fry, because we are kings among people`,
        author: 'Massturoka Latifa',
        author_url: 'https://randomuser.me/api/portraits/women/75.jpg',
        likes: 346,
        read_time: 4
      }, {
        id: 5,
        title: `OVERCOMING THE PAST`,
        image_url: 'https://unsplash.it/500/250?random=20',
        description: `We don't really care about who has control in the wars to come, we only care ifwe are safe, or if we are doomed. Our neighbours, or freinds seem to matter lesswhen we have family`,
        author: 'Steve Richards',
        author_url: 'https://randomuser.me/api/portraits/men/30.jpg',
        likes: 175,
        read_time: 7
      }, {
        id: 6,
        title: `THEY REALLY DON'T CARE`,
        image_url: 'https://unsplash.it/500/250?random=25',
        description: `They give absolutely nothing about anything, we only care ifThey are safe, or if they are doomed. Everything is secondary when they have family`,
        author: 'Stephanie Cornocopia',
        author_url: 'https://randomuser.me/api/portraits/women/76.jpg',
        likes: 827,
        read_time: 9
      }
    ]
  }

  updateLikes = (card) => {
    card.likes += 1;
    this.setState((state) => ({
      cards: state.cards.map((c) => (c.id === card.id ? card : c))
    }))
  }

  render() {
    return (
      <div className='cards-list'>
        {this.state.cards.map((card) => (
          <MyCard key={card.id} card={card} updateLikes={this.updateLikes}/>
        ))}
      </div>
    );
  }
}

export default ListMyCards;
