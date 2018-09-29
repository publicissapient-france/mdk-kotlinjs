package app

import react.*
import react.dom.*
import logo.*
import ticker.*

class App : RComponent<RProps, RState>() {
  override fun RBuilder.render() {
    header {
      logo()
      h2 {
        +"Mdk 2018 by Xebia"
      }
    }
    p("App-intro") {
      +"Welcome! You can browse events to find the one that fits you."
    }
  }
}

fun RBuilder.app() = child(App::class) {}
