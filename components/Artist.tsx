import React from 'react'
import useTranslation from '../hooks/useTranslation'
const Artist: React.FC = () => {
  const { locale, t } = useTranslation()
  return (
    <div>
     
      <a href={`http://${locale}.wikipedia.org`}>{t('readMore')}</a>
    </div>
  )
}

export default Artist
