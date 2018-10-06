data class EventInput(val label: String, val date: String, val image: String)

data class Event(val id: String? = undefined, val label: String, val time: Double, val date: String, val image: String) : DocumentData

data class Params(val id: String? = undefined)

data class Message(val msg: String)
