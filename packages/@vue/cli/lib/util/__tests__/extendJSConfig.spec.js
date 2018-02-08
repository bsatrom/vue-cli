const extend = require('../extendJSConfig')

test(`basic`, () => {
  const value = {
    foo: true,
    css: {
      modules: true
    }
  }
  const source = `module.exports = {\n  foo: false,\n  css: {\n    modules: false\n  }\n}`
  expect(extend(value, source)).toMatch(
    `module.exports = {\n  foo: true,\n  css: {\n    modules: true\n  }\n}`
  )
})

test(`adding new property`, () => {
  const value = {
    foo: true
  }
  const source = `module.exports = {\n  bar: 123\n}`
  expect(extend(value, source)).toMatch(
    `module.exports = {\n  bar: 123,\n  foo: true\n}`
  )
})

test(`non direct assignment`, () => {
  const value = {
    foo: true
  }
  const source = `const config = {\n  bar: 123\n}\nmodule.exports = config`
  expect(extend(value, source)).toMatch(
    `const config = {\n  bar: 123,\n  foo: true\n}\nmodule.exports = config`
  )
})
