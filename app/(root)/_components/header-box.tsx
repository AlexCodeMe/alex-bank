import React from 'react'

type Props = {
    type?: 'title' | 'greeting'
    title: string
    subtext: string
    user?: string
}

export default function Headerbox({
    type = 'title',
    title,
    subtext,
    user
}: Props) {
  return (
    <div className='header-box'>
        <h1 className='header-box-title'>
            {title}
            {type === 'greeting' && (
                <span>
                    &nbsp;{user}
                </span>
            )}
        </h1>
        <p className='header-box-subtext'>
            {subtext}
        </p>
    </div>
  )
}