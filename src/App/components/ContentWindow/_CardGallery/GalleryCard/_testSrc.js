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
  template() { return template({body: html, style: css}) }
};

export default srcData;
