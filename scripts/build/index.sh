
#!/usr/bin/env sh

npm run clean
echo "┏━━━ 📦 build ━━━━━━━━━━━━━━━━━━━"
npx tsc && npx rollup -c
