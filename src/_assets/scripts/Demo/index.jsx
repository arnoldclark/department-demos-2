import React from 'react';

const Demo = ({title, team, topic}) => (
  <li className="demo-item ch-mb--4">
    <div className="ch-bg--ac-white ch-ba--1 ch-bc--grey-3 ch-rounded ch-shadow--sm">
      <div className="ch-pa--3 ch-fs--3">
        <h3>{title}</h3>
        <h4 className="ch-text--normal ch-fs--3">{team}</h4>
        <p className="ch-mb--0">{topic}</p>
      </div>
    </div>
  </li>
);

export default Demo;