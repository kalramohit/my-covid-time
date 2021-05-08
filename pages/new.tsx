import Link from 'next/link'
import { Heading, Text } from '@chakra-ui/react'
import ContentBox from '../components/common/ContentBox'
import StoryForm from '../components/stories/StoryForm'
import HeadTags from '../components/common/HeadTags'
import AppCarousel from '../components/common/banner'

export default function CreateStory() {
  return (
    <>
      <HeadTags
        title="Share your experiences of these unprecedented times"
        description="Let the world hear about YOUR own experience of this COVID-19 pandemic. Please join our effort to create an archive of experience during these difficult times."
      />
      <AppCarousel />
      <ContentBox>
        <Heading as="h1" size="lg" pb={4}>
          Share your experiences of these unprecedented times
        </Heading>
        <Text>
          Let the world hear about YOUR own experience of this COVID-19 pandemic.  Please join our effort to create an archive of experience during these difficult times.
          Over the past weeks, maybe months, you have been taking action and developing many creative ideas to face these challenging times, whether by helping your community, finding innovative learning ways, keeping a positive spirit, taking care of your relatives and loved ones, and much much more.
        </Text>
        <Text>
          <br />
          You may also share stories about your own experiences as common citizen or  healthcare warriors, frontline workers, colleagues , neighbours, workspace or anyone who you believe has done something inspirational , motivating or shown the true leadership.
        </Text>
        <Text fontWeight="bold" >
          <br />
          This is an open invitation to all of you to share your stories or stories known to you and inspire us all. We will publish your story after doing validation and formatting.
        </Text>
        <Text>
          <br />
          You may submit your story over the email or filling up below form. In case if you would like to share images along with your story, please share the story over the email.
          <br />
          <br />
          You can email the story at this address <strong><a className="chakra-link css-1gr1s6a" href="mailto:info@mycovidtime.in">info@mycovidtime.in</a></strong>
        </Text>
        <Text pt={4} pb={2} >
          Please read our <span style={{ fontWeight: "bold" }}><Link href="/faq">FAQ</Link></span> for validation process.
        </Text>
        <StoryForm />
      </ContentBox>
    </>
  )
}
