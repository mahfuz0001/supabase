import Image from 'next/image'
import React from 'react'
import { cn } from 'ui'

interface Props {
  className?: string
}

const LWXBackground = ({ className }: Props) => {
  return (
    <div className={cn('w-full h-auto absolute', className)}>
      <Image
        src="/images/launchweek/lwx/lwx_bg.svg"
        alt=""
        className="absolute w-full h-full inset-0 mt-10 object-cover overflow-visible opacity-70"
        role="presentation"
        fill
      />
    </div>
  )
}

export default LWXBackground
