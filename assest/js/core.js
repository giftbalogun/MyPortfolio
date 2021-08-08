window.uidata = {
	menu: [
		{
			title: "HOME",
			url: "/",
		},
		{
			title: "Portfolio",
			url: "https://portfolio.giftbalogun.name.ng/",
		},
		{
			title: "Github Page",
			url: "https://github.com/giftbalogun",
		},
	],
	config: {
		title: "Balogun Gift <br> The Offical Me",
		subtitle: "",
		logo: "assest/images/logo.png",
	},
};

// on load event
$.event.add(window, "load", onWinLoad);
$.event.add(window, "resize", onWinResize);

function onWinLoad() {
	let url = window.location.href;
	// console.log(url);

	//Fill the content of places
	$("#logo-holder").append(`<img src="${window.uidata.config.logo}"/>`);
	$("#footer-logo-holder").append(`<img src="${window.uidata.config.logo}"/>`);
	$("#title-holder").append(window.uidata.config.title);

	//Menu
	window.uidata.menu.forEach((elm) => {
		$("#menu-holder").prepend(
			`<li> <a href="${elm.url}">${elm.title}</a> </li>`
		);
		$("#hidden-menu").append(
			`<li> <a href="${elm.url}">${elm.title}</a> </li>`
		);
	});

	// Media Center
	$("#mediacenter .play-options .default").click();

	// Tabs
}

function onWinResize() { }

//Ensure the top color cahnge based on the mouse event
document.addEventListener("scroll", (elm) => {
	let banner = document.querySelector(".banner-area");
	let top = document.querySelector(".top");
	let topHeight = banner.offsetHeight;
	let scrollHeight = window.pageYOffset;

	if (scrollHeight >= topHeight - 120) {
		top.classList.add("scrollPast");
	} else {
		top.classList.remove("scrollPast");
	}
});

// Show amd Hide menu
document
	.querySelector(".top-menu .menu-title")
	.addEventListener("click", (elm) => {
		let btn = elm.target;

		if (btn.classList.contains("active")) {
			$("#hidden-menu").slideUp();
			btn.classList.remove("active");
		} else {
			$("#hidden-menu").slideDown();
			btn.classList.add("active");
		}
	});
