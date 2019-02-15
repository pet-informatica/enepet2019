import React, { Component } from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import Title from '../../../components/Title';
import './Schedule.css';
import PanelTitle from '../../../components/PanelTitle';

class Schedule extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            activeKey: null
        };
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
    }

    render() {

        return (
            <div id="schedule">
                <Title title="Horários" />
                <PanelGroup accordion
                    id="accordion-schedule"
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}>
                    <Panel eventKey="1">
                        <Panel.Heading>
                            <Panel.Title toggle>
                                <PanelTitle
                                    title="Sexta | 26/04"
                                    eventKey='1'
                                    activeKey={this.state.activeKey}
                                    color='blue'
                                />
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>

                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                        <Panel.Heading>
                            <Panel.Title toggle>
                                <PanelTitle
                                    title="Sábado | 27/04"
                                    eventKey='2'
                                    activeKey={this.state.activeKey}
                                    color='red'
                                />
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="3">
                        <Panel.Heading>
                            <Panel.Title toggle>
                                <PanelTitle
                                    title="Domingo | 28/04"
                                    eventKey='2'
                                    activeKey={this.state.activeKey}
                                    color='red'
                                />
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                        </Panel.Body>
                    </Panel>
                    <Panel eventKey="4">
                        <Panel.Heading>
                            <Panel.Title toggle>
                                <PanelTitle
                                    title="Segunda | 29/04"
                                    eventKey='2'
                                    activeKey={this.state.activeKey}
                                    color='red'
                                />
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                        </Panel.Body>
                    </Panel>

                </PanelGroup>
            </div>
        )

    }


}

export default Schedule;