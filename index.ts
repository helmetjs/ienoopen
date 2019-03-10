import { IncomingMessage, ServerResponse } from 'http'

export = function ienoopen () {
  return function ienoopen (req: IncomingMessage, res: ServerResponse, next: () => void) {
    res.setHeader('X-Download-Options', 'noopen')
    next()
  }
}
