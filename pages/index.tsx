import NextLink from 'next/link'
import { Box, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react'
import ContentBox from '../components/common/ContentBox'

import { list, listwithstorytype } from '../lib/api/stories'
import AppCarousel from '../components/common/banner'
import StoryFeed from '../components/stories/StoryFeed'
import FloatingRibbon, { Button } from '../components/common/FloatingRibbon'
import SiteLayout from '../layouts/Default'
import { StoryThumnbnail } from '../components/stories/model'
import { Prisma, Story } from '@prisma/client'
import { ReactNode } from 'react'
import HeadTags from '../components/common/HeadTags'

import Prismic from '@prismicio/client'
import { Client } from "../utils/prismicHelpers";

function FeedHeader() {
  return (
    <AppCarousel />
  )
}
interface MainPageProps {
  healthcarestories: StoryThumnbnail[],
  leadershipstories: StoryThumnbnail[],
  frontlinestories: StoryThumnbnail[],
  commoncitizensstories: StoryThumnbnail[],
  supremesacrifiessstories: StoryThumnbnail[],
  myowncovidstories: StoryThumnbnail[],
  lifeaftercovidstories: StoryThumnbnail[]
}

const MainPage = ({
  healthcarestories,
  frontlinestories,
  leadershipstories,
  commoncitizensstories,
  supremesacrifiessstories,
  myowncovidstories,
  lifeaftercovidstories
}: MainPageProps) => {
  return (
    <>
      <HeadTags>
        <link rel="canonical" href="https://www.mycovidtime.in" />
      </HeadTags>
      <FeedHeader />
      <Box>
        <ContentBox>
          <Heading as="h1" size="xl" pb={5}>
            Because we believe just numbers don't tell individual stories of  pain,trauma, hope, resilience and inspiration during the coronavirus pandemic
        </Heading>
          <Box pb={6}>
            <Heading as="h2" size="l" pb={3}>
              Doctors, nurses, front line workers,leaderships,volunteers, common man and all other  are working around the clock to provide life-saving care to patients affected by COVID-19.
          </Heading>
            <Text>
              Around the India their are so many stories of hope, resilience, and inspiration during this time.
              It's an attempt to show gratitude and respect of their efforts and also motivate fellow citizens to remain positive at this difficult time and contribute to society in their best possible way.
              <br /><br />
              Need of the hour is to read ,share and contribute stories of positivity, motivation and survivals.
          </Text>
          </Box>
        </ContentBox>
        <StoryFeed storytype='Supreme Sacrifices' stories={supremesacrifiessstories} />
        <StoryFeed storytype='Healthcare Warriers' stories={healthcarestories} />
        <StoryFeed storytype='Frontline Warriers' stories={frontlinestories} />
        <StoryFeed storytype='Concerned Citizens' stories={commoncitizensstories} />
        <StoryFeed storytype='Leadership Examples' stories={leadershipstories} />
        <StoryFeed storytype='My Own Covid Story' stories={myowncovidstories} />
        <StoryFeed storytype='Life Changes Post Covid' stories={lifeaftercovidstories} />

      </Box>

    </>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const client = Client()
  const ref = undefined
  const allPosts = await client.query(
    Prismic.Predicates.at("document.type", "post"), {
    orderings: "[my.post.date desc]",
    ...(ref ? { ref } : null)
  })

  const seedData: StoryThumnbnail[] = []

  for (let i = 0; i < allPosts.results.length; i++) {
    const seed = {
      title: allPosts.results[i].data.title[0].text,
      id: allPosts.results[i].uid,
      url: allPosts.results[i].data.thumbnail[0].url,
      storytype: allPosts.results[i].data.storytype,
      contentWarning: false,
      author: allPosts.results[i].data.author
    }
    seedData.push(seed)
  }

  const healthcarestories = seedData.filter(function (el) {
    return el.storytype == "Healthcare Warriors";
  }
  );

  const frontlinestories = seedData.filter(function (el) {
    return el.storytype == "Frontline Workers";
  }
  );

  const commoncitizensstories = seedData.filter(function (el) {
    return el.storytype == "Concerned Citizen contribution";
  }
  );

  const supremesacrifiessstories = seedData.filter(function (el) {
    return el.storytype == "Supreme Sacrifices";
  }
  );

  const leadershipstories = seedData.filter(function (el) {
    return el.storytype == "Leadership Examples";
  }
  );


  const myowncovidstories = seedData.filter(function (el) {
    return el.storytype == "My Own Covid Story";
  }
  );
  const lifeaftercovidstories = seedData.filter(function (el) {
    return el.storytype == "Life Changes Post Covid";
  }
  );

  return {
    props: {
      frontlinestories,
      supremesacrifiessstories,
      healthcarestories,
      leadershipstories,
      commoncitizensstories,
      myowncovidstories,
      lifeaftercovidstories
    },
    revalidate: 60, // 1 minute
  }
}

const MainPageLayout = (page: ReactNode) => <SiteLayout navPosition="sticky">{page}</SiteLayout>

MainPage.getLayout = MainPageLayout

export default MainPage
