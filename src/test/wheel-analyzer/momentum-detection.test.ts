import { recordPhases } from '../helper/recordPhases'
import swipeRight from '../fixtures/swipe-right.json'
import swipeRightFast from '../fixtures/swipe-right-fast.json'
import swipeLeft from '../fixtures/swipe-left-trackpad.json'
import swipeLeftFast from '../fixtures/swipe-left-fast-trackpad.json'
import swipeUp from '../fixtures/swipe-up-trackpad.json'
import swipeUpFast from '../fixtures/swipe-up-fast-trackpad.json'
import swipeDown from '../fixtures/swipe-down-trackpad.json'
import swipeDownFast from '../fixtures/swipe-down-fast-trackpad.json'

describe('momentum detection recognizes', () => {
  it('swipe right', () => {
    expect(recordPhases(swipeRight.wheelEvents)).toMatchSnapshot()
  })

  it('swipe right - fast', () => {
    expect(recordPhases(swipeRightFast.wheelEvents)).toMatchSnapshot()
  })

  it('swipe left', () => {
    expect(recordPhases(swipeLeft.wheelEvents)).toMatchSnapshot()
  })

  it('swipe left - fast', () => {
    expect(recordPhases(swipeLeftFast.wheelEvents)).toMatchSnapshot()
  })

  it('swipe up', () => {
    expect(recordPhases(swipeUp.wheelEvents)).toMatchSnapshot()
  })

  it('swipe up - fast', () => {
    expect(recordPhases(swipeUpFast.wheelEvents)).toMatchSnapshot()
  })

  it('swipe down', () => {
    expect(recordPhases(swipeDown.wheelEvents)).toMatchSnapshot()
  })

  it('swipe down - fast', () => {
    expect(recordPhases(swipeDownFast.wheelEvents)).toMatchSnapshot()
  })
})
