import { expect } from './expect';

const includes = expected => actual => expect(actual, actual + ' is expected to include ' + expected).to.eventually.include(expected);
const notIncludes = expected => actual =>
  expect(actual, actual + ' is expected to not include ' + expected).to.eventually.not.include(expected);
const includesAll = expected => actual =>
  expect(actual, actual + ' is expected to include all members of ' + expected).to.eventually.contain.members(expected);
const equals = expected => actual => expect(actual, actual + ' is expected to equal ' + expected).to.eventually.equal(expected);
const areEqualTo = expected => actual => expect(actual, actual + ' is expected to equal ' + expected).to.eventually.have.members(expected);
const numberIs = expected => actual =>
  expect(actual, 'number ' + actual + ' is expected to be ' + expected).to.eventually.has.length(expected);
const isDisplayed = element => expect(element.isDisplayed(), 'element is expected to be displayed').to.eventually.be.true;
const isNotDisplayed = element => expect(element.isDisplayed(), 'element is expected to be not displayed').to.eventually.be.false;
const isPresent = element => expect(element.isPresent(), 'element is expected to be present').to.eventually.be.true;
const isNotPresent = element => expect(element.isPresent(), 'element is expected to be not present').to.eventually.be.false;
const isEnabled = element => expect(element.isEnabled(), 'element is expected to be enabled').to.eventually.be.true;
const isDisabled = element => expect(element.isEnabled(), 'element is expected to be disabled').to.eventually.be.false;

export {
  includes,
  notIncludes,
  includesAll,
  equals,
  areEqualTo,
  numberIs,
  isDisplayed,
  isNotDisplayed,
  isPresent,
  isNotPresent,
  isEnabled,
  isDisabled,
};
