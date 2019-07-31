/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

/* Data */
import DataEquipmentShirt from '../data/equipment-shirt.json'
import DataEquipmentHat from '../data/equipment-hat.json'
import DataEquipmentShoes from '../data/equipment-shoes.json'
import DataFeatureEyeColor from '../data/eyeColor.json'
import DataFeatureGender from '../data/gender.json'
import DataFeatureSkin from '../data/skin.json'
import DataFeatureHairstyle from '../data/hairstyle.json'


import Equipment from './equipment'
import Feature from './feature'
import HairStyle from './hairstyle';

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
            featureHairstyle: {},
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
                        <Equipment handleClick={() => {this.handleEquipmentRandomClick("Hat")}} equipment={this.state.equipmentHat} title="Hat" />
                        <Equipment handleClick={() => {this.handleEquipmentRandomClick("Shirt")}} equipment={this.state.equipmentShirt} title="Shirt" />
                        <Equipment handleClick={() => {this.handleEquipmentRandomClick("Shoes")}} equipment={this.state.equipmentShoes} title="Shoes" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                        <span className="text-white h1">
                            Features
                        </span>
                    </div>
                    <div className="row">
                        <Feature handleClick={() => {this.handleFeatureRandomClick("Gender")}} feature={this.state.featureGender} title="Gender" />
                        <HairStyle handleClick={() => {this.handleFeatureRandomClick("Hairstyle")}} feature={this.state.featureHairstyle} title="Hairstyle" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                        <span className="text-white h1">
                            Colors
                        </span>
                    </div>
                    <div className="row">
                        <Feature handleClick={() => {this.handleFeatureRandomClick("Skin")}} feature={this.state.featureSkin} title="Skin" />
                        <Feature handleClick={() => {this.handleFeatureRandomClick("Eye Color")}} feature={this.state.featureEyeColor} title="Eye Color" />
                    </div>
                </div>
            </div>
        );
    }
    handleEquipmentRandomClick(equipmentType) {
        let index = 0;

        if(equipmentType == "Hat") {
            index = getRandomInt(DataEquipmentHat.length);
                this.setState({
                    equipmentHat:DataEquipmentHat[index]
                })
        }
        else if(equipmentType == "Shirt") {
            index = getRandomInt(DataEquipmentShirt.length);
            this.setState({
                equipmentShirt:DataEquipmentShirt[index]
            })
        }
        else if(equipmentType == "Shoes") {
            index = getRandomInt(DataEquipmentShoes.length);
            this.setState({
                equipmentShoes:DataEquipmentShoes[index]
            })
        }
    }
    handleFeatureRandomClick(featureType) {
        let index = 0;

        if(featureType == "Gender") {
            index = getRandomInt(DataFeatureGender.length);

            let genderObject = DataFeatureGender[index]
            let dataHairstyleSet = DataFeatureHairstyle.filter(feature => {return (feature.genderId == genderObject.id)});
            let hairstyleIndex = getRandomInt(dataHairstyleSet.length);

            this.setState({
                featureGender:genderObject,
                featureHairstyle:dataHairstyleSet[hairstyleIndex]
            })
        }
        else if(featureType == "Skin") {
            index = getRandomInt(DataFeatureSkin.length);
            this.setState({
                featureSkin:DataFeatureSkin[index]
            })
        }
        else if(featureType == "Eye Color") {
            index = getRandomInt(DataFeatureEyeColor.length);
            this.setState({
                featureEyeColor:DataFeatureEyeColor[index]
            })
        }
        else if(featureType == "Hairstyle") {
            index = getRandomInt(DataFeatureHairstyle.length);
            this.setState({
                featureHairstyle:DataFeatureHairstyle[index]
            })
        }
    }

    //Events
    randomize() {
        let equipmentHatIndex = getRandomInt(DataEquipmentHat.length);
        let equipmentShirtIndex = getRandomInt(DataEquipmentShirt.length);
        let equipmentShoesIndex = getRandomInt(DataEquipmentShoes.length);

        let featureGenderIndex = getRandomInt(DataFeatureGender.length);
        let featureEyeColorIndex = getRandomInt(DataFeatureEyeColor.length);
        let featureSkinIndex = getRandomInt(DataFeatureSkin.length);

        let genderObject = DataFeatureGender[featureGenderIndex]
        let dataHairstyleSet = DataFeatureHairstyle.filter(feature => {return (feature.genderId == genderObject.id)});
        let featureHairStyleId = getRandomInt(dataHairstyleSet.length);

        this.setState({
            equipmentHat:DataEquipmentHat[equipmentHatIndex],
            equipmentShirt:DataEquipmentShirt[equipmentShirtIndex],
            equipmentShoes:DataEquipmentShoes[equipmentShoesIndex],
            featureGender:genderObject,
            featureSkin:DataFeatureSkin[featureSkinIndex],
            featureEyeColor:DataFeatureEyeColor[featureEyeColorIndex],
            featureHairstyle:dataHairstyleSet[featureHairStyleId],
        })
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export default Character;
