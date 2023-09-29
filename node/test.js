import initialize from './index.js';

const apiKey = 'my-api-key';
const partnerKey = "mmff";
const env = "stage";

const apiFunctions = initialize(apiKey,partnerKey,env);

// Call the generated functions using the appropriate function name

const resp = await apiFunctions.v4_partner_multi_reward_event({ext_uid: "123"})
console.log({resp});
// console.log({apiFunctions});

setTimeout(() => {console.log("run in 10 seconds")},10000);