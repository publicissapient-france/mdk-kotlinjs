$ git clone git@github.com:xebia-france/mdk-kotlinjs.git

Clonage dans 'mdk-kotlinjs'...
remote: Enumerating objects: 488, done.
remote: Counting objects: 100% (488/488), done.
remote: Compressing objects: 100% (279/279), done.
remote: Total 488 (delta 175), reused 420 (delta 111), pack-reused 0
Réception d'objets: 100% (488/488), 23.14 MiB | 1.42 MiB/s, fait.
Résolution des deltas: 100% (175/175), fait.

$ cd mdk-kotlinjs/kt-api/

$ gradle build

Starting a Gradle Daemon (subsequent builds will be faster)
Cleaned up directory '/tmp/mdk-kotlinjs/kt-api/functions'
:compileJava NO-SOURCE
:compileKotlin2Js
:processResources NO-SOURCE
:classes
:inspectClassesForKotlinIC
:jar
:assemble
:compileTestJava NO-SOURCE
:compileTestKotlin2Js NO-SOURCE
:processTestResources NO-SOURCE
:testClasses UP-TO-DATE
:test NO-SOURCE
:check UP-TO-DATE
:build

BUILD SUCCESSFUL

Total time: 6.143 secs

$ firebase use --add

? Which project do you want to add? moisdukotlin-api
? What alias do you want to use for this project? (e.g. staging) default

Created alias default for moisdukotlin-api.
Now using alias default (moisdukotlin-api)

$ cd functions
$ npm install
> grpc@1.15.1 install /tmp/mdk-kotlinjs/kt-api/node_modules/grpc
> node-pre-gyp install --fallback-to-build --library=static_library

node-pre-gyp WARN Using request for node-pre-gyp https download
[grpc] Success: "/tmp/mdk-kotlinjs/kt-api/node_modules/grpc/src/node/extension_binary/node-v57-linux-x64-glibc/grpc_node.node" is installed via remote

> protobufjs@6.8.8 postinstall /tmp/mdk-kotlinjs/kt-api/node_modules/protobufjs
> node scripts/postinstall


> firebase-functions@2.0.5 postinstall /tmp/mdk-kotlinjs/kt-api/node_modules/firebase-functions
> node ./upgrade-warning


======== WARNING! ========

This upgrade of firebase-functions contains breaking changes if you are upgrading from a version below v1.0.0.

To see a complete list of these breaking changes, please go to:

https://firebase.google.com/docs/functions/beta-v1-diff

added 710 packages in 4.72s

$ cd ..

$ firebase deploy --only functions


=== Deploying to 'moisdukotlin-api'...

i  deploying functions
i  functions: ensuring necessary APIs are enabled...
✔  functions: all necessary APIs are enabled
i  functions: preparing functions directory for uploading...

Error: Error occurred while parsing your function triggers. Please ensure that index.js only exports cloud functions.


npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! functions@ deploy: `firebase deploy --only functions`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the functions@ deploy script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/jsmadja/.npm/_logs/2018-10-16T14_58_27_545Z-debug.log

> functions@ deploy /home/jsmadja/Xebia/Development/mdk-kotlinjs/kt-api
> firebase deploy --only functions


=== Deploying to 'moisdukotlin-api'...

i  deploying functions
i  functions: ensuring necessary APIs are enabled...
✔  functions: all necessary APIs are enabled
i  functions: preparing functions directory for uploading...
i  functions: packaged functions (108.48 KB) for uploading
✔  functions: functions folder uploaded successfully
i  functions: updating Node.js 6 function v1(us-central1)...
✔  functions[v1(us-central1)]: Successful update operation.

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/moisdukotlin-api/overview

$ curl -X PUT https://us-central1-moisdukotlin-api.cloudfunctions.net/v1/event
    -H 'Content-Type: application/x-www-form-urlencoded'
    -d 'label=xebicon'
    -d 'date=2018-11-19T23:00:00.000Z'
    -d 'image=https://xebicon.fr/wp-content/uploads/2018/06/logo-head.png'

{
  "id":"34OD0CXUXmKt92CaRuBA",
  "label":"xebicon",
  "time":1539702115701,
  "date":"2018-11-19T23:00:00.000Z",
  "image":"https://xebicon.fr/wp-content/uploads/2018/06/logo-head.png"
}

$ curl https://us-central1-moisdukotlin-api.cloudfunctions.net/v1/event --silent

[
  {
    "id": "34OD0CXUXmKt92CaRuBA",
    "label": "xebicon",
    "time": 1539702115701,
    "date": "2018-11-19T23:00:00.000Z",
    "image": "https://xebicon.fr/wp-content/uploads/2018/06/logo-head.png"
  },
  {
    "id": "3vzji0NWPSspCfwi227x",
    "label": "Data X Day",
    "time": 1539525923392,
    "date": "2018-11-19T23:00:00.000Z",
    "image": "https://xebicon.fr/wp-content/uploads/2018/06/logo-head.png"
  }
]
