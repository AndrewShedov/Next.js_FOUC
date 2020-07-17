import React from 'react'
import { useRouter } from 'next/router'
import { locales} from '../translations/config'
import classes from './LocaleSwitcher.module.scss'
const LocaleSwitcher: React.FC = () => {
const router = useRouter()

/*const click =  function handleClick(e:any) {e.preventDefault();    console.log('По ссылке кликнули.');  }*/

const ENG = React.useCallback(
() => {
      const regex = new RegExp(`^/(${locales.join('|')})`)
      router.push(router.pathname, router.asPath.replace(regex, `/en`))
    },
    [router]
  )

const RUS =  React.useCallback(
() => {
      const regex = new RegExp(`^/(${locales.join('|')})`)
      router.push(router.pathname, router.asPath.replace(regex, `/fr`))
    },
    [router]
  )


  return (
<div>
  <div>
<a className={classes.L} onClick={ENG} >EN</a>
<a className={classes.L} onClick={RUS} >RUS</a>   
</div>


</div>
  )
}

export default LocaleSwitcher
