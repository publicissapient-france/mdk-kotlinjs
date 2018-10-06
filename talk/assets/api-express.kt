val app = Express()
app.use(Cors())

Admin.initializeApp(Functions.config().firebase)
val db = Admin.firestore()
val settings = FireStoreSettings(timestampsInSnapshots = true);
db.settings(settings);

app.get("/event/:id?", getEvents)
app.put("/event", createEvent)

exports.v1 = Functions.https.onRequest(app)
