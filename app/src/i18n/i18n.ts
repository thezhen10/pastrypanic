import i18next, { i18n as i18nInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { languages } from './i18n.constants'
import { jp } from '../locales/jp/jp.translation'
import { en } from '../locales/en/en.translation'

// ref: https://github.com/Lemoncode/i18next-example-typescript

const createI18n = (language: string): i18nInstance => {
  const i18n = i18next.createInstance().use(initReactI18next)

  i18n.init({
    lng: language,
    fallbackLng: language,
    resources: {
      [languages.jp]: jp,
      [languages.en]: en,
    },
  })

  return i18n
}

export const i18n = createI18n(languages.en)
