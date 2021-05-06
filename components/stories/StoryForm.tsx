import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import Router from 'next/router'

import storySchema, { STORY_WORD_LIMIT, TITLE_CHAR_LIMIT } from '../../lib/storySchema'

type LoginFormInputs = {
  storytype: string
  title: string
  content: string
  postal: string
  category: string
  anonymous: string
  contactName?: string
  displayName?: string
  consent: boolean
}

const initialValues = {
  storytype: '',
  title: '',
  content: '',
  postal: 'P3P',
  category: '',
  anonymous: 'true',
  contact: false,
  contactName: '',
  displayName: '',
  email: '',
  phone: '',
  twitter: '',
  consent: false,
}

const FIELD_PADDING = '4'
const OPTIONAL_FIELD_PADDING = '2'

export default function StoryForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={storySchema}
      onSubmit={async (values: LoginFormInputs, actions) => {
        console.log(values);
        // Remove any details the user filled in but then decided not to share.
        if (values.anonymous === 'true') {
          values.displayName = ''
        }

        try {
          actions.setSubmitting(true)
          const result = await fetch(`/api/stories`, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'content-type': 'application/json',
            },
          })
          if (result.ok) {
            actions.setSubmitting(false)
            Router.push('/thanks')
          } else {
            console.error('something went wrong')
          }
        } catch (e) {
          console.error(e)
          actions.setSubmitting(false)
        }
      }}
    >
      {(props) => (
        <Form>
          {/* Story Type */}
          <Field name="storytype">
            {({ field, form }) => (
              <FormControl
                pt={FIELD_PADDING}
                pb={FIELD_PADDING}
                isRequired
                isInvalid={form.errors.storytype && form.touched.storytype}
              >
                <FormLabel htmlFor="storytype">Story is about:</FormLabel>
                <Select {...field} name="storytype" id="storytype" placeholder="Choose one">
                  <option value="sacrificing">About someone sacrifies</option>
                  <option value="great-leadership">Setting Leadership Example</option>
                  <option value="healthcare-warriors">Healthcare Warriors</option>
                  <option value="frontline-workers">Frontline-Workers</option>
                  <option value="commonman-contribution">Common man contribution</option>
                  <option value="my-covid-time">My own covid time</option>
                  <option value="howcovidchangedthelife">How covid bring a change</option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{form.errors.category}</FormErrorMessage>
                <FormHelperText>Choose the one that best describes the purpose of story.</FormHelperText>
              </FormControl>
            )}
          </Field>
          {/* Anonymous */}
          <Field name="anonymous">
            {({ field, form }) => {
              return (
                <FormControl
                  pt={FIELD_PADDING}
                  pb={FIELD_PADDING}
                  isInvalid={form.errors.anonymous && form.touched.anonymous}
                >
                  <FormLabel as="legend" htmlFor="anonymous">
                    I want the story published:
                  </FormLabel>
                  <RadioGroup {...field} name="anonymous" id="anonymous">
                    <Stack direction="column">
                      <Radio {...field} value="true">
                        Anonymously
                      </Radio>
                      <Radio {...field} value="false">
                        With my name below
                      </Radio>
                    </Stack>
                  </RadioGroup>
                  <FormErrorMessage>{form.errors.anonymous}</FormErrorMessage>
                </FormControl>
              )
            }}
          </Field>

          {props.values.anonymous === 'false' && (
            <Field name="displayName">
              {/* Display Name */}
              {({ field, form }) => (
                <FormControl
                  pt={FIELD_PADDING}
                  pb={FIELD_PADDING}
                  isRequired
                  isInvalid={form.errors.displayName && form.touched.displayName}
                >
                  <FormLabel htmlFor="displayName">Name to display</FormLabel>
                  <Input {...field} id="displayName" placeholder="Your name" />
                  <FormErrorMessage>{form.errors.displayName}</FormErrorMessage>
                  <FormHelperText>
                    This name <em>will</em> appear on the site.
                  </FormHelperText>
                </FormControl>
              )}
            </Field>
          )}

          {/* Title */}
          <Field name="title">
            {({ field, form }) => (
              <FormControl
                pt={FIELD_PADDING}
                pb={FIELD_PADDING}
                isRequired
                isInvalid={form.errors.title && form.touched.title}
              >
                <FormLabel htmlFor="title">Enter a title or quote</FormLabel>
                <Textarea {...field} id="title" placeholder="Enter your story title" />
                <FormHelperText>{`Up to ${TITLE_CHAR_LIMIT} characters.`}</FormHelperText>
                <FormErrorMessage>{form.errors.title}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* Content */}
          <Field name="content">
            {({ field, form }) => (
              <FormControl
                pt={FIELD_PADDING}
                pb={FIELD_PADDING}
                isRequired
                isInvalid={form.errors.content && form.touched.content}
              >
                <FormLabel htmlFor="content">Please share your story</FormLabel>
                <Textarea {...field} id="content" placeholder="Enter your story content" />
                <FormHelperText>{`Up to ${STORY_WORD_LIMIT} words.`}</FormHelperText>
                <FormErrorMessage>{form.errors.content}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* Category */}
          <Field name="category">
            {({ field, form }) => (
              <FormControl
                pt={FIELD_PADDING}
                pb={FIELD_PADDING}
                isRequired
                isInvalid={form.errors.category && form.touched.category}
              >
                <FormLabel htmlFor="category">I am a:</FormLabel>
                <Select {...field} name="category" id="category" placeholder="Choose one">
                  <option value="concerned-citizen">Concerned citizen</option>
                  <option value="essential-worker">Essential worker</option>
                  <option value="healthcare-provider">Healthcare provider</option>
                  <option value="educator">Educator</option>
                  <option value="small-business-owner">Small business owner</option>
                  <option value="patient-family-member">Patient or patient family member</option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{form.errors.category}</FormErrorMessage>
                <FormHelperText>Choose the one that best describes you.</FormHelperText>
              </FormControl>
            )}
          </Field>


          {/* Consent */}
          <Field name="consent">
            {({ field, form }) => (
              <FormControl
                pt={FIELD_PADDING + 2}
                pb={FIELD_PADDING}
                isRequired
                isInvalid={form.errors.consent && form.touched.consent}
              >
                <FormLabel as="legend" htmlFor="consent">
                  Declaration and Consent
                </FormLabel>
                <Checkbox {...field} id="consent" name="consent">
                  I confirm this story is true and I have consent to share it and any photo
                  submitted.
                </Checkbox>
                <FormErrorMessage>{form.errors.consent}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button
            isFullWidth
            mt={4}
            backgroundColor="#03193D"
            colorScheme="teal"
            color="white"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit Story
          </Button>
        </Form>
      )}
    </Formik>
  )
}
