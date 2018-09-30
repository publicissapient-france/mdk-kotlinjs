package events

import kotlinx.css.*
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.div
import react.dom.img
import styled.StyleSheet
import styled.css
import styled.styledImg
import styled.styledLi

interface EventComponentProps : RProps {
    var event: Event
}

object EventComponentStyle : StyleSheet("EventComponentStyle", isStatic = true) {
    val li by css {
        padding(10.px)
        margin(10.px)
        backgroundColor = Color("#F1F1F1")
        borderRadius = 3.px
    }
}

class EventComponent : RComponent<EventComponentProps, RState>() {
    override fun RBuilder.render() {
        styledLi {
            css {
                +EventComponentStyle.li
            }
            styledImg(src = props.event.image) {
                css {
                    width = 150.px
                    borderRadius = 3.px
                }
            }
            div {
                +props.event.label
            }
        }
    }

}

fun RBuilder.event(event: Event) = child(EventComponent::class) {
    attrs.event = event
}