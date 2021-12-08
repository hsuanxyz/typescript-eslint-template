import {createEslintRule} from '../utils/create-eslint-rule'

export type MessageIds = 'BlankMessageId1' | 'BlankMessageId2'
export type Options = [{test: string[]}]
export const RULE_NAME = 'blank'

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'description',
      recommended: 'error'
    },
    fixable: 'code',
    hasSuggestions: true,
    schema: [
      {
        type: 'object',
        properties: {
          test: {
            type: 'array',
            items: {
              type: 'string'
            }
          }
        }
      }
    ],
    messages: {
      BlankMessageId1: 'BlankMessage 1',
      BlankMessageId2: 'BlankMessage 2'
    }
  },
  defaultOptions: [
    {
      test: []
    }
  ],
  create(context, [{test}]) {
    const filename = context.getFilename()
    console.log(filename)
    console.log(test)
    return {
      ImportSpecifier(data) {
        console.log(data)
      }
    }
  }
})
