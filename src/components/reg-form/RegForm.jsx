import React, { Component } from "react";
import './style.css'

export default class RegForm extends Component {

    constructor(props) {
        super(props);
        this.title = "";
        this.text = "";
    }
    _handleChangeTitle(e) {
        e.stopPropagation();
        this.title = e.target.value;
    }
    _handleChangeText(e) {
        e.stopPropagation();
        this.text = e.target.value;
    }
    _createNote(e){
        e.preventDefault();
        this.props.createNote(this.title, this.text)
    }
    render() {
        return (
            <form className="reg-form" onSubmit={this._createNote.bind(this)}>
                <input
                    className="reg-form-input"
                    type="text"
                    placeholder='title'
                    onChange={this._handleChangeTitle.bind(this)} />

                <textarea
                    className="reg-form-input"
                    placeholder='Write your note...'
                    onChange={this._handleChangeText.bind(this)}/>
                <button className="reg-form-input reg-form-submit">Create Note</button>

            </form>
        );
    }
}