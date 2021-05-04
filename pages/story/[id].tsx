import { useRouter } from 'next/router'
import { queryRepeatableDocuments } from '../../utils/queries'
import { Client } from "../../utils/prismicHelpers";
import { RichText } from "prismic-reactjs";
import Head from "next/head";
import { postStyles } from "../../styles/posts";
import { Heading, IconButton, Stack, Text } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

// Project components
import { BackButton, SliceZone } from "../../components/post";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useClipboard,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

import { Story } from '@prisma/client'
import { get, list } from '../../lib/api/stories'
import generateSocial from '../../lib/social'
import StoryDetail from '../../components/stories/StoryDetail'
import FloatingRibbon, { Button } from '../../components/common/FloatingRibbon'
import HeadTags from '../../components/common/HeadTags'
import { storyImage } from '../../components/stories/model'
import { ResponseError } from '../../lib/errors'
import { GetStaticPropsResult } from 'next'
import ErrorPage from '../404'
import { CSSProperties } from 'react'
import CustomShareContainer from '../../components/common/CustomShareContainer'
import { LinkIcon } from '@chakra-ui/icons'

interface StoryProps {
  success: true
  story: Story
  url?: string
}

interface ErrorCodeProps {
  success: false
  errorCode: number
  errorMessage: string
}

type StoryPageProps = StoryProps | ErrorCodeProps

const shareIconSize = 64
const buttonStyle: CSSProperties = { marginRight: '12px', marginBottom: '12px' }


/**
 * Post page component
 */
const Post = ({ post }) => {
  if (post && post.data) {
    const hasTitle = RichText.asText(post.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";

    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <div className="main">
          <Box>
            <StoryDetail story={story} onClose={handleClose} onShare={onOpen} />
          </Box>

          <div className="outer-container">
            <BackButton />
            <h1>{title}</h1>
          </div>
          <SliceZone sliceZone={post.data.body} />
        </div>

      </div>
    );
  }

  return null;
};
export default function StoryPage(props): JSX.Element {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const url = props.success ? `${process.env.BASE_URL}/story/${props.story.id}` : ''
  const { onCopy } = useClipboard(url)
  const toast = useToast()

  /**
   * Return the custom error page with the relative status code. This can allow
   * passing different error codes like 404 in case a page is not found or a 500
   * in case of a server error.
   */
  if (props.success === false) {
    return <ErrorPage code={props.errorCode} message={props.errorMessage} />
  }

  const { story } = props

  // If we came from the feed, go back on cancel. If not, navigate forward to the feed.
  function handleClose(): void {
    router.query.back === 'true' ? router.back() : router.push('/')
  }

  function handleURLCopy() {
    onCopy()

    toast({
      position: 'top',
      title: 'Link copied',
      status: 'success',
    })
  }

  // Get Story details
  const description = "test"
  const emailSubject = 'Help me amplify this story'

  return (
    <>
      <HeadTags title={story.title} description={story.content} previewImage={storyImage(story)} />
      <Box>
        <StoryDetail story={story} onClose={handleClose} onShare={onOpen} />
      </Box>
      <Box margin="5">
        <SliceZone sliceZone={story.data.body} />
        <br />
      </Box>
      <style jsx global>
        {postStyles}
      </style>
      <FloatingRibbon>
        <Button onClick={onOpen} my={"5px"}>
          Share This Story
        </Button>
        <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerHeader>Share via</DrawerHeader>

              <DrawerBody>
                <Flex alignItems="flex-start" flexWrap="wrap">
                  <TwitterShareButton
                    url={url}
                    title={description}
                    via="MyCOVIDStory_IN"
                    style={buttonStyle}
                  >
                    <TwitterIcon size={shareIconSize} />
                  </TwitterShareButton>

                  <FacebookShareButton url={url} quote={description} style={buttonStyle}>
                    <FacebookIcon size={shareIconSize} />
                  </FacebookShareButton>

                  <WhatsappShareButton url={url} title={description} style={buttonStyle}>
                    <WhatsappIcon size={shareIconSize} />
                  </WhatsappShareButton>

                  <EmailShareButton
                    url={url}
                    subject={emailSubject}
                    body={description}
                    style={buttonStyle}
                  >
                    <EmailIcon size={shareIconSize} />
                  </EmailShareButton>

                  <CustomShareContainer style={buttonStyle} onClick={handleURLCopy}>
                    <LinkIcon color="#fff" w={8} h={8} />
                  </CustomShareContainer>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </FloatingRibbon>
    </>
  )
}

// Return the latest story IDs to pre-render those pages on the server with getStaticProps().
// If a page with another ID is requested, getStaticProps() will be called to fetch the data.
// The page will be rendered on the server, and the page will be cached for future requests.
// Details: https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
//
export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'post')
  return {
    paths: documents.map(doc => `/story/${doc.uid}`),
    fallback: true,
  }
}

interface GetStaticProps {
  params: {
    id: string
  }
}

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const ref = undefined
  const story = await Client().getByUID("post", params.id, ref ? { ref } : null) || {}
  return {
    props: {
      preview,
      story
    }
  }
}

