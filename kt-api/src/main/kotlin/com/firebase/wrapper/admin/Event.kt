package com.firebase.wrapper.admin

import com.firebase.wrapper.admin.database.DeltaSnapshot

external interface Event<T> {
    val data: DeltaSnapshot<T>
    val params: dynamic
}
