import React from 'react'
import useTranslation from '../hooks/useTranslation'
import classes from './bg.module.scss'
const Painting: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1 className ={classes.bl}>{t('notAPipe')}</h1>
     {t('bg')}
    </div>
  )
}

export default Painting
