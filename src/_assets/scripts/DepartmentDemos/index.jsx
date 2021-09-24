import React from 'react';
import DigitalDemos from './DigitalDemos';
import MarketingDemos from './MarketingDemos';
import DemosData from '../../../_data/demos';

class DepartmentDemos extends React.Component {
	state = {
		demos: [],
    digitalDemos: [],
    marketingDemos: [],
		activeTab: 'digital',
    digitalDemoDate: "",
    marketingDemoDate: ""
	}

  componentDidMount = () => {
    this.setDemoDates();
    this.getDemoSubmissions();
  }

  getDemoSubmissions = () => {
    fetch('https://v1.nocodeapi.com/jamiecassidyac/netlify/DxypIElQosvamZrs/listFormSubmissions?form_id=614da39732998100087fca4c', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(demos => this.setDemos(demos))
  }

  setDemos = demos => {
    let digitalDemos = demos.filter(demo => demo.data.department === 'Digital');
    let marketingDemos = demos.filter(demo => demo.data.department === 'Marketing');

    this.setState({
      demos,
      digitalDemos,
      marketingDemos
    })
  }

  setActiveTab = activeTab => {
    this.setState({activeTab});
  }

  setDemoDates = () => {
    this.setState({
      digitalDemoDate: DemosData.digitalDemoDate,
      marketingDemoDate: DemosData.marketingDemoDate
    });
  }

  renderTabs = () => {
    switch (this.state.activeTab) {
      case 'marketing':
        return <MarketingDemos demoDate={this.state.marketingDemoDate} demos={this.state.marketingDemos} />
      break;
      default:
        return <DigitalDemos demoDate={this.state.digitalDemoDate} demos={this.state.digitalDemos} />
    }
  }

	render() {
    return (
      <div className="ch-bg--white ch-rounded ch-ba--1 ch-bc--grey-3 ch-shadow--sm">
        <div className="ch-card__content">
          <div className="ch-bb--1 ch-bc--grey-3">
            <button className={`ch-tab ${this.state.activeTab === 'digital' && `ch-tab--selected`}`} data-hook="dd-tab" onClick={() => this.setActiveTab('digital')}>Digital</button>
            <button className={`ch-tab ${this.state.activeTab === 'marketing' && `ch-tab--selected`}`} data-hook="dd-tab" onClick={() => this.setActiveTab('marketing')}>Marketing</button>
          </div>
          <div className="dd-tabs__tabs" data-hook="dd-tabs-content">
            { this.state.demos.length > 0 ? this.renderTabs() : <h2 class="ch-mv--4">Loading demos...</h2> }
          </div>
        </div>
      </div>
    )
	}
}

export default DepartmentDemos;
