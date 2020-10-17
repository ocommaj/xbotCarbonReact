export default function js() {
  const defaultStr =
`const hd = document.querySelector('h1');
let counter = 0;

hd.style.cursor = 'pointer';
hd.addEventListener('click', () => {
	counter = handleClick(counter) });

function handleClick(count) {
	logCounter(count);
    count++;
    return count;
};

function logCounter(count) {
	const logStr = \`Counter: \${count}\`;
    console.log(logStr);
};`

  return () => defaultStr
}
