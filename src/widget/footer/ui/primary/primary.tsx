import { FC, HTMLAttributes } from 'react'
import sPrimary from './primary.footer.module.scss'
import { Logo } from '@/shared/ui/logo'
import { Button } from '@/shared/ui/button'
import { SocialList } from '@/shared/ui/socialList'

interface PrimaryProps extends HTMLAttributes<HTMLDivElement> { }

export const Primary: FC<PrimaryProps> = (props) => {
  return (
    <div className={sPrimary.root}>
      <div className={sPrimary.inner}>
        <div className={sPrimary.logo}><Logo view="LIGHT" /></div>
        <div className={sPrimary.callback}><Button variant="destructive" className={sPrimary.button}>TTTTT</Button></div>
        <div className={sPrimary.social}><SocialList /></div>
      </div>
    </div>
  )
}
