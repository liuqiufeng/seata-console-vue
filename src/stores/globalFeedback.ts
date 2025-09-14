import type { MessageInstance } from 'ant-design-vue/es/message/interface'
import type { ModalStaticFunctions } from 'ant-design-vue/es/modal/confirm'
import type { NotificationInstance } from 'ant-design-vue/es/notification/interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { useAppProps } from 'ant-design-vue/es/app/context'

// see https://www.antdv.com/components/message#why-i-can-not-access-context-pinia-configprovider-locale-prefixcls-theme-in-message
// see https://github.com/vueComponent/ant-design-vue/issues/7768#issuecomment-2272482607
export const useGlobalFeedback = defineStore('globalFeedback', () => {
  const message = ref<MessageInstance>({} as MessageInstance)
  const notification = ref<NotificationInstance>({} as NotificationInstance)
  const modal = ref<Omit<ModalStaticFunctions, 'warn'>>({} as Omit<ModalStaticFunctions, 'warn'>)
  function initGlobal(staticFunction: useAppProps) {
    message.value = staticFunction.message
    modal.value = staticFunction.modal
    notification.value = staticFunction.notification
  }
  return { message, notification, modal, initGlobal }
})
