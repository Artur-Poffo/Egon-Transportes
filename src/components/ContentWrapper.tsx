import { ReactNode } from 'react'

export function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
      {children}
    </div>
  )
}
