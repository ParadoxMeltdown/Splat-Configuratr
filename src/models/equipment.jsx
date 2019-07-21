/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import DataBrand from '../data/brand.json'
import { realpathSync } from 'fs';

class Equipment extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
            equipment: []
        }
    }

    render() {
        let equipmentItem = this.props.equipment;
        if(equipmentItem == null) {
            return;
        }
        return (
            <div>
                <div className="col-md-12">
                    <div className="card mx-1">
                        <div className="card-body p-1">
                            <div className="d-flex justify-content-between">
                                <img src={equipmentItem.url} alt={equipmentItem.description} />
                                <span className="font-weight-bold h5">{ equipmentItem.description }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Brand extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
            id: 0,
            brandJSON: null,
        }
    }

    render() {
        let brandItem = DataBrand.find(brand => brand.brandId === this.props.id);

        return (
            <span><img src={brandItem.imgURL} style={{ width:"2em"}} alt={brandItem.description}/></span>
        );
    }
}

export default Equipment;
