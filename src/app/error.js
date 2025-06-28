"use client"
import React from 'react'

const error = () => {
  return (
    <div>
      <div className="flex h-screen w-full items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-lg text-gray-700">Something went wrong. Please try again later.</p>
        </div>
      </div>
    </div>
  )
}

export default error