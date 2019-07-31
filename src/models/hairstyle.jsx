/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import DataBrand from '../data/brand.json'
import { realpathSync } from 'fs';

class Feature extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
            feature: {
                "id":0,
                "genderId":0,
                "descriptionRace":"",
                "descriptionStyle":"",
                "imageURLFront":"",
                "imageURLBack":""
            },
            title: "",
            handleClick: () => {},
        }
    }

    render() {
        let featureItem = this.props.feature;
        if(featureItem == undefined) {
            return null;
        }
        return (
            <div className="col-sm-6">
                <div className="card card-splat my-2">
                    <div class="card-img-top pt-4 px-4">
                        <img style={{width:'50%'}} src={featureItem.imageURLFront} alt={featureItem.descriptionRace + ' ' + featureItem.descriptionStyle} />
                        <img style={{width:'50%'}} src={featureItem.imageURLBack} alt={featureItem.descriptionRace + ' ' + featureItem.descriptionStyle} />
                    </div>
                    <div className="card-body px-4 pd-4 pt-0 text-center">
                        <div className="background-black bg-dark text-white">
                            {this.props.title} : {featureItem.descriptionRace + ' / ' + featureItem.descriptionStyle}
                        </div>
                        <br />
                        <div>
                            <a className="btn btn-block btn-splat rounded-pill text-white" onClick={this.props.handleClick}><span className="h4 text-bold">Randomize</span></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feature;
