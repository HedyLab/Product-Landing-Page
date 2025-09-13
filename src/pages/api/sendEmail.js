


import { google } from 'googleapis';

export default function (req, res) {

    let data = req.body

    let MailComposer = require("nodemailer/lib/mail-composer");

    const client_id = process.env.GMAIL_CLIENT_ID
    const client_secret = process.env.GMAIL_CLIENT_SECRET
    const redirect_url = ['http://localhost']
    const google_refresh_token = process.env.GMAIL_REFRESH_TOKEN
    const accessToken = process.env.GMAIL_ACCESS_TOKEN
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_url[0])
    const email_address = process.env.GMAIL_USER
    const token_uri = process.env.GMAIL_TOKEN_URI


    if(google_refresh_token == undefined){
        const GMAIL_SCOPES = ['https://www.googles.com/auth/gmail.send'];
      
        const url = oAuth2Client.generateAuthUrl({
          access_type: 'offline',
          prompt: 'consent',
          scope: GMAIL_SCOPES,
        });
      
        console.log('Authorize this app by visiting this url:', url);  
    }
    
    const gmailClient = async() => {
        oAuth2Client.setCredentials({ refresh_token: google_refresh_token })
        const gmail = google.gmail({ version: 'v1', auth: oAuth2Client })

        return gmail
    }

    const createEmail = async(options) => {
        const mailComposer = new MailComposer(options)
        const message = await mailComposer.compile().build()
      
        return Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
    }

    let item = {name:data[0].value, mobile:data[1].value ,company:data[2].value ,jobTitle:data[3].value ,mail:data[4].value ,howToKnowUs:data[5].value}


    async function sendEmail(item) {

        const mailOption = {
            from: email_address,
            to: 'hedy.awoke@gmail.com',
            subject: "From Landing Page",
            html: 
            `
            <div>
            <h2>MasterBox諮詢</h2>
            <p style="font-size: 20px; margin: 20px 0 40px 0">姓名：${item.name}</p>
            <p style="font-size: 20px; margin: 20px 0 40px 0">聯絡電話：${item.mobile}</p>
            <p style="font-size: 20px; margin: 20px 0 40px 0">公司名稱：${item.company}</p>
            <p style="font-size: 20px; margin: 20px 0 40px 0">部門職稱：${item.jobTitle}</p>
            <p style="font-size: 20px; margin: 20px 0 40px 0">E-mail：${item.mail}</p>
            <p style="font-size: 20px; margin: 20px 0 40px 0">如何得知MasterBox平台：${item.howToKnowUs}</p>
           

            <br/>
            <small>* 此封信函為系統自動寄出</small>
          </div>`
        }

        const email = await gmailClient(mailOption)
        const rawMessage = await createEmail(mailOption)
      
        const emailResult = await email.users.messages.send({
          userId: 'me',
          requestBody: {
            raw: rawMessage
          }
        })
      
        if(emailResult.data){
          return emailResult.data
        }else{
          return { error: emailResult }
        }
    }

    sendEmail(item)

    res.status(200)

  }