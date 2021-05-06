// This validation schema is shared between client and server
// Used in: `/components/form`, '/pages/api/stories/index.ts'

import * as yup from 'yup'

export const TITLE_CHAR_LIMIT = 140
export const STORY_WORD_LIMIT = 1000

const schema = yup.object().shape({
  title: yup
    .string()
    .max(TITLE_CHAR_LIMIT, "Your title can't be more than ${max} characters")
    .required('Title is required'),
  content: yup
    .string()
    .test('word count', `Story can't be more than ${STORY_WORD_LIMIT} words`, (value) =>
      // If no value, we return true since it passes validation, otherwise coerce word length check to boolean
      !value ? true : Boolean(value.trim().split(/\s+/).length <= STORY_WORD_LIMIT)
    )
    .required('A story is required'),

  storytype: yup.string().required('Please choose a story type'),
  category: yup.string().required('Please choose a category'),
  anonymous: yup.boolean().required(),
  displayName: yup
    .string()
    .max(200, 'Display name is too long')
    .when('anonymous', {
      is: false,
      then: yup
        .string()
        .required(
          "You must include your name since you've agreed to be contacted. Choose 'Anonymously' above if you don't want to share your name"
        ),
    }),
  contact: yup.boolean().required(),
  consent: yup.boolean().isTrue('You must provide your consent to continue'),
})

export default schema
