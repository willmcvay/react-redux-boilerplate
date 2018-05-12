import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import ChildComponent from '../../src/components/child-component'

describe('ChildComponent', function () {
  it('should render a component', function () {
    const component = mount(<ChildComponent />)
    expect(component.find('div').first().text()).to.contain('I Am A Child')
  })
})