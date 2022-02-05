import React, { Component } from "react";
import NoteCard from "../note-card/NoteCard";
import "./style.css"

export default class NotesList extends Component {
    render() {
        return (
            <ul className="notes-list">
                {this.props.notes.map((note, i) => {
                    return (
                        <li key={i} className="notes-list-item">
                            <NoteCard title={note.title} text={note.text}/>
                        </li>
                    )
                })}
            </ul>
        );
    }
}