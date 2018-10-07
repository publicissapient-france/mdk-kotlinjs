external interface Error

external interface AxiosError : Error {
    var config: AxiosRequestConfig
    var code: String? get() = definedExternally; set(value) = definedExternally
    var request: Any? get() = definedExternally; set(value) = definedExternally
    var response: AxiosResponse<Any>? get() = definedExternally; set(value) = definedExternally
}

// ...

@JsModule("axios")
external val Axios: AxiosStatic = definedExternally
