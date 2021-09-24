import React from 'react';
import DigitalDemos from './DigitalDemos';
import MarketingDemos from './MarketingDemos';

class DepartmentDemos extends React.Component {
	state = {
		demos: [],
		activeTab: 'digital'
	}

  setActiveTab = activeTab => {
    this.setState({activeTab});
  }

  renderTabs = () => {
    switch (this.state.activeTab) {
      case 'marketing':
        return <MarketingDemos />
      break;
      default:
        return <DigitalDemos />
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
            { this.renderTabs() }
          </div>
				</div>
			</div>
		)
	}
}

export default DepartmentDemos;
