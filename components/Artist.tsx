import React from 'react'
import useTranslation from '../hooks/useTranslation'
import classes from './artist.module.scss'
const Artist: React.FC = () => {
  const { locale, t } = useTranslation()
  return (
    <div className={classes.bio}>
      <h1>René Magritte</h1>
      <img src="/img/magritte.jpg" width="300px" height="350px" alt="Rene Magritte" />
      <p>{t('bio')}</p>
      <a href={`http://${locale}.wikipedia.org/wiki/René_Magritte`}>{t('readMore')}</a>
    </div>
  )
}

export default Artist
