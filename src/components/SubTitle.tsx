import { ReactNode } from 'react'

export function SubTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-2xl text-zinc-100 font-mono">{children}</h3>
}
