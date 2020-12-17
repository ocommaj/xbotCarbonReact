export default function js() {
  const defaultStr =
`const hd = document.querySelector('h1');
let counter = 0;

hd.style.cursor = 'pointer';
hd.addEventListener('click', () => {
	counter = handleClick(counter) });

function handleClick(count) {
	logCounter(count);
  toggleMessage(count);
    count++;
    return count;
};

function logCounter(count) {
	const logStr = \`Counter: \${count}\`;
    console.log(logStr);
};

function toggleMessage(count) {
  const message = count % 2 === 0
    ? 'great stuff."'
    : 'odd stuff."'
  try {
    hd.setAttribute('data', message);
    }
  catch(error) {
    console.error(error)
};`

  return () => defaultStr
}
