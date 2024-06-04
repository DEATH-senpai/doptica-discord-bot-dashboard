import React from 'react'
import WelcomeMessage from '../components/WelcomeMessage'
import {Button} from '@mui/material'

export default function Home() {
  return (
    <div className='flex justify-center'>
        <div>hello</div>
        <WelcomeMessage className=''/>
        <Button href='/dashboard'>dashboard</Button>
    </div>
  )
}
