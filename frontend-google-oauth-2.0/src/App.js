import { useGoogleLogin, googleLogout } from '@react-oauth/google'
import axios from 'axios'

function App() {
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const idTokenRespose = await axios.post('http://localhost:5000/generate-id-token', { code: codeResponse.code })

      console.log(idTokenRespose.data)
    },
    flow: 'auth-code',
  })

  return (
    <>
      <button onClick={() => login()}>Log In</button>
      <button onClick={() => googleLogout()}>Log Out</button>
    </>
  );
}

export default App;
