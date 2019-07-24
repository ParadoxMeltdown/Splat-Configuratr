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
                "description":"",
                "imageURL":""
            },
            title: "",
        }
    }

    render() {
        let featureItem = this.props.feature;
        if(featureItem == undefined) {
            return null;
        }
        return (
            <div className="col-sm-3">
                <div className="card card-splat my-2">
                    <img className="card-img-top pt-4 px-4" src={featureItem.imageURL} alt={featureItem.description} />
                    <div className="card-body px-4 pd-4 pt-0 text-center">
                        <div className="background-black bg-dark text-white">
                            {this.props.title}
                        </div>
                        <br />
                        <div>
                            <a className="btn btn-block btn-splat rounded-pill text-white"><span className="h4 text-bold">Randomize</span></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feature;
