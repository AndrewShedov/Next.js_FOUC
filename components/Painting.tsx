import React from 'react'
import useTranslation from '../hooks/useTranslation'
const Painting: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('notAPipe')}</h1>
     {t('bg')}
    </div>
  )
}

export default Painting
