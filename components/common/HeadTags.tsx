import Head from 'next/head'

const defaultTitle = 'Inspiring stories of COVID-19 in India'
const defaultDescription =
  "Stories of supreme sacrifices, hope, contributions, resilience and inspiration in most difficult times of the pendemic."
const defaultPreviewImage = 'https://images.prismic.io/sample-poc2/c479f527-06ed-4ca3-8050-ba2180127560_healthcare.jpg?auto=compress,format&rect=46,0,507,338&w=600&h=400'

interface HeadTagsProps {
  title?: string
  description?: string
  previewImage?: string
  children?: React.ReactNode
}

const TITLE_SUFFIX = 'MyCovidTime.in'
const DESCRIPTION_LENGTH = 170

export default function HeadTags({
  children,
  title = defaultTitle,
  description = defaultDescription,
  previewImage = defaultPreviewImage,
}: HeadTagsProps) {
  const generatedTitle = title == defaultTitle ? generateTitle(title, TITLE_SUFFIX) : title
  const generatedDescription = generateDescription(description, DESCRIPTION_LENGTH)
  const generatedPreviewImage = previewImage

  return (
    <Head>
      <title key="title">{generatedTitle}</title>
      <meta key="description" name="description" content={generatedDescription} />

      <meta key="og:title" property="og:title" content={generatedTitle} />
      <meta key="og:description" property="og:description" content={generatedDescription} />
      <meta key="og:image" property="og:image" content={generatedPreviewImage} />

      <meta key="twitter:title" name="twitter:title" content={generatedTitle} />
      <meta key="twitter:description" name="twitter:description" content={generatedDescription} />
      <meta key="twitter:image" name="twitter:image" content={generatedPreviewImage} />
      {children}


      
    </Head>
  )
}

// Limits the title string and appends our default suffix.
function generateTitle(title: string, suffix: string): string {
  if (title.length > 50) {
    return `${title.slice(0, 50)} | ${suffix}`
  } else {
    return `${title} | ${suffix}`
  }
}

// Limits description text to maxLength
function generateDescription(description: string, maxLength: number): string {
  return `${description.slice(0, maxLength)} ..`
}

function generatePreviewImageUrl(path: string): string {
  // strip leading slash
  const cleanPath = path.replace(/^\/+/, '')
  return `${process.env.BASE_URL}/${cleanPath}`
}
