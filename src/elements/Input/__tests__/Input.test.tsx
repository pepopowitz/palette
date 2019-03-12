import { mount } from "enzyme"
import React from "react"
import { Input } from "../Input"

describe(Input, () => {
  const getWrapper = () => {
    return mount(<Input />)
  }

  it("shows an input box", () => {
    const wrapper = getWrapper()
    expect(wrapper.find("input").length).toEqual(1)
  })
})
