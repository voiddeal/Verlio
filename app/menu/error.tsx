"use client"

import ErrorHandler from "@/components/ErrorHandler"

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return <ErrorHandler error={error} reset={reset} />
}
