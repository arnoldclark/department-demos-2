import React from 'react';
import Demos from './Demos';
import DemosData from '../../../_data/demos';
const NetlifyAPI = require('netlify');
const client = new NetlifyAPI('2p3FEC9ojSFnlBaAALvoidGSHJkCX0SxJQjK9fQBSC4')

class DepartmentDemos extends React.Component {
	state = {
    loading: true,
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

  getDemoSubmissions = async () => {
    const demos = await client.listFormSubmissions({
      form_id: '6151c3201c035d000797ede5'
    });
    this.setDemos(demos);
  }

  setDemos = demos => {
    let digitalDemos = demos.filter(demo => demo.data.department === 'Digital').reverse();
    let marketingDemos = demos.filter(demo => demo.data.department === 'Marketing').reverse();

    this.setState({
      loading: false,
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
        return <Demos demoDate={this.state.marketingDemoDate} demos={this.state.marketingDemos} />
      break;
      default:
        return <Demos demoDate={this.state.digitalDemoDate} demos={this.state.digitalDemos} />
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
            { this.state.loading ? <h2 className="ch-mv--4">Loading demos...</h2> : this.renderTabs() }
          </div>
        </div>
      </div>
    )
	}
}

export default DepartmentDemos;
