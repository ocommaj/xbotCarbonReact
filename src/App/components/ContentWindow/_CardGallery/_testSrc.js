import testExample from './GalleryCard/_testExample';

const { data: { html, css } } = testExample;
const template = ({body, style, script}) => {
  return `
  <html>
    <body>${ body || '' }</body>
    <style>${ style || '' }</style>
    <script>${ script || '' }</script>
  </html>
  `
};

const srcObj = {
  html,
  css,
  id: "testSrc",
  title: "Dot Loader",
  template(html, css, script) {
    return template({ body: html, style: css, script: script })
  }
};

function dataArray() {
  const objects = [];
  for (let i = 0; i < 45; i++) {
    const entry = { ...srcObj, id: `${srcObj.id}_${i}` };
    objects.push(entry)
  }
  return objects;
}

const srcData = dataArray();




export default srcData;
