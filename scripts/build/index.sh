
#!/usr/bin/env sh

npm run clean
echo "┏━━━ 📦 build ━━━━━━━━━━━━━━━━━━━"
npx tsc && rollup -c
