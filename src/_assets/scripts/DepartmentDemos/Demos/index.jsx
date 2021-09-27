import React, {Fragment} from 'react';
import Demo from './Demo';

const DigitalDemos = ({ demoDate, demos }) => {
  return (
    <Fragment>
      <h2 className="ch-mv--4">{ demoDate }</h2>

      {demos.length > 0 ?
        <ol className="demo-timeline">
          {demos.map((demo, i) =>
            <Demo key={i} name={demo.data.name} team={demo.data.team} topic={demo.data.topic} />
          )}
        </ol>
      :
        <div className="ch-bg--grey-2 ch-rounded ch-clearfix ch-pa--4 sm:ch-mv--10 sm:ch-pa--6 sm:ch-width--7 sm:ch-centered md:ch-width--6 lg:ch-width--5">
          <h3 className="sm:ch-text--left ch-mb--3 sm:ch-pull--left sm:ch-mt--2 sm:ch-mb--0 sm:ch-fs--4">No demos yet</h3>
          <a href="/sign-up" className="ch-btn ch-btn--success ch-width--12 sm:ch-width--auto sm:ch-pull--right">Sign up now</a>
        </div>
      }
    </Fragment>
  )
}

export default DigitalDemos;