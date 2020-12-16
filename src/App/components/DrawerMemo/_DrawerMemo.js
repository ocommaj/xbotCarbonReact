import React from 'react';
import FitToScreen24 from '@carbon/icons-react/lib/fit-to-screen/24';

const DOM = {
  WRAPPER: "drawerMemo",
  IFRAME: "iFrameMemoPreview",
  COVER_LINK: "coverLink",
  OPEN_ICON: "drawerMemoOpenIcon"
}

export default function DrawerMemo(props) {
  const {
    launchModal,
    record: { title, template, html='', css='', script='' }
  } = props;
  const srcDoc = template(html, css, script);

  return (
    <div className={ DOM.WRAPPER }>
      <iframe
        className={ DOM.IFRAME }
        loading="lazy"
        sandbox="allow-scripts allow-pointer-lock"
        scrolling="no"
        srcDoc={ srcDoc }
        tabIndex="-1"
        title={ title }
        frameBorder="0"
      />
      <button
        className={ DOM.COVER_LINK }
        onClick={ () => launchModal() }>
        <FitToScreen24 className={ DOM.OPEN_ICON } />
      </button>
    </div>
  )
}
