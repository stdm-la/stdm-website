'use client'
import { useEffect, useState } from 'react'
import { ReactElement } from 'react'

interface ArchitectureModel {
  name: string
  svg: ReactElement
}

const ArchitectureAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const architectures: ArchitectureModel[] = [
    {
      name: 'Microservices',
      svg: (
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central API Gateway */}
          <rect x="150" y="50" width="100" height="60" rx="8" fill="currentColor" opacity="0.8" />
          <text x="200" y="85" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">API Gateway</text>
          
          {/* Microservices */}
          <rect x="50" y="150" width="80" height="50" rx="6" fill="currentColor" opacity="0.6" />
          <text x="90" y="180" textAnchor="middle" fill="white" fontSize="10">Auth</text>
          
          <rect x="160" y="150" width="80" height="50" rx="6" fill="currentColor" opacity="0.6" />
          <text x="200" y="180" textAnchor="middle" fill="white" fontSize="10">User</text>
          
          <rect x="270" y="150" width="80" height="50" rx="6" fill="currentColor" opacity="0.6" />
          <text x="310" y="180" textAnchor="middle" fill="white" fontSize="10">Order</text>
          
          <rect x="110" y="230" width="80" height="50" rx="6" fill="currentColor" opacity="0.6" />
          <text x="150" y="260" textAnchor="middle" fill="white" fontSize="10">Payment</text>
          
          <rect x="210" y="230" width="80" height="50" rx="6" fill="currentColor" opacity="0.6" />
          <text x="250" y="260" textAnchor="middle" fill="white" fontSize="10">Notification</text>
          
          {/* Database icons */}
          <circle cx="90" cy="320" r="20" fill="currentColor" opacity="0.4" />
          <circle cx="200" cy="320" r="20" fill="currentColor" opacity="0.4" />
          <circle cx="310" cy="320" r="20" fill="currentColor" opacity="0.4" />
          
          {/* Connection lines */}
          <line x1="200" y1="110" x2="90" y2="150" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          <line x1="200" y1="110" x2="200" y2="150" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          <line x1="200" y1="110" x2="310" y2="150" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          <line x1="200" y1="110" x2="150" y2="230" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          <line x1="200" y1="110" x2="250" y2="230" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        </svg>
      ),
    },
    {
      name: 'Serverless',
      svg: (
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cloud */}
          <path d="M100 100 Q120 80 140 100 T180 100 T220 100 T260 100 T300 100" 
                stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6" />
          <path d="M100 100 Q120 120 140 100" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6" />
          
          {/* Lambda functions */}
          <rect x="80" y="150" width="70" height="40" rx="4" fill="currentColor" opacity="0.7" />
          <text x="115" y="175" textAnchor="middle" fill="white" fontSize="9">λ Function 1</text>
          
          <rect x="165" y="150" width="70" height="40" rx="4" fill="currentColor" opacity="0.7" />
          <text x="200" y="175" textAnchor="middle" fill="white" fontSize="9">λ Function 2</text>
          
          <rect x="250" y="150" width="70" height="40" rx="4" fill="currentColor" opacity="0.7" />
          <text x="285" y="175" textAnchor="middle" fill="white" fontSize="9">λ Function 3</text>
          
          {/* Event sources */}
          <rect x="50" y="220" width="60" height="35" rx="4" fill="currentColor" opacity="0.5" />
          <text x="80" y="240" textAnchor="middle" fill="white" fontSize="8">API</text>
          
          <rect x="130" y="220" width="60" height="35" rx="4" fill="currentColor" opacity="0.5" />
          <text x="160" y="240" textAnchor="middle" fill="white" fontSize="8">S3</text>
          
          <rect x="210" y="220" width="60" height="35" rx="4" fill="currentColor" opacity="0.5" />
          <text x="240" y="240" textAnchor="middle" fill="white" fontSize="8">SQS</text>
          
          <rect x="290" y="220" width="60" height="35" rx="4" fill="currentColor" opacity="0.5" />
          <text x="320" y="240" textAnchor="middle" fill="white" fontSize="8">DynamoDB</text>
          
          {/* Arrows */}
          <path d="M80 220 L115 150" stroke="currentColor" strokeWidth="2" opacity="0.3" markerEnd="url(#arrowhead)" />
          <path d="M160 220 L200 150" stroke="currentColor" strokeWidth="2" opacity="0.3" markerEnd="url(#arrowhead)" />
          <path d="M240 220 L285 150" stroke="currentColor" strokeWidth="2" opacity="0.3" markerEnd="url(#arrowhead)" />
          
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="currentColor" opacity="0.3" />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      name: 'Layered Architecture',
      svg: (
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Presentation Layer */}
          <rect x="50" y="50" width="300" height="60" rx="8" fill="currentColor" opacity="0.9" />
          <text x="200" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Presentation Layer</text>
          
          {/* Business Logic Layer */}
          <rect x="50" y="130" width="300" height="60" rx="8" fill="currentColor" opacity="0.7" />
          <text x="200" y="165" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Business Logic</text>
          
          {/* Data Access Layer */}
          <rect x="50" y="210" width="300" height="60" rx="8" fill="currentColor" opacity="0.5" />
          <text x="200" y="245" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Data Access</text>
          
          {/* Database Layer */}
          <rect x="50" y="290" width="300" height="60" rx="8" fill="currentColor" opacity="0.4" />
          <text x="200" y="325" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Database</text>
          
          {/* Arrows */}
          <line x1="200" y1="110" x2="200" y2="130" stroke="currentColor" strokeWidth="3" opacity="0.5" />
          <line x1="200" y1="190" x2="200" y2="210" stroke="currentColor" strokeWidth="3" opacity="0.5" />
          <line x1="200" y1="270" x2="200" y2="290" stroke="currentColor" strokeWidth="3" opacity="0.5" />
        </svg>
      ),
    },
    {
      name: 'Event-Driven',
      svg: (
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Event Bus */}
          <ellipse cx="200" cy="200" rx="150" ry="80" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6" />
          <text x="200" y="205" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold" opacity="0.8">Event Bus</text>
          
          {/* Producers */}
          <rect x="50" y="80" width="70" height="50" rx="6" fill="currentColor" opacity="0.7" />
          <text x="85" y="110" textAnchor="middle" fill="white" fontSize="10">Producer 1</text>
          
          <rect x="280" y="80" width="70" height="50" rx="6" fill="currentColor" opacity="0.7" />
          <text x="315" y="110" textAnchor="middle" fill="white" fontSize="10">Producer 2</text>
          
          {/* Consumers */}
          <rect x="50" y="270" width="70" height="50" rx="6" fill="currentColor" opacity="0.7" />
          <text x="85" y="300" textAnchor="middle" fill="white" fontSize="10">Consumer 1</text>
          
          <rect x="165" y="270" width="70" height="50" rx="6" fill="currentColor" opacity="0.7" />
          <text x="200" y="300" textAnchor="middle" fill="white" fontSize="10">Consumer 2</text>
          
          <rect x="280" y="270" width="70" height="50" rx="6" fill="currentColor" opacity="0.7" />
          <text x="315" y="300" textAnchor="middle" fill="white" fontSize="10">Consumer 3</text>
          
          {/* Event arrows */}
          <path d="M85 130 Q140 150 200 140" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
          <path d="M315 130 Q260 150 200 140" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
          <path d="M200 260 Q140 240 85 270" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
          <path d="M200 260 Q200 240 200 270" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
          <path d="M200 260 Q260 240 315 270" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
        </svg>
      ),
    },
    {
      name: 'Monolithic',
      svg: (
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Single application block */}
          <rect x="100" y="100" width="200" height="200" rx="12" fill="currentColor" opacity="0.8" />
          
          {/* Internal modules */}
          <rect x="120" y="130" width="80" height="50" rx="4" fill="currentColor" opacity="0.6" />
          <text x="160" y="160" textAnchor="middle" fill="white" fontSize="10">UI</text>
          
          <rect x="220" y="130" width="60" height="50" rx="4" fill="currentColor" opacity="0.6" />
          <text x="250" y="160" textAnchor="middle" fill="white" fontSize="10">API</text>
          
          <rect x="120" y="200" width="80" height="50" rx="4" fill="currentColor" opacity="0.6" />
          <text x="160" y="230" textAnchor="middle" fill="white" fontSize="10">Business</text>
          
          <rect x="220" y="200" width="60" height="50" rx="4" fill="currentColor" opacity="0.6" />
          <text x="250" y="230" textAnchor="middle" fill="white" fontSize="10">Data</text>
          
          {/* Database */}
          <rect x="150" y="320" width="100" height="40" rx="6" fill="currentColor" opacity="0.5" />
          <text x="200" y="345" textAnchor="middle" fill="white" fontSize="12">Database</text>
          
          {/* Connection */}
          <line x1="200" y1="300" x2="200" y2="320" stroke="currentColor" strokeWidth="3" opacity="0.5" />
          
          <text x="200" y="80" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold" opacity="0.9">Monolithic App</text>
        </svg>
      ),
    },
    {
      name: 'API Gateway',
      svg: (
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* API Gateway */}
          <rect x="120" y="50" width="160" height="70" rx="10" fill="currentColor" opacity="0.9" />
          <text x="200" y="90" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">API Gateway</text>
          
          {/* Backend services */}
          <rect x="50" y="160" width="90" height="60" rx="6" fill="currentColor" opacity="0.7" />
          <text x="95" y="195" textAnchor="middle" fill="white" fontSize="11">Service A</text>
          
          <rect x="155" y="160" width="90" height="60" rx="6" fill="currentColor" opacity="0.7" />
          <text x="200" y="195" textAnchor="middle" fill="white" fontSize="11">Service B</text>
          
          <rect x="260" y="160" width="90" height="60" rx="6" fill="currentColor" opacity="0.7" />
          <text x="305" y="195" textAnchor="middle" fill="white" fontSize="11">Service C</text>
          
          {/* Clients */}
          <rect x="80" y="260" width="70" height="50" rx="6" fill="currentColor" opacity="0.5" />
          <text x="115" y="290" textAnchor="middle" fill="white" fontSize="10">Web</text>
          
          <rect x="165" y="260" width="70" height="50" rx="6" fill="currentColor" opacity="0.5" />
          <text x="200" y="290" textAnchor="middle" fill="white" fontSize="10">Mobile</text>
          
          <rect x="250" y="260" width="70" height="50" rx="6" fill="currentColor" opacity="0.5" />
          <text x="285" y="290" textAnchor="middle" fill="white" fontSize="10">IoT</text>
          
          {/* Connections */}
          <line x1="200" y1="120" x2="95" y2="160" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="200" y1="120" x2="200" y2="160" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="200" y1="120" x2="305" y2="160" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="115" y1="260" x2="200" y2="120" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="200" y1="260" x2="200" y2="120" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="285" y1="260" x2="200" y2="120" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        </svg>
      ),
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % architectures.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [architectures.length])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-full h-full">
        {architectures.map((arch, index) => (
          <div
            key={arch.name}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {arch.svg}
          </div>
        ))}
      </div>
      {/* Architecture name indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <span className="text-xs font-medium opacity-70">
          {architectures[currentIndex].name}
        </span>
      </div>
    </div>
  )
}

export default ArchitectureAnimation
