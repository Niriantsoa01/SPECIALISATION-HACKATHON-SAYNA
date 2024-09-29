const http = require('http');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // ou true pour les serveurs qui utilisent SSL/TLS
  auth: {
    user: 'e.anatra.team@gmail.com',
    pass: 'Eanatra/1',
  },
});

http.createServer((req, res) => {
  if (req.url === '/Page accueil/landing.html') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const params = new URLSearchParams(body);
      const nom = params.get('nom');
      const prenom = params.get('prenom');
      const email = params.get('email');
      const message = params.get('message');

      const mailOptions = {
        from: `${nom}`,
        to: 'e.anatra.team@gmail.com',
        subject: 'Formulaire de contact',
        text: 'Nom : ' + nom + '\nPrénom : ' + prenom + '\nEmail : ' + email + '\nMessage : ' + message,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Erreur lors de l\'envoi de l\'email');
        } else {
          console.log('Email envoyé avec succès !');
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('Email envoyé avec succès !');
        }
      });
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page non trouvée');
  }
}).listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});