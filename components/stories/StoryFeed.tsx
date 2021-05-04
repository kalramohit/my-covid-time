import NextLink from 'next/link'
import { Text, Box, Flex, Heading, Link, SimpleGrid } from '@chakra-ui/react'
import { categoryLabel, storyCategoryLabel, storyImage, storyCite } from './model'
import ContentBox from '../common/ContentBox'
import Label from '../common/Label'
import { Story } from '@prisma/client'
import { StoryThumnbnail } from './model'


interface StorySummaryProps {
  story: StoryThumnbnail
}

function StorySummary({ story }: StorySummaryProps) {
  const href = `/story/${story.id}`

  return (
    <Box as="article">
      <NextLink href={`${href}?back=true`} as={href}>
        <Link _hover={{ textDecoration: 'none' }}>
          <Box
            marginTop="15px"
            height="350px"
            borderRadius="8px"
            bgImage={`url(${story.url})`}
            bgSize="cover"
            bgPosition="center"
            color="white"
          >
            <Box p={[4, null, null, 6]} borderRadius="8px" >
              <Flex>

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
              <Box lineHeight={1.2}>{story.author}</Box>
            </Box>
          </Box>

        </Link>
      </NextLink>
    </Box >
  )
}

interface StoryFeedProps {
  storytitle: string
  storytype: string
  stories: StoryThumnbnail[]
}

export default function StoryFeed({ storytitle, storytype, stories }: StoryFeedProps) {
  return (
    <Box>

      <ContentBox>
        <Heading as="h2" mb={[6, null, 8]} color="#55099D">
          {storytype}
        </Heading>
        <Text>{storytitle}<br /></Text>
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
