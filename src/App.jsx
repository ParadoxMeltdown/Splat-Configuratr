/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Character from './models/character'
import './App.css';
import { equal } from 'assert';
import { saveAs}  from 'file-saver';

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = 'https://splatoonwiki.org/wiki/List_of_shoes_in_Splatoon_2';
  const cheerio = require('cheerio');

class App extends React.PureComponent {
  constructor() {
    super();
  }
  componentDidMount() {
    fetch(proxyurl + url, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then((res) => {
          return res.text();
    })
    .then((data) => {
      let equipmentListAA = [];

      var cheer = cheerio.load(data);
      let equipmentCounter = 1;
      let cc = cheer('table.sortable').children('tbody').children();
      cc = cc.slice(1);
      cc.each((index, element) => {
        equipmentListAA[index] = {};
        equipmentListAA[index]['equipmentId'] = equipmentCounter;

        let row = cheer(element).children();

        let aa = row[0].firstChild;
        equipmentListAA[index]['description'] = aa.attribs["title"];
        equipmentListAA[index]['url'] = aa.firstChild.attribs['src'];
        equipmentCounter += 1;
      });
      this.setState({ equipmentList:equipmentListAA });
      return equipmentListAA;
    })
    .then((content) => {
      //var FileSaver = require('file-saver');
      //var blob = new Blob([JSON.stringify(content)], {type: "text/plain;charset=utf-8"});
      //FileSaver.saveAs(blob, "equipment-shoes.json");
    });
  }

  render() {
    console.log('render called...');

    return (
      <div>ressssss</div>
    );
  }
  getClothing() { 
  }
}


export default App;