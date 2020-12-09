import React from 'react';
import Headline from '@components/Headline';
import GalleryCard from './GalleryCard';

const DOM = {
  WRAPPER: "cardGallery"
};

export default function CardGallery({ props: { activeSection } }) {
  const { content: { defaultStr: title } } = activeSection;

  return (
    <div className={ DOM.WRAPPER }>
      <Headline text={ title } />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
      <GalleryCard />
    </div>
  )
}
