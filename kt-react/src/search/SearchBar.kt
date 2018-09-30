package search

import kotlinx.css.margin
import kotlinx.css.padding
import kotlinx.css.px
import kotlinx.html.InputType
import kotlinx.html.js.onChangeFunction
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import react.*
import react.dom.div
import react.dom.input
import styled.css
import styled.styledInput

interface Props : RProps {
    var onQueryChange: (String) -> Any
}

interface State : RState {
    var query: String
}

class SearchBar(props: Props) : RComponent<Props, State>(props) {
    override fun State.init(props: Props) {
        query = ""
    }

    override fun RBuilder.render() {
        div("SearchBar-container") {
            styledInput(InputType.search) {
                css {
                    padding(10.px)
                    margin(10.px)
                }
                attrs {
                    value = state.query
                    onChangeFunction = ::onInputChange
                    placeholder = "Type conference name"
                }
            }
        }
    }

    private fun onInputChange(event: Event) {
        val element = event.target as HTMLInputElement
        val input = element.value
        setState {
            query = input
        }
        props.onQueryChange(input)
    }
}

fun RBuilder.searchBar(onQueryChange: (String) -> Any) = child(SearchBar::class) {
    attrs.onQueryChange = onQueryChange
}