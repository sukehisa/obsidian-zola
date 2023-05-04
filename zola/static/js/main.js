// Set darkmode
function isDark() {
	return document.body.classList.contains("dark");
}

document.getElementById("mode").addEventListener("click", () => {
	document.body.classList.toggle("dark");

	localStorage.setItem("theme", isDark() ? "dark" : "light");

	// Update graph colors if exists
	if (graph) {
		graph.setOptions({
			nodes: {
				color: isDark() ? "#8c8e91" : "#dee2e6",
				font: {
					color: isDark() ? "#c9cdd1" : "#616469",
					strokeColor: isDark() ? "#c9cdd1" : "#616469",
				},
			},
		});
	}
});

// Collapsible sidebar code (it's ugly but I don't care)
var sections_sidebar = $(".collapsible-section.sidebar");
if (!sidebar_collapsed) {
	sections_sidebar.addClass("open");
}

// Add click listener to all collapsible sections
for (let i = 0; i < sections_sidebar.length; i++) {
	// Initial setup
	let wrapper = $(sections_sidebar[i].nextElementSibling);
	let wrapper_children = wrapper.find("> ul");

	if (wrapper_children.length > 0) {
		let page_list = $(wrapper_children[0]);
		if (sidebar_collapsed) {
			wrapper.height(0);
		} else {
			wrapper.addClass("open");
			wrapper.height(page_list.outerHeight(true));
		}
	}

	// Click listener
	sections_sidebar[i].addEventListener("click", function () {
		// Toggle class
		this.classList.toggle("open");

		// Change wrapper height and class
		let wrapper = $(sections_sidebar[i].nextElementSibling);
		let wrapper_children = wrapper.find("> ul");

		if (wrapper_children.length > 0) {
			let page_list = $(wrapper_children[0]);
			if (wrapper.hasClass("open")) {
				wrapper.removeClass("open");
				wrapper.height(0);
			} else {
				wrapper.addClass("open");
				wrapper.height(page_list.outerHeight(true));
			}
		}
	});
}


var sections_navbar = $(".collapsible-section.navbar");

// Add click listener to all collapsible sections
for (let j = 0; j < sections_navbar.length; j++) {
	// Initial setup
	let wrapper = $(sections_navbar[j].nextElementSibling);
	let wrapper_children = wrapper.find("> ul");

	if (wrapper_children.length > 0) {
		wrapper.height(0);
	}
	// Click listener
	sections_navbar[j].addEventListener("click", function () {
		// Toggle class
		this.classList.toggle("open");

		// Change wrapper height and class
		let wrapper = $(sections_navbar[j].nextElementSibling);
		let wrapper_children = wrapper.find("> ul");

		if (wrapper_children.length > 0) {
			let page_list = $(wrapper_children[0]);
			if (wrapper.hasClass("open")) {
				wrapper.removeClass("open");
				wrapper.height(0);
			} else {
				wrapper.addClass("open");
				wrapper.height(page_list.outerHeight(true));
			}
		}
	});
}
