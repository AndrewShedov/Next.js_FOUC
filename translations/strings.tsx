import React from 'react'
import About_ENG from '../components/About_ENG'
import About_FRA from '../components/About_FRA'
import { Strings } from './types'

const strings: Strings = {
en: {
abo: 'Magritte',
    about: 'About René Magritte',
    painting: 'RENE',
    artist: 'The Artist',
    notAPipe: 'About me',
  bg:<About_ENG></About_ENG>,
    bio: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    readMore: 'Read more on Wikipedia...'
  },
  fr: {
abo: 'Gadget',
    about: 'Magr',
    painting: 'La peinture',
    artist: "L'Artiste",
    notAPipe: "À propos de moi",
bg:<About_FRA></About_FRA>,
    bio: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't. `,
    readMore: 'Lire plus sur Wikipedia...'
  },
  pl: {
    about: 'O René Magritte',
    painting: 'Obraz',
    artist: 'Artysta',
    notAPipe: 'To nie jest fajka',
    bio: `René François Ghislain Magritte (ur. 21 listopada 1898 w Lessines, Hainaut, zm. 15 sierpnia 1967 w Brukseli) – belgijski malarz, surrealista. Nazywany "autorem słów i rzeczy", lubił zmieniać nazwy przedmiotów, czego przykładem mógłby być obraz Zdradliwość obrazów. Obrazy jego szokowały i wzbudzały kontrowersje, wyróżnia je poetycka nastrojowość oraz precyzyjny rysunek. Artysta, który przedstawiał świat zuniformizowany, odbity w kolejnych powieleniach, wpłynął mimowolnie na sztukę drugiej połowy XX w., przede wszystkim na pop-art.`,
    readMore: 'Dowiedz się więcej z Wikipedii...'
  }
}

export default strings

