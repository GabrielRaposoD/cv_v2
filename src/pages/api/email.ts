const mailgunSdk = require('mailgun-js')
const apiKey = process.env.NEXT_PUBLIC_MAILGUN_API_KEY
const domain = process.env.NEXT_PUBLIC_MAILGUN_BASE_URL
const mailgun = mailgunSdk({ apiKey, domain })

export default async (req, res) => {
  try {
    const response = await mailgun.messages().send({
      to: 'Gabriel@exsign.com.br',
      from: req.body.from,
      subject: req.body.subject,
      text: req.body.message,
    })

    console.log(response)

    return res.status(200).json({ result: response })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
}
