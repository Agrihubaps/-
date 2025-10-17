import { ReactNode } from 'react'

export default function Section({
  id,
  title,
  subtitle,
  children
}: {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="container-xxl py-16 scroll-mt-24 md:scroll-mt-28">
      {title && (
        <div className="mb-10">
          <h2 className="mb-2">{title}</h2>
          {subtitle && <p className="opacity-80 max-w-3xl">{subtitle}</p>}
        </div>
      )}
      <div className="grid gap-6">{children}</div>
    </section>
  )
}
