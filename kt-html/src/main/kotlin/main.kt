import kotlinx.html.*
import kotlinx.html.stream.appendHTML
import java.io.File

fun main(args: Array<String>) {
    val page = buildString {
        appendln("<!DOCTYPE html>")
        appendHTML().html {
            head {
                link(href = "style.css", rel = LinkRel.stylesheet) { }
                title { +"MdK 2018" }
                style {
                    unsafe {
                        raw("""
                            header {
                                height: 50px;
                                background-color: #2C374C;
                            }
                        """.trimIndent())
                    }
                }
            }
            body {
                header {
                    img(src = "https://xebiatalent.com/images/new/logo-white.svg") {
                        style = "height: 40px; margin-top: 5px; margin-left: 5px;"
                    }
                }
                section("hero") {
                    h1 { +"MdK 2018: Day 3" }
                }
            }
        }
        appendln()
    }
    File("index.html").printWriter().use {
        it.println(page)
    }
}
