'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function CursorFollower() {
  const dotRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    
    setIsVisible(true)

    const mouse = { x: 0, y: 0 }
    const pos = { x: 0, y: 0 }
    let reqId

    const updateMouse = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const updatePosition = () => {
      pos.x += (mouse.x - pos.x) * 0.15
      pos.y += (mouse.y - pos.y) * 0.15
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
      }
      
      reqId = requestAnimationFrame(updatePosition)
    }
    
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMouse, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    
    // Set initial position
    window.addEventListener('mousemove', (e) => {
        pos.x = e.clientX
        pos.y = e.clientY
    }, { once: true, passive: true })

    reqId = requestAnimationFrame(updatePosition)

    return () => {
      window.removeEventListener('mousemove', updateMouse)
      document.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(reqId)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={dotRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center ${
        isHovering 
          ? 'w-[40px] h-[40px] bg-[rgba(94,23,235,0.2)] border border-[rgba(255,255,255,0.2)] mix-blend-normal' 
          : 'w-[8px] h-[8px] bg-white'
      }`}
      style={{ willChange: 'transform' }}
    />
  )
}
