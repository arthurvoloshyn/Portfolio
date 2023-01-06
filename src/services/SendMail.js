import SOCIAL_NETWORK from '../constants/socialNetwork';

const sendMail = ({ username, email, subject, body }) => {
  const emailSubject = encodeURIComponent(subject);
  const emailBody = encodeURIComponent(`From: ${username}\nEmail: ${email}\nMessage: ${body}`);
  const letter = `mailto:${SOCIAL_NETWORK.email}?subject=${emailSubject}&body=${emailBody}`;

  const anchor = document.createElement('a');
  anchor.setAttribute('href', letter);
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

export default sendMail;
