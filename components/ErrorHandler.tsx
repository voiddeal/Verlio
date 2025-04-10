"use client"

import { useEffect } from "react"

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function ErrorHandler({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error:", error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Something went wrong
      </h1>
      <p className="text-gray-600 mb-6">
        We’re sorry, but an unexpected error occurred. Please try again or
        contact support if the issue persists.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
      >
        Try Again
      </button>
    </div>
  )
}
