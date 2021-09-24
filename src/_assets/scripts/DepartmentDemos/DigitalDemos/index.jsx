import React, {Fragment} from 'react';
import Demo from '../../Demo';

const DigitalDemos = () => (
  <Fragment>
    <h2 class="ch-mv--4">Thursday, 1st October 2021</h2>

    <ol className="demo-timeline">
      <Demo title="Demo 1" team="Sales Office" topic="This is my demo topic..." />
      <Demo title="Demo 2" team="Aftersales" topic="This is my demo topic..." />
    </ol>
  </Fragment>
)
export default DigitalDemos;