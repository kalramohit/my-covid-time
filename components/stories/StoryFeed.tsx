import NextLink from 'next/link'
import { Box, Flex, Heading, Link, SimpleGrid } from '@chakra-ui/react'
import { categoryLabel, storyCategoryLabel, storyImage, storyCite } from './model'
import ContentBox from '../common/ContentBox'
import Label from '../common/Label'
import { Story } from '@prisma/client'



interface StorySummaryProps {
  story: Story
}

function StorySummary({ story }: StorySummaryProps) {
  const href = `/story/${story.id}`

  return (
    <Box as="article">
      <NextLink href={`${href}?back=true`} as={href}>
        <Link _hover={{ textDecoration: 'none' }}>
          <Box
            borderRadius="8px"

            bgSize="cover"
            bgPosition="center"
            color="white"
          >
            <Box p={[4, null, null, 6]} borderRadius="8px" >
              <Flex>
                {story.contentWarning ? (
                  <Label color="#C01313" backgroundColor="white">
                    Warning: Sensitive Content
                  </Label>
                ) : (
                  <Label visibility={categoryLabel[story.category] ? 'visible' : 'hidden'}>
                    {storyCategoryLabel(story)}
                  </Label>
                )}
              </Flex>
              <Box minH="6em" my={[4, null, null, 6]}>
                <Heading
                  as="h3"
                  fontSize="2xl"
                  fontWeight={600}
                  fontStyle="italic"
                  noOfLines={3}
                  _before={{ content: `"“"` }}
                  _after={{ content: `"”"` }}
                  bg="rgba(0, 0, 0, 0.5)"
                >

                  {story.title}
                </Heading>
              </Box>
              <Box lineHeight={1.2}>{story.title}</Box>
            </Box>
          </Box>

        </Link>
      </NextLink>
    </Box >
  )
}

interface StoryFeedProps {
  storytype: string
  stories: Story[]
}

export default function StoryFeed({ storytype, stories }: StoryFeedProps) {
  return (
    <Box>

      <ContentBox>
        <Heading as="h2" mb={[6, null, 8]} color="#55099D">
          {storytype}
        </Heading>
        <SimpleGrid
          as="main"
          columns={[1, null, 2]}
          spacingY={[6, null, 8]}
          spacingX={[6, null, 10, 16]}
        >
          {stories.map((story) => (
            <StorySummary key={story.id} story={story} />
          ))}
        </SimpleGrid>
      </ContentBox>
    </Box>
  )
}
