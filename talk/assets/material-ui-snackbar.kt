@JsModule("@material-ui/core/Snackbar")
private external val snackbarModule: dynamic
private val uiSnackbar: RClass<SnackbarProps> =
  snackbarModule.default

interface SnackbarProps : RProps {
  var message: String
  var onClose: () -> Any
  var open: Boolean
}

class Snackbar : RComponent<SnackbarProps, RState>() {
  override fun RBuilder.render() {
    uiSnackbar {
      attrs {
        message = props.message
        onClose = props.onClose
        open = props.open
      }
    }
  }
}

fun RBuilder.snackbar(message: String,
                      open: Boolean,
                      onClose: () -> Any) = child(Snackbar::class) {
  attrs.message = message
  attrs.open = open
  attrs.onClose = onClose
}
