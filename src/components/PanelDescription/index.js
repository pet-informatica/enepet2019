import React, { Component } from 'react';
import './PanelDescription.css';

class PanelDescription extends Component {

    render() {

        const { activities, rep, vice, tutors } = this.props;

        return (
            <div className="PanelDescription">
                <div className="Panel-activities">
                    <p>{activities}</p>
                </div>
                <div className="Panel-reps">
                    {rep ? (<div><b className="Job">Representante</b> {rep}</div>) : ""}
                    {vice ? (<div><b className="Job">Vice-Representante</b> {vice}</div>) : ""}
                    {tutors ? (<div><b className="Job">Tutores-Guia</b> {tutors}</div>) : ""}
                </div>
            </div>
        );
    }
}

export default PanelDescription;
