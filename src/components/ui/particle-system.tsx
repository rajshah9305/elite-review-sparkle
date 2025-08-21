import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  delay: number
  size: number
  color: string
}

interface ParticleSystemProps {
  count?: number
  className?: string
}

export function ParticleSystem({ count = 15, className = "" }: ParticleSystemProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 15,
      size: Math.random() * 3 + 1,
      color: Math.random() > 0.7 ? 'hsl(186 100% 65%)' : Math.random() > 0.5 ? 'hsl(252 83% 65%)' : 'hsl(158 64% 52%)'
    }))
    setParticles(newParticles)
  }, [count])

  return (
    <div className={`particle-system ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle animate-particle-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
          }}
        />
      ))}
    </div>
  )
}