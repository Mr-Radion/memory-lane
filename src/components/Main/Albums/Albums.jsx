import React, { Component } from 'react';
import AlbumsItem from './AlbumsItem.jsx';
import './Albums.sass';
import shortid from 'shortid';

const galleryData = [
  {url: 'https://picsum.photos/400/400', name: 'itemName', autor: 'itemAutor', date: 'itemDate'},
  {url: 'https://picsum.photos/400/400', name: 'itemName1', autor: 'itemAutor1', date: 'itemDate1'},
  {url: 'https://picsum.photos/400/400', name: 'itemName2', autor: 'itemAutor2', date: 'itemDate2'},
  {url: 'https://picsum.photos/400/400', name: 'itemName3', autor: 'itemAutor3', date: 'itemDate3'},
  {url: 'https://picsum.photos/400/400', name: 'itemName4', autor: 'itemAutor4', date: 'itemDate4'},
  {url: 'https://picsum.photos/400/400', name: 'itemName4', autor: 'itemAutor4', date: 'itemDate5'},
  {url: 'https://picsum.photos/400/400', name: 'itemName4', autor: 'itemAutor4', date: 'itemDate6'},
  {url: 'https://picsum.photos/400/400', name: 'itemName4', autor: 'itemAutor4', date: 'itemDate5'},
  {url: 'https://picsum.photos/400/400', name: 'itemName4', autor: 'itemAutor4', date: 'itemDate5'},
  {url: 'https://picsum.photos/400/400', name: 'itemName4', autor: 'itemAutor4', date: 'itemDate5'}
];

export default class Albums extends Component {
  constructor() {
    super();
    this.state = {
      biggerView: false
    };
  }

  changeView() {
    this.setState({biggerView: !this.state.biggerView});
  }
  render() {
    const viewClass = this.state.biggerView ? 'bigView' : 'smallView';
    return (
      <div className='galleryBlock'>
        <div className='sorting'>
          <div className='sorting__title'>Сортировка</div>
          <div className='sorting__date'>По дате</div>
          <div className='sorting__human'>По человеку</div>   
          <div className='sorting__view'>
            <button onClick={this.changeView.bind(this)}>Вид</button>
          </div>
        </div>
        <div className={viewClass} > 
          {
            galleryData.map(card => {
              return <AlbumsItem url={card.url} name={card.name} autor={card.autor} date={card.date} key={ shortid.generate() }/>;
            })
          }
        </div>
      </div>
    );
  }
}
