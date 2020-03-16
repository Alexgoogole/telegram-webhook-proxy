# telegram-webhook-proxy
Simple JS app to poll Telegram bot and imitate webhooks for local development
# Requirements:
node.js, npm
# Installation:
1. Clone repo
2. Run `npm install`
# Usage:
`node app.js <your-bot-token> <local-webhooks-url>`<br/>
Example:<br/>
`node app.js 123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11 http://127.0.0.1:8000/webhooks`
