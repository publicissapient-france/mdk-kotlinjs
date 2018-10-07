@JsModule("axios")
external val Axios: AxiosInstance

external interface AxiosResponse<T> {
    var data: T
}

external interface AxiosPromise<T> : Promise<AxiosResponse<T>>

external interface AxiosInstance {
    fun <T> get(url: String, config: Any? = definedExternally): AxiosPromise<T>
}

interface AppState : RState {
    var alert: String
}
