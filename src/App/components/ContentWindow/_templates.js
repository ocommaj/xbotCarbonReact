import React from 'react';
import AccordionViewer from './_AccordionViewer';
import CodePen from './_CodePen';
import CardGallery from './_CardGallery';
import TabbedWindow from './_Tabbed';
import TilesPreviewer from './_TilesPreviewer';
import SinglePane from './_SinglePane';

const templates = {
  accordionViewer(props) { return <AccordionViewer props={props} /> },
  cardGallery(props) { return <CardGallery props={props} /> },
  codepen(props) { return <CodePen props={props} /> },
  tabbedWindow(props) { return <TabbedWindow props={props} /> },
  tilesPreviewer(props) { return <TilesPreviewer props={props} /> },
  singlePane(props) { return <SinglePane props={props} /> },
};

export default templates;
