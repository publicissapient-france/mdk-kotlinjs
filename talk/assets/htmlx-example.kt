buildString {
    appendHTML().html {
        head {
            link(href = "style.css", rel = LinkRel.stylesheet) { }
            title { +"MdK 2018" }
            style {
                raw("""
                        header {
                            height: 50px;
                        }
                    """.trimIndent())
            }
        }
        body {
            header {
                img(src = "...") {
                    style = "height: 40px;"
                }
            }
            section("hero") {
                h1 { +"MdK 2018: Day 3" }
            }
        }
    }
}
