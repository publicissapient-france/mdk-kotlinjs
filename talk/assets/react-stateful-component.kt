interface SBProps : RProps {
  var onQueryChange: (String) -> Any
}

interface SBState : RState {
  var query: String
}

class SearchBar(props: Props) :
  RComponent<SBProps, SBState>(props) {
  override fun RBuilder.render() {
    input(InputType.search) {
      attrs {
        value = state.query
        onChangeFunction = ::onInputChange
      }
    }
  }

  private fun onInputChange(event: Event) {
    val input = event.target.value
    setState { query = input }
    props.onQueryChange(input)
  }
}
