import { Story } from '@prisma/client'

export type StoryThumnbnail = {
  id: string
  storytype: string | null
  shortdescription: string | null
  title: string
  url: string | null
  contentWarning: boolean
  author: string
}

export const storyTypeLabel = {
  'sacrificing': 'Sacrificing',
  'great-leadership': 'Setting Leadership Example',
  'healthcare-warriors': 'Healthcare Heros',
  'frontline-warriors': 'Frontline Warriors',
  'commonman-contribution': 'Common Man Contributions',
  'my-covid-time': 'My own covid time',
  'howcovidchangedthelife': 'How Covid changed my life'
}

export const categoryLabel = {
  'concerned-citizen': 'Concerned Citizen',
  'essential-worker': 'Essential Worker',
  'healthcare-provider': 'Healthcare Provider',
  educator: 'Educator',
  'small-business-owner': 'Small Business Owner',
  'patient-family-member': 'Patient or Family Member',
}

export function storyCategoryLabel({ category }: Story): string {
  return categoryLabel[category] || 'Other'
}

export function storyImage({ category }: Story): string {
  switch (category) {
    case 'concerned-citizen':
    case 'essential-worker':
    case 'healthcare-provider':
    case 'educator':
    case 'small-business-owner':
    case 'patient-family-member':
      return `/img/categories/${category}.jpg`
    case 'other':
    default:
      return '/img/categories/other.jpg'
  }
}

export function storyName({ displayName }: Story): string {
  return displayName || 'Anonymous'
}

export function storyCite({ displayName, postal }: Story) {
  return displayName ? `${displayName} from ${postal}` : `From ${postal}`
}

export function storyDate({ createdAt }: Story): string {
  return new Date(createdAt).toDateString()
}

export function storyParagraphs({ content }: Story): string[] {
  return content.split('\n').filter((p) => p)
}
