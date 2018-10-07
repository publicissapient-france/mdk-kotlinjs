@JsModule("axios")
external val Axios: dynamic

interface AppState : RState {
    var alert: String
}

class App : RComponent<RProps, AppState>() {

    override fun componentDidMount() {
        Axios.get<Array<Event>>("api/events")
                .then { result ->
                    // ⚠️ implicit unsafe cast from dynamic to Array<Event>
                    setState { events = result.data as Array<Event> }
                }.catch {
                    setState { alert = it.toString() }
                }
    }
}
