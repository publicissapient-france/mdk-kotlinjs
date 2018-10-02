package com.api.event

import com.expressjs.wrapper.Cors
import com.expressjs.wrapper.Express
import com.expressjs.wrapper.Request
import com.expressjs.wrapper.Response
import com.firebase.wrappers.admin.Admin
import com.firebase.wrappers.admin.firestore.DocumentData
import com.firebase.wrappers.admin.firestore.Firestore
import com.firebase.wrappers.admin.firestore.get
import com.firebase.wrappers.functions.Functions
import kotlin.js.Date

external val exports: dynamic

// -- Database CRUD --
private fun findEvents(db: Firestore) = db.collection("event").get()

private fun findEventById(db: Firestore, eventId: String?) = db.collection("event").doc(eventId).get()

private fun saveEvent(db: Firestore, inputEvent: Event) = db.collection("event").add(JSON.parse(JSON.stringify(inputEvent)))
// -- Database CRUD --


// -- HTTP Response Builders --
private fun getAllEvents(db: Firestore, res: Response) {
    findEvents(db)
            .then({ snapshot ->
                val result = snapshot.docs.map {
                    Event(it.id, it.data()!!["label"] as String, it.data()!!["time"] as Double, it.data()!!["date"] as String, it.data()!!["image"] as String)
                }
                res.status(200).json(result)
            }).catch({ err -> res.status(500).json(err) })
}

private fun getEventById(db: Firestore, eventId: String?, res: Response) {
    findEventById(db, eventId)
            .then({ doc ->
                when {
                    !doc.exists -> res.status(404).json(Message("Event not found!"))
                    else -> {
                        val data = doc.data().unsafeCast<Event>()
                        res.status(200).json(Event(doc.id, data.label, data.time, data.date, data.image))
                    }
                }
            }).catch({ err -> res.status(500).json(err) })
}
// -- HTTP Response Builders --

fun main(args: Array<String>) {

    val app = Express()
    app.use(Cors())

    Admin.initializeApp(Functions.config().firebase)
    val db = Admin.firestore()

    val getEvents: (Request, Response) -> Unit = { req, res ->
        val params = req.params.unsafeCast<Params>()
        val eventId = params.id
        if (eventId != undefined) getEventById(db, eventId, res)
        else getAllEvents(db, res)
    }

    val createEvent: (Request, Response) -> Unit = { req, res ->
        val input = req.body.unsafeCast<EventInput>()
        val inputEvent = Event(label = input.label, time = Date().getTime(), date = input.date, image = input.image)
        saveEvent(db, inputEvent)
                .then({ ref -> res.status(201).json(Event(ref.id, inputEvent.label, inputEvent.time, inputEvent.date, inputEvent.image)) })
                .catch({ error -> res.status(500).json(error) })
    }

    app.get("/event/:id?", getEvents)
    app.put("/event", createEvent)

    exports.v1 = Functions.https.onRequest(app)
}

data class EventInput(val label: String, val date: String, val image: String)
data class Event(val id: String? = undefined, val label: String, val time: Double, val date: String, val image: String) : DocumentData
data class Params(val id: String? = undefined)
data class Message(val msg: String)