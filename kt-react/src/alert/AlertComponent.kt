package alert

import kotlinx.css.Color
import kotlinx.css.padding
import kotlinx.css.px
import react.RBuilder
import react.RProps
import react.ReactElement
import styled.css
import styled.styledDiv

fun RBuilder.alert(message: String = "") = if (message.isEmpty()) {
    empty
} else {
    styledDiv {
        css {
            padding(10.px)
            backgroundColor = Color.red
        }
        +message
    }
}

@Suppress("ClassName")
object empty : ReactElement {
    override val props = object : RProps {}
}
