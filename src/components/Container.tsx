import { ReactNode } from 'react'

export interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'sm' | 'md' | 'lg' | 'xl'
}

export default function Container({ 
  children, 
  className = '',
  size = 'default'
}: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    sm: 'max-w-3xl mx-auto px-4 sm:px-6',
    md: 'max-w-4xl mx-auto px-4 sm:px-6',
    lg: 'max-w-5xl mx-auto px-4 sm:px-6',
    xl: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  )
} 