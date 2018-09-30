package events

import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.li
import react.dom.ul

interface Props : RProps {
  var events: Array<Event>
  var prefix: String
}

class EventList : RComponent<Props, RState>() {

  override fun RBuilder.render() {
    val filteredEvents: List<Event> = if (props.prefix.isNotEmpty()) {
      props.events.filter { it.label.startsWith(props.prefix, true) }
    } else {
      props.events.toList()
    }
    ul {
      filteredEvents.forEach {
        li { +it.label }
      }
    }
  }
}

fun RBuilder.eventList(events: Array<Event>, prefix: String) = child(EventList::class) {
  attrs.events = events
  attrs.prefix = prefix
}
