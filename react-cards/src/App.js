import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyCard from './MyCard';

class App extends Component {
  state = {
    cards: [
      {
        title: `JAPAN'S BEAUTY PARKS`,
        image-url: '',
        description: `To break the changes is to kill the man, the fight that comes with evil and bland, we don't sow, we don't cry. We make the changes we must fry, because we are kings among people`,
        author: 'Michael Fisher',
        author-url: '',
        likes: 783
      }, {
        title: `THE SUMMER IS OVER`,
        image-url: '',
        description: `Well it isn't too hard to create random data made from random strings, that don't reallymean much. My IDE makes this super easy, I can just type some shit, and it'll come up as plus`,
        author: 'Kendra Jones',
        author-url: '',
        likes: 958
      }, {
        title: `IN THIS MOMENT, I AM`,
        image-url: '',
        description: `Euphoric. Not because of any phony God's blessing. But because, I am enlightened by my intelligenceand my belief in the way of the katana, and my study in the way of the blade`,
        author: 'Aalewis Argown',
        author-url: '',
        likes: 376
      }, {
        title: `NO MORE WAR`,
        image-url: '',
        description: `To break the changes is to kill the man, the fight that comes with evil and bland, we don't sow, we don't cry. We make the changes we must fry, because we are kings among people`,
        author: 'Massturoka Latifa',
        author-url: '',
        likes: 346
      }, {
        title: `OVERCOMING THE PAST`,
        image-url: '',
        description: `We don't really care about who has control in the wars to come, we only care ifwe are safe, or if we are doomed. Our neighbours, or freinds seem to matter lesswhen we have family`,
        author: 'Steve Richards',
        author-url: '',
        likes: 175
      }, {
        title: `THEY REALLY DON'T CARE`,
        image-url: '',
        description: `They give absolutely nothing about anything, we only care ifThey are safe, or if they are doomed. Everything is secondary when they have family`,
        author: 'Stephanie Cornocopia',
        author-url: '',
        likes: 827
      }
    ]
  }

  render() {
    return (
      <MuiThemeProvider>
        <MyCard />
      </MuiThemeProvider>
    );
  }
}

export default App;
