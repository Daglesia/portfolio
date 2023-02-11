set -e

yarn run build

echo > ./dist/nojekyll

git checkout -B ghpages
git add dist -f
git commit -m 'deploy'

git subtree push --prefix dist portfolio ghpages

cd -