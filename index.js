fetch("FishEyeData.json")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);

		//

		const photographers = data.photographers;
		console.log(photographers);

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
			console.log(photographersPortrait);
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

			//

			const photographersTag = document.createElement("a");
			photographersTag.classList.add("artistTag");
			photographersTag.innerText = photographer.tags;
			photographersPrice.insertAdjacentElement("afterend", photographersTag);

			//
		});
	});
