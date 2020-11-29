import React, { useContext, useEffect } from 'react';
import { AppContext } from '@App';

export default function MapboxBG(props) {
  const { imageURL } = props;
  const { animate } = useContext(AppContext);


  useEffect(() => {
    if (imageURL) animate.background.fadeIn().play()
  }, [animate, imageURL])

  return (
    <div
      className="mapboxBG"
      style={ {'backgroundImage': `url(${ imageURL }`} }
    />
  );
};
