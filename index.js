// console.log("Abdallah Bourkeba...!");

// const calc = require("./calculator(module)");

// console.log(calc.sum(10, 5));
// console.log(calc.div(10, 5));

// const fs = require("fs");

// fs.writeFile(`myFile.txt`, "This is a test file", "utf8", () => {
// 	console.log("Done...! Your file has been created.");
// });

// class User {
// 	constructor(username) {
// 		this.name = username;
// 		this.email = `${this.name.toLowerCase()}@company.com`;
// 	}
// 	login() {
// 		console.log(`Logged in By User: ${this.email}`);
// 	}
// 	logout() {
// 		console.log(`Logged out By User: ${this.email}`);
// 	}
// }

// class Admin extends User {
// 	delet(user) {
// 		console.log(`${user.name} Is deleted successfully`);
// 		users = users.filter((ele) => {
// 			return ele.email !== user.email;
// 		});
// 	}
// }

// let users = [];

// let user1 = new User("Abdallah");
// let user2 = new User("Ahmed");
// let admin = new Admin("Bourkeba");

// users.push(user1);
// users.push(user2);

// admin.delet(user2);

// console.log(users);

/*
console.log("Search For Videos");
console.log("Select Video");

downloadVideos("Abdallah-Video.mp4", (videoName) => {
	console.log(videoName + " Has Been Successfully Downloaded");
});

console.log("Containue Browsing Videos");

function downloadVideos(videoName, callBack) {
	setTimeout(() => {
		callBack(videoName);
	}, 3000);
}
*/

// downloadVideosPromise("Abdallah-Video.mp4")
// 	.then((videoName) => {
// 		console.log(videoName + " Has Been Successfully Downloaded");
// 	})
// 	.catch((error) => {
// 		console.log("There Was An Error Happend " + error);
// 	});

// function downloadVideosPromise(videoName) {
// 	return new Promise((resolve, reject) => {
// 		let isDownloaded = true;
// 		setTimeout(() => {
// 			if (isDownloaded) {
// 				resolve(videoName);
// 			} else {
// 				reject();
// 			}
// 		}, 3000);
// 	});
// }

// async function notifyOnDownload(videoName) {
// 	try {
// 		await downloadVideosPromise(videoName);
// 		console.log(videoName + " Has Been Successfully Downloaded");
// 	} catch (error) {
// 		console.log(
// 			Error("There are problem in downloading, Error Name: " + error)
// 		);
// 	}
// }

// console.log("Search For Videos");
// console.log("Select Video");
// notifyOnDownload("abdallah.mp4");
// console.log("Containue Browsing Videos");

// const EventEmitter = require("events");

// class VideoManager extends EventEmitter {
// 	constructor() {
// 		super();
// 	}

// 	download(videoName) {
// 		let score = 0;
// 		console.log(`Start Downloading: ${videoName}`);
// 		let interval = setInterval(() => {
// 			console.log(score);
// 			score += 25;
// 			if (score === 100) {
// 				console.log(`${videoName} Has Been Downloaded Successfuly`);
// 				this.emit("DownloadComplete");
// 				clearInterval(interval);
// 			}
// 		}, 1000);
// 	}

// 	upload(videoName) {
// 		let score = 0;
// 		console.log(`Start Uploading: ${videoName}`);
// 		let interval = setInterval(() => {
// 			score += 25;
// 			if (score === 100) {
// 				console.log(score);
// 				console.log(`${videoName} Has Been Uploaded Successfuly`);
// 				this.emit("UploadComplete");
// 				clearInterval(interval);
// 			}
// 		}, 1000);
// 	}
// }

// const videoManager = new VideoManager();

// videoManager.download("video.mp4");
// videoManager.on("DownloadComplete", () => {
// 	console.log("I reseved that the video has downloaded");
// });
