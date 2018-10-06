val createEvent: (Request, Response) -> Unit = { req, res ->
  val input = req.body.unsafeCast<EventInput>()
  val inputEvent = Event(label = input.label, time = Date().getTime(), date = input.date, image = input.image)
  saveEvent(db, inputEvent)
    .then({ ref -> res.status(201).json(Event(ref.id, inputEvent.label, inputEvent.time, inputEvent.date, inputEvent.image)) })
    .catch({ error -> res.status(500).json(error) })
}
