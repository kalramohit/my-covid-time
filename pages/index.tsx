import NextLink from 'next/link'
import { Box, Center, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react'
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
        <ContentBox style={{ paddingBottom: "0px" }}>
          <Heading as="h1" size="l" pb={5} style={{ color: "#555", fontFamily: "font pt sans,sans-serif", lineHeight: "1.47" }}>
            When we will look back at this difficult time, just numbers won't tell individual stories of  pain,trauma, hope, resilience and inspiration during the coronavirus pandemic.
        </Heading>
        </ContentBox>
        <Box pb={6}>
          <ContentBox style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Text size="l" pb={3} style={{ color: "#555", fontFamily: "font pt sans,sans-serif", lineHeight: "1.47" }}>
              Many stories of optimism, resilience, and hope have emerged from India during these trying times. Doctors, nurses, front line workers, leaders, volunteers, common men and many others are working round the clock to provide life-saving care to patients affected by COVID-19.We don't want to loose stories forever.

            </Text>
          </ContentBox>
          <Box backgroundColor="#eee" style={{ padding: "0px", margin: "0px" }}>
            <ContentBox style={{ paddingBottom: "10px", paddingTop: "10px" }}>
              <Heading as="h2" size="l" pb={5} color="#044279">
                It is a humble endeavor to record all such stories and applaud the relentless efforts of every citizen involved and tribute to those whom we lost during the crisis. Please join our effort to create an archive of experience during these unprecedented times. We’re featuring new stories weekly, with the permission of contributors.
            </Heading>
              <Box
                padding="2px"
                borderRadius="8px"
                width="200px"
                backgroundColor="#03193D"
                colorScheme="teal"
                color="white"
              >
                <NextLink href="/new" passHref>
                  <Link>
                    <Text paddingLeft="5px" TextAlign="center"><span><b> Share your own story</b></span></Text>
                  </Link>
                </NextLink>
              </Box>
            </ContentBox>
          </Box>


        </Box>

        <StoryFeed storytitle="We all will always remain indebted to those who sacrificed their lives in line of duty during pandemic. Their sacrifice reflects their commitment towards humankind." storytype='Supreme Sacrifices' stories={supremesacrifiessstories} />
        <StoryFeed storytitle="We salute and appreciate the Doctors, Nurses and Care-Givers, for demonstrating courage, compassion and selflessness, unlike anything we’ve seen." storytype='Healthcare Warriors' stories={healthcarestories} />
        <StoryFeed storytitle="Your dedication, commitment and selfless service during these troubled times is humbling. You are our everyday heroes." storytype='Frontline Warriors' stories={frontlinestories} />
        <StoryFeed storytitle="No battle is won alone! We are proud of those kind and gentle citizens who volunteered a helping hand during the unprecedented times. Every small contribution makes the world a better place." storytype='Concerned Citizens' stories={commoncitizensstories} />
        <StoryFeed storytitle="We appreciate the great visionaries for navigating  recovery during the pandemic with decision and initiatives bound with optimism, deliberate calmness, empathy and care." storytype='Leadership Examples' stories={leadershipstories} />
        <StoryFeed storytitle="We all have gone though this tough time and have some story to tell." storytype='My Own Covid Story' stories={myowncovidstories} />
        <StoryFeed storytitle="This has changed my life forever." storytype='Life Changes Post Covid' stories={lifeaftercovidstories} />

      </Box >
      <FloatingRibbon>

        <NextLink href="/new" passHref>
          <Link>
            <Box style={{ backgroundColor: "" }}>
              <Text TextAlign="center"><span><b>Share your own story</b></span> to Inspire and motivate the world with an untold story or experience during the pendemic or may share with the world how it has changed your life</Text>
            </Box>
          </Link>
        </NextLink>
      </FloatingRibbon>
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
      shortdescription: allPosts.results[i].data.description.length > 0 ? allPosts.results[i].data.description[0].text : allPosts.results[i].data.title[0].text,
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
