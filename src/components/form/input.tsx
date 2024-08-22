import React from "react"

import { cn } from "../../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    optional?: boolean
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, optional = false, ...props }, ref) => {
    return (
      <div className={cn(
        'flex items-center gap-0.5 w-full bg-baseinput border border-basebutton text-sm rounded-md p-3',
        className
      )}>
        <input 
          ref={ref}
          type={type} 
          className="w-full border-none bg-transparent outline-none placeholder:text-baselabel" 
          {...props}
        />
        {optional && (<span className="italic text-baselabel text-xs">Opcional</span>)}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }