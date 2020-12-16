import React, { useState, useEffect } from 'react';
import GalleryCard from './GalleryCard';
import CodePenModal from '@components/CodePenModal';
import srcArray from './_testSrc';

const DOM = { WRAPPER: "cardGallery" };

export default function CardGallery({ props: { activeSection } }) {
  const [ codePenModalOpen, setCodePenModalOpen ] = useState(false);
  const [ srcData, setSrcData ] = useState(null);

  function launchCodePenModal(withSrc) {
    setSrcData(withSrc);
    setCodePenModalOpen(true);
  }

  useEffect(() => {
    if (!codePenModalOpen) setSrcData(null)
  }, [codePenModalOpen]);

  return (
    <>
    <section className={ DOM.WRAPPER }>
      { srcArray.map(record =>
            <GalleryCard
              key={ record.id }
              srcData={ record }
              clickHandler={ (withSrc) => launchCodePenModal(withSrc) }
            />
          )
      }
    </section>
    <CodePenModal
      modalState={ {
        isOpen: codePenModalOpen,
        close: () => setCodePenModalOpen(false)
        } }
      srcData={ srcData }
    />
    </>
  )
}
