import html from './_defaultHtml';
import css from './_defaultCss';
import js from './_defaultScript';

const DefaultSrc = {
  html: () => html(),
  css: () => css(),
  js: () =>  js(),
  template: (body, style, script) => {
    return `<html>
      <body>${ body }</body>
      <style>${ style }</style>
      <script>${ script }</script>
    </html>` }
}

export default DefaultSrc
