import React from 'react'
import useTranslation from '../hooks/useTranslation'
const Painting: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
     {t('bg')}
    </div>
  )
}

export default Painting
