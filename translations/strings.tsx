import React from 'react'
import About_ENG from '../components/About_ENG'
import About_RUS from '../components/About_RUS'
import { Strings } from './types'

const strings: Strings = {
en: {
abo: 'Magritte',
    about: 'About René Magritte',
    painting: 'RENE !',
    artist: 'The Artist',
    notAPipe: 'About me',
  bg:<About_ENG></About_ENG>,
    bio: `René François Ghislain Magritte (21 November 1898 – 15 August 1967) was a Belgian Surrealist artist. He became well known for creating a number of witty and thought-provoking images. Often depicting ordinary objects in an unusual context, his work is known for challenging observers' preconditioned perceptions of reality. His imagery has influenced pop art, minimalist art and conceptual art.`,
    readMore: 'Read more onHHHHHHH Wikipedia...'
  },
  fr: {
abo: 'МАГРИТ',
    about: 'Sur René Magritte',
    painting: 'La peinture',
    artist: "L'Artiste",
    notAPipe: "О себе",
bg:<About_RUS></About_RUS>,
    bio: `René Magritte est un peintre surréaliste belge, né le 21 novembre 1898 à Lessines1 dans le Hainaut (Belgique) et mort à Schaerbeek le 15 août 1967.`,
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

