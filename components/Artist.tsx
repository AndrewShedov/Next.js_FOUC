import React from 'react'
import useTranslation from '../hooks/useTranslation'
import classes from './artist.module.scss'
const Artist: React.FC = () => {
  const { locale, t } = useTranslation()
  return (
    <div className={classes.bio}>
      <h1>gggggggg</h1>
     <p>{t('bio')}</p>
      <a href={`http://${locale}.wikipedia.org`}>{t('readMore')}</a>
    </div>
  )
}

export default Artist
