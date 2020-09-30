import React from 'react'
import SinglePane from './_SinglePane'
import TabbedWindow from './_Tabbed'
import TilesPreviewer from './_TilesPreviewer'

const templates = {
  'singlePane': (props) => { return <SinglePane props={props} /> },
  'tabbedWindow': (props) => { return <TabbedWindow props={props} /> },
  'tilesPreviewer': (props) => { return <TilesPreviewer props={props} /> }
}

export default templates
