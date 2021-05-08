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
    <Box as="article" position="relative" >
      <NextLink href={`${href}?back=true`} as={href}>
        <Link _hover={{ textDecoration: 'none' }}>

          <div
            style={{ padding: "00px", height: "450px", borderBottomColor: "#eee", borderBottomWidth: "1px" }}>
            <Box
              width="200"
              height="200"
              borderRadius="0px"
              bgImage={`url(${story.url})`}
              bgSize="cover"
              bgPosition="center"
              color="white"
            ></Box>
            <Box>
              <Text noOfLines={1} style={{ fontSize: ".7em" }}>Story about {story.author}</Text>
              <Heading noOfLines={3} as="h5" style={{ fontFamily: "poppins,sans-serif", lineHeight: "1.45", fontSize: "1em", marginTop: "1em" }}>{story.title}</Heading>
              <Text noOfLines={5} style={{ color: "#555", fontFamily: "font pt sans,sans-serif", fontSize: "1em", marginTop: "1em" }}>{story.shortdescription}</Text>
            </Box>

          </div>

        </Link >
      </NextLink >
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
    <Box >

      <ContentBox style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <span style={{ color: "#044279", fontSize: "2em", fontWeight: "bold", marginBottom: "1em" }}>
          {storytype}
        </span>
        <Text style={{ color: "#555", fontFamily: "font pt sans,sans-serif", marginBottom: "1em"  }}>{storytitle}</Text>
        <SimpleGrid
          as="main"
          columns={[2, null, 3]}
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
