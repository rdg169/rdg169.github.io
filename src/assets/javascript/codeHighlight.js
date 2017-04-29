import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import style from 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('javascript', javascript);

const highlightCode = () => {
  const nodes = document.querySelectorAll('pre code');
  nodes.forEach(node => hljs.highlightBlock(node));
};

export default highlightCode;