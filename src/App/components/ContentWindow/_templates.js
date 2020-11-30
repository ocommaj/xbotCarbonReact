import React from 'react';
import SinglePane from './_SinglePane';
import TabbedWindow from './_Tabbed';
import TilesPreviewer from './_TilesPreviewer';
import CodePen from './_CodePen';
import AccordionViewer from './_AccordionViewer';

const templates = {
  singlePane(props) { return <SinglePane props={props} /> },
  tabbedWindow(props) { return <TabbedWindow props={props} /> },
  tilesPreviewer(props) { return <TilesPreviewer props={props} /> },
  codepen(props) { return <CodePen props={props} /> },
  accordionViewer(props) { return <AccordionViewer props={props} /> },
};

export default templates;
