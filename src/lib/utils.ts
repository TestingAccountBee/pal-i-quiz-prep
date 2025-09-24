import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import React from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTextWithLineBreaks(text: string) {
  // Handle both literal \n and actual newline characters
  return text.split(/\\n|\n/).map((line: string, index: number, array: string[]) => (
    React.createElement('span', { key: index }, 
      line,
      index < array.length - 1 && React.createElement('br')
    )
  ));
}
