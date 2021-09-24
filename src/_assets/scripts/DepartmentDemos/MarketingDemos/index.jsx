import React from 'react';
import Demo from '../../Demo';

const MarketingDemos = ({ demoDate, demos }) => (
  <div>
    <h2 class="ch-mv--4">{ demoDate }</h2>

    { demos.length > 0 ?
      demos.map((demo, i) => {
        <Demo key={i} name={demo.data.name} team={demo.data.team} topic={demo.data.topic} />
      })
    :
      <h3>No demos yet.</h3>
    }
  </div>
)

export default MarketingDemos;