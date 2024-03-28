import { createAuthProvider } from 'react-token-auth'

export const [useAuth, authFetch, login, logout] = 
    createAuthProvider({
        accessTokenKey: 'access_token',
        onUpdateToken: (token) => fetch('/api/token_refresh', {
            method: 'POST',
            body: token.refresh_token
        })
        .then(res => res.json())
    })