const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const Database = require("./Database");
const dataBase = new Database();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (reqest, response) => {
	const body = reqest.body;
	dataBase
		.addNote(body)
		.then((data) => {
			response.send(data);
		})
		.catch((error) => {
			response.status(500).send("The Note Is Not Saved, Error: ", error);
		});
});

app.get("/", (reqest, response) => {
	const { title } = reqest.query;
	if (title) {
		dataBase
			.getNoteByTitle(title)
			.then((data) => {
				response.send(data);
			})
			.catch((error) => {
				response.status(500).send("Ops!, There are Error: ", error);
			});
	} else {
		dataBase
			.getNote()
			.then((data) => {
				response.send(data);
			})
			.catch((error) => {
				response.status(500).send("Ops!, There are Error: ", error);
			});
	}
});

app.get("/:id", (reqest, response) => {
	const { id } = reqest.params;
	dataBase
		.getNoteById(id)
		.then((data) => {
			if (!data) {
				response.status(404).send("Note Id Doesn't Exist." + id);
			} else {
				response.send(data);
			}
		})
		.catch((error) => {
			response.status(500).send("Ops!, There are Error: ", error);
		});
});

app.put("/", (reqest, response) => {
	const body = reqest.body;
	dataBase
		.updateNote(body)
		.then((data) => {
			if (!data) {
				response.status(404).send("Note Id Doesn't Exist." + id);
			} else {
				response.send(data);
			}
		})
		.catch((error) => {
			response.status(500).send("Ops!, There are Error: ", error);
		});
});

app.delete("/:id", (reqest, response) => {
	const { id } = reqest.params;
	dataBase
		.deleteNote(id)
		.then((data) => {
			if (!data) {
				response.status(404).send("Note Id Doesn't Exist." + id);
			} else {
				response.send(data);
			}
		})
		.catch((error) => {
			response.status(500).send("Ops!, There are Error: ", error);
		});
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log("Server Has Started On Port Number: " + port);
	dataBase.connect();
});
