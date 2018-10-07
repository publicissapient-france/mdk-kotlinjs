interface Props : RProps {
    var onQueryChange: (String) -> Any
}
interface State : RState {
    var query: String
}
class SearchBar(props: Props) : RComponent<Props, State>(props) {
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
