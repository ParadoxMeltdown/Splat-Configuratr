/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

/* Data */
import DataEquipmentShirt from '../data/equipment-shirt.json'
import DataEquipmentHat from '../data/equipment-hat.json'
import DataEquipmentShoes from '../data/equipment-shoes.json'
import DataFeatureEyeColor from '../data/eyeColor.json'
import DataFeatureGender from '../data/gender.json'
import DataFeatureSkin from '../data/skin.json'


import Equipment from './equipment'
import Feature from './feature'


var featureGenderId = 1
var featureEyeColorId = 1;
var featureSkinId = 1;

class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equipmentId: 0,
            species: {},
            hairStyleId: 0,
            legwearId: 0,
            featureGender: {},
            featureSkin: {},
            featureEyeColor: {},
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
            <div>
                <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                        <span className="text-white h1">
                            Equipment
                        </span>
                        <span className="py-1">
                            <span className="h3 text-bold"><a className="btn btn-primary btn-light rounded-pill" onClick={this.randomize}>Randomize</a></span>
                        </span>
                    </div>
                    <div className="row">
                        <Equipment handleClick={() => {this.handleEquipmentRandomClick("equipmentHat")}} equipment={this.state.equipmentHat} title="Hat" />
                        <Equipment handleClick={() => {this.handleEquipmentRandomClick("equipmentShirt")}} equipment={this.state.equipmentShirt} title="Shirt" />
                        <Equipment handleClick={() => {this.handleEquipmentRandomClick("equipmentShoes")}} equipment={this.state.equipmentShoes} title="Shoes" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                        <span className="text-white h1">
                            Features
                        </span>
                    </div>
                    <div className="row">
                        <Feature feature={this.state.featureGender} title="Gender" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                        <span className="text-white h1">
                            Colors
                        </span>
                    </div>
                    <div className="row">
                        <Feature feature={this.state.featureSkin} title="Skin" />
                        <Feature feature={this.state.featureEyeColor} title="Eye Color" />
                    </div>
                </div>
            </div>
        );
    }
    handleEquipmentRandomClick(equipment) {
        if(equipment == "equipmentHat") {
            let equipmentHatId = getRandomInt(DataEquipmentHat.length)+1;
            if(DataEquipmentHat.length > 0) {
                this.setState({
                    equipmentHat:DataEquipmentHat.find(equipment => equipment.equipmentId == equipmentHatId)
                })
            }
        }
        else if(equipment == "equipmentShirt") {
            let equipmentHatId = getRandomInt(DataEquipmentShirt.length)+1;
            if(DataEquipmentShirt.length > 0) {
                this.setState({
                    equipmentShirt:DataEquipmentShirt.find(equipment => equipment.equipmentId == equipmentHatId)
                })
            }
        }
        else if(equipment == "equipmentShoes") {
            let equipmentHatId = getRandomInt(DataEquipmentShoes.length)+1;
            if(DataEquipmentShoes.length > 0) {
                this.setState({
                    equipmentShoes:DataEquipmentShoes.find(equipment => equipment.equipmentId == equipmentHatId)
                })
            }
        }
    }

    //Events
    randomize() {
        let equipmentHatId = getRandomInt(DataEquipmentHat.length)+1;
        let equipmentShirtId = getRandomInt(DataEquipmentShirt.length)+1;
        let equipmentShoesId = getRandomInt(DataEquipmentShoes.length)+1;

        featureGenderId = getRandomInt(DataFeatureGender.length)+1;
        featureEyeColorId = getRandomInt(DataFeatureEyeColor.length)+1;
        featureSkinId = getRandomInt(DataFeatureSkin.length)+1;

        this.setState({
            equipmentHat:DataEquipmentHat.find(equipment => equipment.equipmentId == equipmentHatId),
            equipmentShirt:DataEquipmentShirt.find(equipment => equipment.equipmentId == equipmentShirtId),
            equipmentShoes:DataEquipmentShoes.find(equipment => equipment.equipmentId == equipmentShoesId),
            featureGender:DataFeatureGender.find(feature => feature.id == featureGenderId),
            featureSkin:DataFeatureSkin.find(feature => feature.id == featureSkinId),
            featureEyeColor:DataFeatureEyeColor.find(feature => feature.id == featureEyeColorId),
        })
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export default Character;
