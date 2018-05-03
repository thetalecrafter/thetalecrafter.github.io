import React from 'react'
import Archive from './_partial/archive.jsx'

export default (props) =>
  <Archive
    {...props}
    pagination={props.config.category}
  />
