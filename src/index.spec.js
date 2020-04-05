import React from 'react'
import {mount} from 'cypress-react-unit-test'
import Goo from './index'

// from https://codesandbox.io/s/ppxnl191zx
describe('Goo', () => {
  it('follows the mouse', () => {
    mount(<Goo />)
    cy.get('body')
      .trigger('mouseover')
      .wait(500)
      .trigger('mousemove', {clientX: 500, clientY: 600})
      .wait(700)
      .trigger('mousemove', {clientX: 500, clientY: 800})
      .wait(700)
      .trigger('mousemove', {clientX: 200, clientY: 600})
      .wait(700)
      .trigger('mousemove', {clientX: 500, clientY: 800})
  })
})
