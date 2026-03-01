import { FR_DICTIONARY } from './fr';

export type UiLang = 'fr';
export type UiDictionary = Record<string, string>;

export const UI_DICTIONARIES: Record<UiLang, UiDictionary> = {
  fr: FR_DICTIONARY,
};
