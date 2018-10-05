package com.firebase.wrapper.admin.database

external interface Database {
    fun ref(path: String): Reference
}
