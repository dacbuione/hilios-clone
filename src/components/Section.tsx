import React from 'react'
import Container from './Container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'light' | 'primary' | 'dark'
  withContainer?: boolean
  id?: string
}

export default function Section({
  children,
  className = '',
  background = 'white',
  withContainer = true,
  id
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    primary: 'bg-primary text-white',
    dark: 'bg-gray-900 text-white'
  }

  const content = withContainer ? (
    <Container>
      {children}
    </Container>
  ) : children

  return (
    <section
      id={id}
      className={`py-16 md:py-20 ${backgroundClasses[background]} ${className}`}
    >
      {content}
    </section>
  )
} 