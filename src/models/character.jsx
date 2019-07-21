/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import DataEquipmentShirt from '../data/equipment-shirt.json'
import DataEquipmentHat from '../data/equipment-hat.json'
import DataEquipmentShoes from '../data/equipment-shoes.json'
import Equipment from './equipment'

class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equipmentId: 0,
            genderId: 0,
            speciesId: 0,
            skinId: 0,
            eyeColorId: 0,
            hairStyleId: 0,
            legwearId: 0,
            equipmentHat: {},
            equipmentShirt: {},
            equipmentShoes: {},
        }

        this.randomize = this.randomize.bind(this);
    }
    componentDidMount() {
        this.randomize();
    }
    render() {
        //Clothes

        return (
            <div className="col-md-6">
                <div className="row">
                    <a className="btn btn-primary btn-light btn-block" onClick={this.randomize}>Randomize</a>
                    <Equipment equipment={this.state.equipmentHat} />
                    <Equipment equipment={this.state.equipmentShirt} />
                    <Equipment equipment={this.state.equipmentShoes} />
                </div>
            </div>
        );
    }
    //Events
    randomize() {
        let equipmentHatId = getRandomInt(DataEquipmentHat.length);
        let equipmentShirtId = getRandomInt(DataEquipmentShirt.length);
        let equipmentShoesId = getRandomInt(DataEquipmentShoes.length);

        this.setState({
            equipmentHat:DataEquipmentHat.find(equipment => equipment.equipmentId == equipmentHatId),
            equipmentShirt:DataEquipmentShirt.find(equipment => equipment.equipmentId == equipmentShirtId),
            equipmentShoes:DataEquipmentShoes.find(equipment => equipment.equipmentId == equipmentShoesId),
        })
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
export default Character;
