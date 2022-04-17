import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

export const pinia = createPinia()
pinia.use(piniaPersist)