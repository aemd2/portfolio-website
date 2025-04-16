"use client"

import React from 'react'

interface PhoneMockupProps {
  imageSrc: string
  imageAlt: string
}

export function PhoneMockup({ imageSrc, imageAlt }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto p-4" style={{ width: '240px', height: '480px' }}>
      {/* Phone frame */}
      <div className="absolute inset-4 bg-black rounded-[32px] overflow-hidden shadow-xl">
        {/* Screen bezel */}
        <div className="absolute inset-[3px] rounded-[29px] overflow-hidden border-[1px] border-gray-800">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80px] h-[20px] bg-black rounded-b-xl z-10"></div>
          
          {/* App Screenshot */}
          <div className="absolute inset-0 bg-white overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'top center' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 