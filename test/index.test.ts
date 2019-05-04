import connect from 'connect';
import request from 'supertest';
import { IncomingMessage, ServerResponse } from 'http';

import ienoopen = require('..')

describe('ienoopen', function () {
  it('sets header properly', function () {
    const app = connect();
    app.use(ienoopen());
    app.use(function (_req: IncomingMessage, res: ServerResponse) {
      res.setHeader('Content-Disposition', 'attachment; filename=somefile.txt');
      res.end('Download this cool file!');
    });

    return request(app).get('/')
      .expect('X-Download-Options', 'noopen');
  });

  it('names its function and middleware', function () {
    expect(ienoopen.name).toBe('ienoopen');
    expect(ienoopen().name).toBe('ienoopen');
  });
});
