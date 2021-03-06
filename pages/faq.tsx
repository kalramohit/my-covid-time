import { Box, Heading, Link, Text } from '@chakra-ui/react'
import styles from '../styles/FaqPage.module.css'
import ContentBox from '../components/common/ContentBox'
import HeadTags from '../components/common/HeadTags'
import AppCarousel from '../components/common/banner'

export default function FAQ() {
  return (
    <div className={styles.faq}>
      <HeadTags
        title="Frequently Asked Questions"
        description="View our list of Frequently Asked Questions to learn more about how the site began, moderation guidelines and how we protect your privacy."
      />

      <ContentBox>
        <Heading as="h1" size="2xl" pb={6}>
          Frequently Asked Questions
        </Heading>

        <Box pb={6}>
          <Heading as="h2" size="l" pb={3}>
            Why does this website exist?
          </Heading>
          <Text>
            The year 2020 will no doubt be etched in the memory of all human beings around the world for many years to come. When on one hand millions succumbed to the untamed virus , positive outcomes as collaboration, community service and empathy for those in need sprung up in its wake.
            The real time stories will set up an account for posterity to read and reflect upon that humanity is one religion  above all man made prejudices and that positive spirit and compassion are unfailingly powerful weapons to combat emotional turmoil.
        <br />
            <br />
            The site is created to share inpirational and lesson learnt stories of COVID-19 time.

          </Text>
        </Box>

        <Box pb={6}>
          <Heading as="h2" size="l" pb={3}>
            Can anyone share a story? How do we know if they’re true?
          </Heading>
          <Text>
            <p>
              Anyone over the age of 18 can submit their story. While our focus is currently anywhere
              in India, we welcome stories from anyone throughout World.
            </p>

            <p>
              In order to keep you safe and establish trust with visitors, the content will be
              moderated using the following guidelines:
            </p>
            <ol>
              <li>
                Content must be respectful, authentic, and captures their own or another’s story
              </li>
              <li>Content isn’t defamatory or bullying anyone</li>
              <li>
                It’s not self-promoting (i.e. sell a product/business) or encouraging illegal
                activity
              </li>
              <li>It’s not racist, homophobic, sexist, ableist</li>
              <li>Does not contain hate speech</li>
              <li>Does not promote or encourage self-harm</li>
              <li>
                For storytellers who wish to remain anonymous, their content does not have any
                personally identifiable information.
              </li>
              <li>
                Stories should not have personal identifying information about other people impacted
                by COVID-19 without their consent
              </li>
            </ol>

            <p>
              A story that does not meet these guidelines will not be shared publicly. If you have
              any questions or concerns, reach out to{' '}
              <a href="mailto:info@mycovidtime.in">info@mycovidtime.in</a>.
            </p>
          </Text>
        </Box>

        <Box pb={6}>
          <Heading as="h2" size="l" pb={3}>
            Who can access private data?
          </Heading>
          <Text>
            You have full control over who your information will be shared with — nobody else will
            have access to any personally identifiable information. We take your privacy seriously
            and have taken this into consideration at every step. This site does not use cookies or
            any third-party tracking tools. We use{' '}
            <Link href="https://app.usefathom.com/share/RVQXQDGO/MyCovidTime.in#/" isExternal>
              Fathom
            </Link>{' '}
            to generate simple traffic metrics. Fathom does not track any personally identifiable
            information.
          </Text>
        </Box>

        <Box pb={6}>
          <Heading as="h2" size="l" pb={3}>
            Why might the media want to follow-up with storytellers? Is MyCovidTime.in a direct
            line to media coverage?
          </Heading>
          <Text>
            <p>
              MyCovidTime.in is not a direct line to media coverage. While the untold stories of
              the pandemic are important and we expect that the media may be interested in learning
              more, they will only contact you if you have given express consent for this.
            </p>

            <p>
              We expect that members of the media will respect the privacy of those who have shared
              their stories here and only contact storytellers by{' '}
              <a
                href="https://kvmhxg5ojy6.typeform.com/to/gUsoYkft"
                target="_blank"
                rel="noreferrer"
              >
                signing up for our media list
              </a>
              .
            </p>
          </Text>
        </Box>
        <Box pb={6}>
          <Heading as="h2" size="l" pb={3}>
            Will any companies, media, or the government be able to find out that I posted this if I
            choose to remain anonymous?
          </Heading>
          <Text>
            <strong>No.</strong> Unless you have specifically consented to share your name publicly
            or with the media, no one else will have access to any personally identifiable
            information you have provided during story submission. We respect your choice.
          </Text>
        </Box>
        <Box pb={6}>
          <Heading as="h2" size="l" pb={3}>
            Who’s paying for this?
          </Heading>
          <Text>
            This page was built by volunteers and is fully funded by  voulnteers.
          </Text>
        </Box>
        <Box pb={6}>
          <Heading as="h2" size="l" pb={3}>
            Who built the site?
          </Heading>
          <Text>
            We are a group of concerned Indians We believe the power of storytelling is an effective means
            to inspire, claim & motivate people at this difficult time and also drive corporate & government leaderhips for betterment of common man. Please view our <Link href="/about/">About</Link>
             page to view our full list of contributors.
          </Text>
        </Box>
        <Box pb={6}>
          <Heading as="h2" size="l" pb={3}>
            Are the website creators affiliated with any group?
          </Heading>
          <Text>
            No, we are not affiliated to any political group or agenda. We are simply a collection             of concerned citizens concerned by the COVID-19 and we believe individual stories are important assests of a big nation like India.
          </Text>
        </Box>
      </ContentBox>
    </div>
  )
}
