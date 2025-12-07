import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { AUTHORIZATION_HEADER } from '@/utils/constants.ts'

interface User {
  token: string
  username: string // sub in JWT
  expiredAt: number // exp in seconds
}

export const useGlobalUser = defineStore('globalUser', () => {
  const globalUser = reactive<User>({
    token: '',
    username: '',
    expiredAt: 0,
  })

  function isLogin() {
    return computed(() => {
      // fixme test timezone issue
      return globalUser.username !== '' && globalUser.expiredAt > Date.now() / 1000
    }).value
  }

  function setGlobalUser(token: string | null) {
    if (token && token !== '' && token !== 'null') {
      localStorage.setItem(AUTHORIZATION_HEADER, token)
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace('-', '+').replace('_', '/')
      const parsedToken = JSON.parse(window.atob(base64))
      globalUser.username = parsedToken.sub
      globalUser.expiredAt = parsedToken.exp
    } else {
      localStorage.removeItem(AUTHORIZATION_HEADER)
      globalUser.token = ''
      globalUser.username = ''
      globalUser.expiredAt = 0
    }
  }
  return { globalUser, setGlobalUser, isLogin }
})
