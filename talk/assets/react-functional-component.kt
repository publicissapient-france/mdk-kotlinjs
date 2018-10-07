fun RBuilder.alert(message: String = "") = if (message.isEmpty()) {
    empty
} else {
    div { +message }
}

@Suppress("ClassName")
object empty : ReactElement {
    override val props = object : RProps {}
}
