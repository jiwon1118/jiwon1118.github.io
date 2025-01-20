
pnpm docs:build
cp CNAME docs/
cp robots.txt docs/
cp naver0cece529713db95c189b5959b592c94d.html docs/
git add .
git commit -m "build: update docs"
git push
