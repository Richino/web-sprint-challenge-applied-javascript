import axios from "axios";
const Tabs = (topics) => {
	// TASK 3
	// ---------------------
	// Implement this function which takes an array of strings ("topics") as its only argument.
	// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
	// then the function returns the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	// <div class="topics">
	//   <div class="tab">javascript</div>
	//   <div class="tab">bootstrap</div>
	//   <div class="tab">technology</div>
	// </div>
	//

	const div = document.createElement("div");
	div.className = "topics";
	topics.forEach(function (str) {
		let tab = document.createElement("div");
		tab.className = "tab";
		tab.textContent = str;
		div.appendChild(tab);
	});

	return div;
};

const tabsAppender = (selector) => {
	// TASK 4
	// ---------------------
	// Implement this function which takes a css selector as its only argument.
	// It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
	// Find the array of topics inside the response, and create the tabs using the Tabs component.
	// Append the tabs to the element in the DOM that matches the selector passed to the function.
	//

	const topics = axios.get("https://lambda-times-api.herokuapp.com/topics");
	var tabs = document.querySelector(selector);

	topics.then((file) => {
		tabs.appendChild(Tabs(file.data.topics));
	});
};

export { Tabs, tabsAppender };
