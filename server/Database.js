const mongoose = require("mongoose");
const Note = require("./schemas/note");

class Database {
  constructor() {
    // this.Url = "mongodb://localhost:27017/notaty";
    this.Url = process.env.MONGODB_URL || "mongodb://localhost:27017/notaty";
  }

  connect() {
    mongoose
      .connect(this.Url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database Connection Succesfully...");
      })
      .catch((error) => {
        console.log("Database Connection Faild, Error Name: ", error);
      });
  }

  addNote(note) {
    return new Promise((resoleve, reject) => {
      note.createdDate = new Date();
      note.updatedDate = new Date();

      let newNote = new Note(note);
      newNote
        .save()
        .then((document) => {
          resoleve(document);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getNote() {
    return new Promise((resoleve, reject) => {
      Note.find({})
        .then((data) => {
          resoleve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getNoteByTitle(title) {
    return new Promise((resoleve, reject) => {
      const query = { title: { $regex: new RegExp(title, "i") } };
      Note.find(query)
        .then((data) => {
          resoleve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getNoteById(id) {
    return new Promise((resoleve, reject) => {
      Note.findById(id)
        .then((data) => {
          resoleve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  updateNote(note) {
    return new Promise((resoleve, reject) => {
      note.updatedDate = new Date();
      Note.findByIdAndUpdate(note["_id"], note)
        .then((data) => {
          resoleve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  deleteNote(id) {
    return new Promise((resoleve, reject) => {
      Note.findByIdAndDelete(id)
        .then((data) => {
          resoleve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = Database;
