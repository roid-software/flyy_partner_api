import { request } from 'https';

class HttpRequest {
  constructor(headers) {
    this.headers = headers;
  }

  makeRequest(url, method, data) {
    const options = {
      method,
      headers: {
        ...this.headers,
        'Content-Type': 'application/json',
      },
    };

    return new Promise((resolve, reject) => {
      const req = request(url, options, (res) => {
        let body = '';

        res.on('data', (chunk) => {
          body += chunk;
        });

        res.on('end', () => {
          try {
            const responseBody = JSON.parse(body);
            resolve(responseBody);
          } catch (error) {
            // console.log({error});
            resolve(body)
            // reject(`Failed to parse response JSON: ${error.message}`);
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      if (data) {
        req.write(JSON.stringify(data));
      }

      req.end();
    });
  }
}

HttpRequest.makeRequest = undefined;

export default HttpRequest;
