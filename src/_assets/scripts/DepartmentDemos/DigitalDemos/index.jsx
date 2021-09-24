import React, {Fragment} from 'react';
import Demo from '../../Demo';

const DigitalDemos = ({ demoDate, demos }) => {
  return (
    <Fragment>
      <h2 className="ch-mv--4">{ demoDate }</h2>

      {demos.length > 0 ?
        <ol className="demo-timeline">
          {demos.map((demo, i) =>
            <Demo name={demo.data.name} team={demo.data.team} topic={demo.data.topic} />
          )}
        </ol>
      :
        <h3>No demos yet.</h3>
      }
    </Fragment>
  )
}

export default DigitalDemos;