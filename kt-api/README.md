# Event API

This project contains an Express API based on firebase cloud functions.


## Overview

Project is composed of 2 WS :

* GET /event/id

Get list of events if no id set, get the event information if id set

```
curl -X GET \
  http://localhost:5000/v1/event/OPTIONAL_EVENT_ID
```

* PUT /event

Create a new event with a label.

```
curl -X PUT \
  http://localhost:5000/v1/event \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'label=xebicon'
```

## Database

Firestore is used to store data, don't forget to enable it.

## Test it

You can test project locally with the command (from functions folder) :

`npm run serve`

## Check your environment

Be sure `package.json` is copied to `functions/` directory then type into `npm install` it 

## Build it

```
gradle build
npm run delete-invalid-line
npm run deploy
```