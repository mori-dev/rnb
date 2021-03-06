// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { CardItem } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<CardItem />).toJSON()
  expect(tree).toMatchSnapshot()
})
