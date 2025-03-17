import React from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'small' | 'medium' | 'large'
  href?: string
  to?: string
  type?: 'button' | 'submit' | 'reset'
  isLoading?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  to,
  type = 'button',
  isLoading = false,
  disabled = false,
  className = '',
  onClick
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary',
    outline: 'border border-gray-300 text-primary hover:bg-gray-50 focus:ring-primary',
    text: 'text-primary hover:text-primary-dark focus:ring-primary'
  }
  
  const sizeClasses = {
    small: 'text-sm px-3 py-1.5',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3'
  }
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`
  
  const content = (
    <>
      {isLoading && (
        <Loading 
          size="small" 
          color={variant === 'outline' || variant === 'text' ? 'primary' : 'white'} 
          className="mr-2"
        />
      )}
      {children}
    </>
  )
  
  // If it's a link to an external site
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    )
  }
  
  // If it's a link to an internal route
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
      >
        {content}
      </Link>
    )
  }
  
  // Otherwise, it's a button
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {content}
    </button>
  )
} 