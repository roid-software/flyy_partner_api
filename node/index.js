import generateFunctions from './functionGenerator.js';

let headers = {}; // Add any default headers if needed

function initialize(partnerKey,apiKey, env, customHeaders) {
  if (apiKey) {
    headers['PARTNER-KEY'] = apiKey;
  }
  if (customHeaders) {
    headers = { ...headers, ...customHeaders };
  }

  return generateFunctions(partnerKey,headers,env);
}

export default initialize;
