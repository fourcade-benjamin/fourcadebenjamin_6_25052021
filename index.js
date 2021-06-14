fetch("FishEyeData.json")
	.then((response) => response.json())
	.then((data) => {
		//

		//

		data.photographers.forEach((photographer) => {
			//	DIV PRINCIPALE / CHAQUE ARTISTE

			const photographersBox = document.createElement("div");
			photographersBox.classList.add("artistBox");
			document.getElementById("fullName").appendChild(photographersBox);

			// IMG PHOTO / CHAQUE ARTISTE

			const photographersPortrait = document.createElement("img");
			photographersPortrait.src = `./img/Photographers_ID_Photos/${photographer.portrait}`;
			photographersPortrait.style.objectFit = "cover";
			photographersBox.appendChild(photographersPortrait);

			//	P NOM / CHAQUE ARTISTE

			const photographersName = document.createElement("p");
			photographersName.classList.add("artistName");
			photographersName.innerText = photographer.name;
			photographersBox.appendChild(photographersName);

			//	P VILLE + PAYS / CHAQUE ARTISTE

			const photographersLoc = document.createElement("p");
			photographersLoc.classList.add("artistLocation");
			photographersLoc.innerText =
				photographer.city + "," + photographer.country;
			photographersName.insertAdjacentElement("afterend", photographersLoc);

			//	CITATION / CHAQUE ARTISTE

			const photographersTagline = document.createElement("p");
			photographersTagline.classList.add("artistTagline");
			photographersTagline.innerText = photographer.tagline;
			photographersLoc.insertAdjacentElement("afterend", photographersTagline);

			//	PRIX / CHAQUE ARTISTE

			const photographersPrice = document.createElement("p");
			photographersPrice.classList.add("artistPrice");
			photographersPrice.innerText = photographer.price + "€/jour";
			photographersTagline.insertAdjacentElement(
				"afterend",
				photographersPrice
			);

			// TAGBOX

			const tagBox = document.createElement("div");
			tagBox.classList.add("tagBox");
			photographersPrice.insertAdjacentElement("afterend", tagBox);

			// TAGS PROFIL

			x = photographer.tags;

			x.forEach(myFunction);

			function myFunction(item) {
				const photographersTag = document.createElement("a");
				photographersTag.classList.add("artistTag");
				photographersTag.innerText = "#" + "" + item;
				tagBox.insertAdjacentElement("afterbegin", photographersTag);
			}
		});

		// TAGS NAVBAR

		const navBar = document.getElementById("navBar");
		const tab1 = data.photographers[0].tags;

		const tab2 = data.photographers[1].tags;

		const tab3 = data.photographers[2].tags;

		const tab4 = tab1.concat(tab2, tab3);

		tab4.pop();

		tab4.forEach(myFunction2);
		function myFunction2(items) {
			const test = document.createElement("a");
			test.classList.add("artistTag");
			test.innerText = "#" + "" + items;
			navBar.insertAdjacentElement("afterbegin", test);
		}

		// DISPLAY

		tag1 = tab4[2];

		console.log(tag1);
	});
