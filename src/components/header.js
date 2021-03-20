const Header = (title, date, temp) => {
	// TASK 1
	// ---------------------
	// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	//  <div class="header">
	//    <span class="date">{ date }</span>
	//    <h1>{ title }</h1>
	//    <span class="temp">{ temp }</span>
	//  </div>
	//

	const div = document.createElement("div");
	const span = document.createElement("span");
	const h1 = document.createElement("h1");
	const span2 = document.createElement("span");
	div.className = "header";
	span.className = "date";
	span2.className = "temp";
	span.textContent = date;
	h1.textContent = title;
	span2.textContent = temp;
	div.appendChild(span);
	div.appendChild(h1);
	div.appendChild(span2);
	console.log(div);
	return div;
};

const headerAppender = (selector) => {
	// TASK 2
	// ---------------------
	// Implement this function taking a css selector as its only argument.
	// It should create a header using the Header component above, passing arguments of your choosing.
	// It should append the header to the element in the DOM that matches the given selector.
	//

	const container = document.querySelector(selector);
	container.appendChild(Header());
};

export { Header, headerAppender };
