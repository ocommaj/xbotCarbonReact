import React, { useState, useContext } from 'react';
import GalleryCard from './GalleryCard';
import CodePenModal from '@components/CodePenModal';
import { AppContext } from '@App';
import srcArray from './_testSrc';

const DOM = { WRAPPER: "cardGallery" };

export default function CardGallery({ props: { activeSection } }) {
  const { readingList } = useContext(AppContext)
  const [ codePenModalOpen, setCodePenModalOpen ] = useState(false);
  const [ srcData, setSrcData ] = useState(null);

  function launchCodePenModal(withSrc) {
    setSrcData(withSrc);
    setCodePenModalOpen(true);
  }

  return (
    <>
    <section className={ DOM.WRAPPER }>
      { srcArray.map(record =>
            <GalleryCard
              key={ record.id }
              srcData={ record }
              clickHandler={ (withSrc) => launchCodePenModal(withSrc) }
              inReadingList={ isInReadingList(record.id) }
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
      inReadingList={ srcData && isInReadingList(srcData.id) }
    />
    </>
  )

  function isInReadingList(id) {
    for (const item of readingList) {
      if (item.id === id) return true
    }
  }
}
