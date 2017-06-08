import config from 'config'

export default (content, helmet) => `
<!doctype html>
<html lang="en">
  <head>
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
  </head>
  <body>
    <div id="root">${content}</div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run \`npm start\` in this folder.
      To create a production bundle, use \`npm run build\`.
    -->
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', '${config.get('trackingCode')}', 'auto');
      ga('send', 'pageview');
    </script>
  </body>
</html>
`;