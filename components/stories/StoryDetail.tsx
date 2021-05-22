import { Box, Flex, Heading, IconButton, Stack, Text } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { Story } from '@prisma/client'
import { ApplauseButton } from '../common/ApplauseButton';

import {
  categoryLabel,
  storyCategoryLabel,
  storyImage,
  storyName,
  storyDate,
  storyParagraphs,
} from './model'

import ContentBox from '../common/ContentBox'

import Label from '../common/Label'

import { ContentWarningBox } from '../common/Warnings'
import ShareSVG from '../icons/ShareSVG'

function StoryParagraphs(p: string, i: number) {
  return <Text key={i}>{p}</Text>
}

interface StoryDetailProps {
  story: Story
  onClose: () => void
  onShare: () => void
}

export default function StoryDetail({ story, onClose, onShare }) {
  return (
    <Box >
      <Box bgImage={`url(${story.data.thumbnail[0].url})`}
        height="400"
        bgSize="cover"
        bgPosition="top"
        color="white">

      </Box>
      <ContentBox>
        {story.contentWarning && <ContentWarningBox />}
        <Flex justifyContent="space-between">
          <Heading
            as="h1"
            my={[5, null, 10]}
            fontSize={['2xl', null, '4xl', '5xl']}
            fontWeight={600}
            fontStyle="italic"
          >
            {story.data.title[0].text}
          </Heading>
          <Flex>
            <IconButton
              size="md"
              mr={-2}
              py={2}
              variant="link"
              colorScheme="white"
              aria-label="Close"
              icon={<CloseIcon />}
              onClick={onClose}
            />
          </Flex>
        </Flex>
        <Text >      Story about {story.data.author}</Text>
        <Flex style={{ marginTop: 20 }}>
          <IconButton float="right" style={{ width: 70, height: 70, 'marginRight': '1em', 'borderRadius': '50%', 'border': '1px solid #ccc' }}
            size="md"
            variant="link"
            colorScheme="white"
            aria-label="Share"
            icon={<ShareSVG />}
            onClick={onShare}

          />
          <ApplauseButton />
        </Flex>
      </ContentBox>
    </Box >
  )
}
