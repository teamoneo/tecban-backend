import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import https from 'https';
import api from 'axios';

export const httpsAgentFirstBank = new https.Agent({
  cert: fs.readFileSync(path.join(__dirname, './certs/clientfirst.crt')),
  key: fs.readFileSync(path.join(__dirname, './certs/clientfirst.key')),
  ca: fs.readFileSync(path.join(__dirname, './certs/cafirst.crt')),
});

export const httpsAgentSecondBank = new https.Agent({
  cert: fs.readFileSync(path.join(__dirname, './certs/clientsecond.crt')),
  key: fs.readFileSync(path.join(__dirname, './certs/clientsecond.key')),
  ca: fs.readFileSync(path.join(__dirname, './certs/cafirst.crt')),
});

export const rsAPIFirstBank = api.create({
  baseURL: 'https://rs1.tecban-sandbox.o3bank.co.uk',
  headers: {
    'Content-Type': 'application/json',
    'x-fapi-financial-id': process.env.OB_PARTICIPANT_ID,
    Authorization: `Bearer ${process.env.ACCESS_TOKEN1}`,
  },
  httpsAgent: httpsAgentFirstBank,
});

export const rsAPISecondBank = api.create({
  baseURL: 'https://rs2.tecban-sandbox.o3bank.co.uk',
  headers: {
    'Content-Type': 'application/json',
    'x-fapi-financial-id': process.env.OB_PARTICIPANT_ID,
    Authorization: `Bearer ${process.env.ACCESS_TOKEN2}`,
  },
  httpsAgent: httpsAgentSecondBank,
});
