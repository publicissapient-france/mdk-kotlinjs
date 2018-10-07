class App : RComponent<RProps, AppState>(), CoroutineScope {
    override fun RBuilder.render() {
        header("App-header") {
            logo()
            h2("App-h2") { +"Mdk 2018 by Xebia" }
        }
        p("App-intro") { +"Welcome!" }
        alert(state.alert)
        div { textField("Event name", ::onInputChange) }
        eventList(state.events, state.prefix)
        snackbar(state.alert, state.snackOpen, ::onSnackClose)
    }
}

fun RBuilder.app() = child(App::class) {}
