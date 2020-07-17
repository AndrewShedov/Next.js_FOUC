import { locales } from './config'

export type Locale = typeof locales[number|any]

export type Strings = {
  [key in Locale]: {
    [key: string]: any|string
  }
}

export function isLocale(tested: any|string): tested is Locale {
  return locales.some(locale => locale === tested)
}
