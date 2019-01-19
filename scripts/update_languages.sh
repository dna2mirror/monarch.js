#!/bin/bash

SELF=$(cd `dirname $0`; pwd)
pushd $SELF/.. > /dev/null 2>&1
rm -rf ./languages/*
find ./node_modules/monaco-languages/release/min -name "*.js" | grep -v contribution | xargs -I{} cp {} ./languages/
for FILE in `find ./languages -name "*.js"`; do
NAME=`echo $FILE | cut -d '/' -f 3`
cat >> $FILE <<EOF
function define(a,i,m) {m(require, exports); exports.name = a.split('/').pop();};
EOF
done
popd > /dev/null 2>&1
echo "Supported Languages are updated from Microsoft Monaco Languages"