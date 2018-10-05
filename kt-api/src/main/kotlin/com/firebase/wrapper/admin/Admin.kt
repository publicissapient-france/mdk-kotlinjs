package com.firebase.wrapper.admin

import com.firebase.wrapper.admin.database.Database
import com.firebase.wrapper.admin.firestore.Firestore
import com.firebase.wrapper.admin.storage.Storage

@JsModule("firebase-admin")
external object Admin {
    val credential: dynamic

    fun initializeApp(config: FirebaseAppOptions)
    fun database(): Database
    fun firestore(): Firestore
    fun storage(): Storage
}
