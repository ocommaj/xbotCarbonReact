import { useEffect, useState } from 'react'

export default function useLocalStorage(prefix, key, initialValue) {
  const prefixedKey = prefix + key;

  const [ value, setValue ] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)

    if (jsonValue === JSON.stringify("") || !jsonValue) {
      if (typeof initialValue === 'function') {
          return initialValue()
        } else { return initialValue }

    } else { return JSON.parse(jsonValue) }
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}
