private fun saveEvent(db: Firestore, inputEvent: Event) =
  db.collection("event")
    .add(JSON.parse(JSON.stringify(inputEvent)))
