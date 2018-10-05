package com.firebase.wrapper.admin.storage

external interface Bucket {

    val name: String

    fun file(name: String, options: BucketFileOptions? = definedExternally): File
}
