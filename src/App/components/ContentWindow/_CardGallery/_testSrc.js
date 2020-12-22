import testExample from './GalleryCard/_testExample';

const { data: { html, css } } = testExample;

const srcObj = {
  html,
  css,
  _id: "testSrc",
  title: "Dot Loader",
  template(html, css, script) {
    return `
      <html>
        <body>${ html || '' }</body>
        <style>${ css || '' }</style>
        <script>${ script || '' }</script
      </html>
    `
    //return template({ body: html, style: css, script: script })
  },
  type: 'codePen'
};

function dataArray() {
  const objects = [];
  for (let i = 0; i < 48; i++) {
    const entry = { ...srcObj, _id: `${srcObj._id}_${i}` };
    objects.push(entry)
  }
  return objects;
}

const srcArray = dataArray();

export default srcArray;
