var ienoopen = require('..')

var assert = require('assert')
var connect = require('connect')
var request = require('supertest')

describe('ienoopen', function () {
  beforeEach(function () {
    this.app = connect()
    this.app.use(ienoopen())
    this.app.use(function (req, res) {
      res.setHeader('Content-Disposition', 'attachment; filename=somefile.txt')
      res.end('Download this cool file!')
    })
  })

  it('sets header properly', function () {
    return request(this.app).get('/')
      .expect('X-Download-Options', 'noopen')
  })

  it('names its function and middleware', function () {
    assert.equal(ienoopen.name, 'ienoopen')
    assert.equal(ienoopen().name, 'ienoopen')
  })
})
