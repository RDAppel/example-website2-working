
const cardInfos = [{
	"title": "Nike",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
	"color": "#deaf01"
}, {
	"title": "Independent",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg",
	"color": "#554a33"
}, {
	"title": "Michael Kors",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
	"color": "#01322f"
}, {
	"title": "HYPERX",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"image": "https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg",
	"color": "#7f4252"
}, {
	"title": "Sibaristica",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"image": "https://images.pexels.com/photos/4829069/pexels-photo-4829069.jpeg",
	"color": "#c95e34"
}]

const displayCard = (card, { title, text, image, color }) => {

	card.style.backgroundImage = `url(${image}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
	card.style.color = color

	const h1 = card.querySelector('h1')
	h1.textContent = title

	const p = card.querySelector('p')
	p.textContent = text
}

const cards = document.querySelectorAll('.card')
for (let i = 0; i < cards.length; i++) {
	displayCard(cards[i], cardInfos[i])
}