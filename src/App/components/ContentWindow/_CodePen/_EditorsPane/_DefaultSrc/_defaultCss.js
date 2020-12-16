export default function css() {
  const defaultStr =
`html {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #525252;
}

h1 {
  font-family: monospace;
  color: #8d8d8d;
}

.fancy::after {
  content: 'great stuff."'
}`

  return () => defaultStr
}
