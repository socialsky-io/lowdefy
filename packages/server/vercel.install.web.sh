pnpm install
pnpm --workspace-root run build
pnpm -r --workspace-root --filter="!@lowdefy/lowdefy" --filter=lowdefy start build --config-directory ../website --server-directory ../server --no-next-build
