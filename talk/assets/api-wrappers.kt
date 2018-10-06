package com.expressjs.wrapper

@JsModule("express")
external class Express: Application {
  fun use(cors: Cors)
}
