const fs = require('fs');
const path = require('path');
const https = require('https');

const VERCEL_TOKEN = 'mKG4simRr1XJoPr0pr5SzEXl';
const TEAM_ID = 'team_92qt3VQnsiySUBaDiug2PKHa';

async function deployToVercel() {
  // Read the index.html file
  const indexHtml = fs.readFileSync('index.html', 'utf-8');
  
  const deployment = {
    name: 'satellite-tracker',
    files: [
      {
        file: 'index.html',
        data: Buffer.from(indexHtml).toString('base64')
      }
    ],
    projectSettings: {
      framework: null,
      buildCommand: null,
      installCommand: null,
      devCommand: null
    },
    target: 'production'
  };

  const data = JSON.stringify(deployment);

  const options = {
    hostname: 'api.vercel.com',
    port: 443,
    path: `/v13/deployments`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${VERCEL_TOKEN}`,
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseData);
          if (res.statusCode === 200 || res.statusCode === 201) {
            console.log('✅ Deployment successful!');
            console.log(`🚀 URL: https://${parsed.url}`);
            console.log(`📊 Deployment ID: ${parsed.id}`);
            resolve(parsed);
          } else {
            console.error('❌ Deployment failed:', responseData);
            reject(new Error(responseData));
          }
        } catch (e) {
          console.error('Error parsing response:', responseData);
          reject(e);
        }
      });
    });

    req.on('error', (error) => {
      console.error('Request error:', error);
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

deployToVercel().catch(console.error);
