import kotlinx.css.*
import styled.css
import styled.styledUl

styledUl {
  css {
    display = Display.flex
    listStyleType = ListStyleType.none
    margin(0.px)
    padding(0.px)
    justifyContent = JustifyContent.center
  }
  filteredEvents.forEach {
    event(it)
  }
}
