package events

import kotlinx.css.*
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import styled.css
import styled.styledUl
import kotlin.js.Date

data class Event(val id: String, val label: String, val date: Date, val image: String)

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
    styledUl {
      css {
        display = Display.flex
        listStyleType = ListStyleType.none
        margin(0.px)
        padding(0.px)
        justifyContent = JustifyContent.center
      }
      filteredEvents.forEach {
        event(it)
      }
    }
  }
}

fun RBuilder.eventList(events: Array<Event>, prefix: String) = child(EventList::class) {
  attrs.events = events
  attrs.prefix = prefix
}
