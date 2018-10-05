package com.firebase.wrapper.admin.firestore

external interface SnapshotMetadata {

    val fromCache: Boolean
    val hasPendingWrites: Boolean

    fun isEqual(other: SnapshotMetadata): Boolean
}
