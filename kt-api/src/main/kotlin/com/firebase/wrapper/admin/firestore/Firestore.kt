package com.firebase.wrapper.admin.firestore

external interface Firestore {
    fun collection(collectionPath: String): CollectionReference
    fun settings(settings: FireStoreSettings)
}
