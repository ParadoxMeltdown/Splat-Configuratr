/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import DataBrand from '../data/brand.json'
import { realpathSync } from 'fs';

class Equipment extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
            equipment: {
                "equipmentId":0,
                "description":"",
                "imageURL":"",
                "brand":"",
            },
            title: "",
            handleClick: () => {},
        }
    }
    render() {
        let equipmentItem = this.props.equipment;
        if(equipmentItem == undefined) {
            return null;
        }
        return (
            <div className="col-sm-4">
                <div className="card card-splat my-2">
                    <img className="card-img-top p-4" src={equipmentItem.imageURL} alt={equipmentItem.description} />
                    <div className="card-body p-3 text-center">
                        <div className="background-black bg-dark text-white">
                            {this.props.title}
                        </div>
                        <div className="h3">
                            <span className="font-weight-bold">{equipmentItem.description}</span>
                            <hr />
                        </div>
                        <div className="h6">
                            <span className="">{equipmentItem.brand}&nbsp;</span>
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

export default Equipment;
