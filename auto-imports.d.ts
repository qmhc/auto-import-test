// Generated by 'unplugin-auto-import'
export {}
declare global {
  const HelloWorld: typeof import('./src/components/index')['HelloWorld']
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    readonly HelloWorld: UnwrapRef<typeof import('./src/components/index')['HelloWorld']>
  }
}
