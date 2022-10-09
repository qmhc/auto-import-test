# Auto Import Test Repo

1. Run `pnpm run tsc`, then a type error will occur.

2. Edit `declare module '@vue/runtime-core'` to `declare module 'vue'` in `auto-imports.d.ts` and run `pnpm run tsc` again, no error occurs.

3. Withdraw the edit in `2.`, run `pnpm i -D @vue/runtime-core`.

4. Run `pnpm run tsc`, also no error occurs.
