import { atom } from 'jotai'
export function atomWithLocalStorage<T>(key: string, initialValue: T) {
  const getInitialValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    const item = localStorage.getItem(key)
    if (item !== null) {
      try {
        return JSON.parse(item) as T
      } catch {
        console.error(`Error parsing stored value for key "${key}"`)
        return initialValue
      }
    }
    return initialValue
  }

  const baseAtom = atom<T>(getInitialValue())

  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update: T | ((prev: T) => T)) => {
      const nextValue =
        typeof update === 'function'
          ? (update as (prev: T) => T)(get(baseAtom))
          : update
      set(baseAtom, nextValue)
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(nextValue))
      }
    }
  )

  return derivedAtom
}
