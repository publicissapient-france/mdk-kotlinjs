package app

import Axios
import alert.alert
import events.Event
import events.eventList
import kotlinx.coroutines.experimental.*
import logo.logo
import react.*
import react.dom.h2
import react.dom.header
import react.dom.p
import search.searchBar
import kotlin.coroutines.experimental.CoroutineContext

interface AppState : RState {
  var events: Array<Event>
  var prefix: String
  var alert: String
}

class App : RComponent<RProps, AppState>(), CoroutineScope {

  override val coroutineContext: CoroutineContext
    get() = Dispatchers.Default

  private var fetchEventsCall: Deferred<Unit>? = null

  override fun AppState.init() {
    events = emptyArray()
    prefix = ""
    alert = ""
  }

  override fun componentDidMount() {
//    fetchEvents()
    fetchEventsCall = startFetchEventsCoroutines()
  }

  override fun componentWillUnmount() {
    fetchEventsCall?.cancel()
  }

  override fun RBuilder.render() {
    header("App-header") {
      logo()
      h2("App-h2") {
        +"Mdk 2018 by Xebia"
      }
    }
    p("App-intro") {
      +"Welcome!"
    }
    p("App-intro") {
      +"Browse events to find the one that fits you"
    }
    alert(state.alert)
    searchBar(::onInputChange)
    eventList(state.events, state.prefix)
  }

//  private fun fetchEvents() {
//    Axios.get<Array<Event>>("events.json").then { result ->
//      setState {
//        events = result.data
//      }
//    }.catch {
//      setState {
//        alert = it.toString()
//      }
//    }
//  }

  private fun startFetchEventsCoroutines() = async {
    try {
      val data = fetchEventsCoroutines()
      setState {
        events = data
      }
    } catch (t: Throwable) {
      setState {
        alert = t.toString()
      }
    }
  }

  private suspend fun fetchEventsCoroutines(): Array<Event> =
    Axios.get<Array<Event>>("events.json").await().data

  private fun onInputChange(input: String) {
    setState {
      prefix = input
    }
  }
}

fun RBuilder.app() = child(App::class) {}
