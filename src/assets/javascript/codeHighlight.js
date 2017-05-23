import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import style from 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', xml);

const highlightCode = function() {
  const nodes = document.querySelectorAll('pre code');
  nodes.forEach(function(node) { hljs.highlightBlock(node); });
};

export default highlightCode;