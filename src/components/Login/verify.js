import axios from 'axios'

export const verifyGoogleToken = ({ accessToken, profileObj }) => {
  console.log('googleee: ', accessToken)
  axios.post('http://localhost:9000/login',
    {
      profile: profileObj,
      type: 'google'
    },
    { headers: { 'Authorization': 'Bearer ' + accessToken } }
  )
  .then(({ data }) => {
    console.log('data------', data);
    // localStorage.setItem('token', data.token)
    // localStorage.setItem('expiresAt', data.expiresAt)
    // history.push('home')
  }, (error) => {
    console.log(error);
  });
}

export const verifyFacebookToken = (x) => {
  console.log('fb: ', x)
}
