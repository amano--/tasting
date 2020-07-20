import React from 'react'
import { render, fireEvent } from '@testing-library/react'
// import { savePost as mockSavePost } from './api'
// import { Editor } from './post-editor-03-api'

const DEBUG = process.env.NODE_ENV === 'test'

type PropsType = { hoge: string; fuga: string }

test('renders a form with title, content, tags, and a submit button', () => {
  const props = { hoge: 'a' }

  // const props = { hoge: 'a' , fuga: null}

  const { hoge, fuga = 'fugafuga' } = props

  console.log(`hoge=${hoge} fuga=${fuga}`)
})
