package textField

import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import react.*

@JsModule("@material-ui/core/TextField")
private external val textFieldModule: dynamic
private val uiTextField: RClass<TextFieldProps> = textFieldModule.default

interface TextFieldProps : RProps {
    var label: String
    var onChange: (Event) -> Any
    var onValueChange: (String) -> Any
    var variant: String
}

class TextField : RComponent<TextFieldProps, RState>() {
    override fun RBuilder.render() {
        uiTextField {
            attrs {
                label = props.label
                onChange = ::onChange
                variant = "outlined"
            }
        }
    }

    private fun onChange(event: Event) {
        val element = event.target as HTMLInputElement
        val input = element.value
        props.onValueChange(input)
    }

}

fun RBuilder.textField(label: String, onChange: (String) -> Any) = child(TextField::class) {
    attrs.label = label
    attrs.onValueChange = onChange
}