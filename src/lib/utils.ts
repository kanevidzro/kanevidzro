import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function readingTime(html: string, wpm = 200) {
  const textOnly = html.replace(/<[^>]+>/g, '').trim()
  if (!textOnly) return '0 min read'
  const wordCount = textOnly.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wpm)
  return `${minutes} min read`
}
