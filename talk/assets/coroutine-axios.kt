class App : RComponent<RProps, RState>(),
  CoroutineScope {

  override val coroutineContext by lazy { Job() }

  override fun componentDidMount() {
    launch {
      setState {
        events = fetchEventsCoroutines()
      }
    }
  }

  override fun componentWillUnmount() {
    coroutineContext.cancel()
  }

  suspend fun fetchEventsCoroutines(): Array<Event> =
    Axios.get<Array<Event>>("api/events").await().data

}
