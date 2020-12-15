import testExample from './_testExample';

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

const srcData = {
  html,
  css,
  id: "testSrcSrc",
  title: "Dot Loader",
  template(html, css, script) {
    return template({ body: html, style: css, script: script })
  }
};

export default srcData;
