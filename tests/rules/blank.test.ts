import {ESLintUtils} from '@typescript-eslint/experimental-utils'
import rule from '../../src/rules/blank'

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser'
})

ruleTester.run('enforce-import-boundaries', rule, {
  valid: [
    {
      code: `
      import foo from 'foo.ts';
      `
    }
  ],
  invalid: []
})
