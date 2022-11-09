const data = [
  {
    id: 1,
    name: 'ICE WATCH Solar Power',
    img: 'https://m.media-amazon.com/images/I/61xWIQ76PUL._AC_UX679_.jpg',
    details:
      'https://www.amazon.de/ICE-WATCH-Herren-Silikon-Armband-020607/dp/B0BGLNTJJ6/ref=sr_1_6?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3C4V1A35S30VR&keywords=casual+watch&qid=1667900536&sprefix=casual+watch+%2Caps%2C183&sr=8-6',
    price: 109,
    cat: 'Casual',
  },
  {
    id: 2,
    name: 'CADISEN Mechanical Watch',
    img: 'https://m.media-amazon.com/images/I/61CxebGW8lL._AC_UX679_.jpg',
    details:
      'https://www.amazon.de/Automatische-Mechanische-Edelstahl-Synthetischer-Sportarmbanduhr%EF%BC%88Blau/dp/B09P86WPYL/ref=sr_1_5?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3C4V1A35S30VR&keywords=casual+watch&qid=1667900536&sprefix=casual+watch+%2Caps%2C183&sr=8-5',
    price: 131,
    cat: 'Casual',
  },
  {
    id: 3,
    name: 'Timex Casual Watch',
    img: 'https://m.media-amazon.com/images/I/51rgmEV2lQL._AC_UX679_.jpg',
    details:
      'https://www.amazon.de/Timex-TW2V40000-Casual-Watch/dp/B0BBNFSZ35/ref=sr_1_21?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3C4V1A35S30VR&keywords=casual+watch&qid=1667900536&sprefix=casual+watch+%2Caps%2C183&sr=8-21',
    price: 55,
    cat: 'Casual',
  },
  {
    id: 4,
    name: 'Pierre Cardin Analog Quarz',
    img: 'https://m.media-amazon.com/images/I/71bTzulw9QL._AC_UX679_.jpg',
    details:
      'https://www.amazon.de/Pierre-Cardin-CBV-1035-Watch/dp/B08LMQGB9Q/ref=sr_1_39?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3C4V1A35S30VR&keywords=casual+watch&qid=1667900536&sprefix=casual+watch+%2Caps%2C183&sr=8-39',
    price: 79,
    cat: 'Casual',
  },
  {
    id: 5,
    name: 'ICE WATCH Solar Power Marine Blue',
    img: 'https://m.media-amazon.com/images/I/81fBTPIGZbL._AC_UY741_.jpg',
    details:
      'https://www.amazon.de/ICE-WATCH-020605-Watch/dp/B0B2X1C56T/ref=sr_1_75?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3C4V1A35S30VR&keywords=casual+watch&qid=1667900761&sprefix=casual+watch+%2Caps%2C183&sr=8-75',
    price: 120,
    cat: 'Casual',
  },
  {
    id: 6,
    name: 'CASIO Analog',
    img: 'https://m.media-amazon.com/images/I/61Le1MvFErL._AC_UX679_.jpg',
    details:
      'https://www.amazon.de/Casio-GBD-200UU-1ER-CASIO-Analog-Schwarz/dp/B0B1Q46DPY/ref=sr_1_29?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=J1TUKNTOE66W&keywords=sport+watch+analog+herren&qid=1667901009&sprefix=sport+watch+analog+herren%2Caps%2C135&sr=8-29',
    price: 121,
    cat: 'Sport',
  },
  {
    id: 7,
    name: 'CASIO Analog Sport Watch',
    img: 'https://m.media-amazon.com/images/I/71TjG7wbIoL._AC_UX466_.jpg',
    details:
      'https://www.amazon.de/Herren-Digital-Kunststoff-Armband-GBA-900-1AER/dp/B095KYR2KJ/ref=sr_1_32?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=J1TUKNTOE66W&keywords=sport+watch+analog+herren&qid=1667901009&sprefix=sport+watch+analog+herren%2Caps%2C135&sr=8-32',
    price: 129,
    cat: 'Sport',
  },
  {
    id: 8,
    name: 'Citizen Sport Watch',
    img: 'https://m.media-amazon.com/images/I/51gRyitJItL._AC_.jpg',
    details:
      'https://www.amazon.de/Citizen-Herren-Armbanduhr-Analog-Quarz-BM8470-11EE/dp/B00B3Q3C4G/ref=sr_1_43?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=J1TUKNTOE66W&keywords=sport+watch+analog+herren&qid=1667901009&sprefix=sport+watch+analog+herren%2Caps%2C135&sr=8-43',
    price: 120,
    cat: 'Sport',
  },
  {
    id: 9,
    name: 'Timex Expedition® Camper',
    img: 'https://m.media-amazon.com/images/I/81mTdNUQ+uL._AC_UY741_.jpg',
    details:
      'https://www.amazon.de/Timex-Herren-Armbanduhr-Expedition-Analog-T425714E/dp/B000SZNSVA/ref=sr_1_41?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=J1TUKNTOE66W&keywords=sport+watch+analog+herren&qid=1667901009&sprefix=sport+watch+analog+herren%2Caps%2C135&sr=8-41',
    price: 45,
    cat: 'Sport',
  },
  {
    id: 10,
    name: 'Garmin EPIX',
    img: 'https://m.media-amazon.com/images/I/61smEsMxoBL._AC_SX679_.jpg',
    details:
      'https://www.amazon.de/Garmin-EPIX-GPS-Multisport-Smartwatch-AMOLED-Display-Tastenbedienung/dp/B09M49ZC8R/ref=sr_1_8?crid=20GHU07254FWC&keywords=sport+watch+herren&qid=1667900962&sprefix=Sport+watch%2Caps%2C236&sr=8-8',
    price: 705,
    cat: 'Sport',
  },
  {
    id: 11,
    name: 'Tommy Hilfiger Analog Quartz',
    img: 'https://m.media-amazon.com/images/I/71nMgzVXbKL._AC_UY741_.jpg',
    details:
      'https://www.amazon.de/Tommy-Hilfiger-Analoger-Armband-1791651/dp/B07V6CW22Q/ref=sr_1_12?keywords=elegant+watch+men&qid=1667901360&sprefix=elegant+watch%2Caps%2C161&sr=8-12',
    price: 115,
    cat: 'Elegant',
  },
  {
    id: 12,
    name: 'Lacoste Analog Quartz',
    img: 'https://m.media-amazon.com/images/I/71XzwFyNzaL._AC_UY741_.jpg',
    details:
      'https://www.amazon.de/Lacoste-2011002-Armbanduhr/dp/B07KTR21JF/ref=sr_1_14?keywords=elegant+watch+men&qid=1667901360&sprefix=elegant+watch%2Caps%2C161&sr=8-14',
    price: 95,
    cat: 'Elegant',
  },
  {
    id: 13,
    name: 'Orient Automatic Watch',
    img: 'https://m.media-amazon.com/images/I/51RP4AlHy5L._AC_UY741_.jpg',
    details:
      'https://www.amazon.de/Orient-RA-AK0008S-Automatische-Uhr-RA-AK0008S10B/dp/B09D9KBTVH/ref=sr_1_30?keywords=elegant+watch+men&qid=1667901360&sprefix=elegant+watch%2Caps%2C161&sr=8-30',
    price: 293,
    cat: 'Elegant',
  },
  {
    id: 14,
    name: 'BOSS Analag Quartz Steel Wristband',
    img: 'https://m.media-amazon.com/images/I/81vGEXZP8FL._AC_UY741_.jpg',
    details:
      'https://www.amazon.de/Hugo-BOSS-1513542-Herren-Armbanduhr/dp/B076B2NG7K/ref=sr_1_37?keywords=elegant+watch+men&qid=1667901360&sprefix=elegant+watch%2Caps%2C161&sr=8-37',
    price: 281,
    cat: 'Elegant',
  },
  {
    id: 15,
    name: 'Tommy Hilfiger Analog Quartz Leader',
    img: 'https://m.media-amazon.com/images/I/71icZ3UaAzL._AC_UY741_.jpg',
    details:
      'https://www.amazon.de/Tommy-Hilfiger-Zifferblatt-Armband-1791510/dp/B07G4FRFB2/ref=sr_1_47?keywords=elegant+watch+men&qid=1667901360&sprefix=elegant+watch%2Caps%2C161&sr=8-47',
    price: 252,
    cat: 'Elegant',
  },
  {
    id: 16,
    name: 'Casio WR',
    img: 'https://m.media-amazon.com/images/I/71vhv30LN3L._AC_UX679_.jpg',
    details:
      'https://www.amazon.de/Casio-Unisex-Erwachsene-Digital-Kunststoff-AE-1500WH-8BVEF/dp/B08Z1J4NWT/ref=sr_1_11?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=D721609AWJCI&keywords=digital+watch+men&qid=1667901977&sprefix=digital+watch+men%2Caps%2C141&sr=8-11',
    price: 39,
    cat: 'Digital',
  },
  {
    id: 17,
    name: 'Casio Digital Water Resistent',
    img: 'https://m.media-amazon.com/images/I/71PPB4ahTCL._AC_UY741_.jpg',
    details:
      'https://www.amazon.de/Casio-Collection-Herren-Digitaluhr-Dunkelgrau-W-218H-8AVEF/dp/B08W8NLY3B/ref=sr_1_14?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=D721609AWJCI&keywords=digital+watch+men&qid=1667901977&sprefix=digital+watch+men%2Caps%2C141&sr=8-14',
    price: 29,
    cat: 'Digital',
  },
  {
    id: 18,
    name: 'Timex Digital',
    img: 'https://m.media-amazon.com/images/I/91ieRi3jdPL._AC_UY741_.jpg',
    details:
      'https://www.amazon.de/Timex-Herren-Armbanduhr-Digital-Plastik-T5K802/dp/B00LBN0QP4/ref=sr_1_49?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=D721609AWJCI&keywords=digital+watch+men&qid=1667901977&sprefix=digital+watch+men%2Caps%2C141&sr=8-49',
    price: 34,
    cat: 'Digital',
  },
  {
    id: 19,
    name: 'Casio Vintage Watch',
    img: 'https://m.media-amazon.com/images/I/619ugaxg3TL._AC_UY500_.jpg',
    details:
      'https://www.amazon.de/Casio-A100WE-1AEF-Watch/dp/B09FT28C5T/ref=sr_1_55?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=D721609AWJCI&keywords=digital+watch+men&qid=1667902034&sprefix=digital+watch+men%2Caps%2C141&sr=8-55',
    price: 44,
    cat: 'Digital',
  },
  {
    id: 20,
    name: 'Diesel Only the Brave',
    img: 'https://m.media-amazon.com/images/I/518LYuWt64L._AC_UX679_.jpg',
    details:
      'https://www.amazon.de/Diesel-DZ1985-Watch/dp/B09PQDCHJC/ref=sr_1_10?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=D721609AWJCI&keywords=digital+watch+men&qid=1667901977&sprefix=digital+watch+men%2Caps%2C141&sr=8-10',
    price: 110,
    cat: 'Digital',
  },
  {
    id: 21,
    name: 'HUAWEI Watch GT 2',
    img: 'https://m.media-amazon.com/images/I/81ISayIOxqL._AC_SX679_.jpg',
    details:
      'https://www.amazon.de/HUAWEI-Watch-Herzfrequenz-Messung-Wiedergabe-wasserdicht-Matte-Black/dp/B07YNCWPMM/ref=sr_1_3?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2KGEI8OSO00DD&keywords=smart+watch+men&qid=1667902467&sprefix=smart+watch+men%2Caps%2C214&sr=8-3',
    price: 120,
    cat: 'Smartwatch',
  },
  {
    id: 22,
    name: 'Ticwatch Pro 3 Ultra GPS',
    img: 'https://m.media-amazon.com/images/I/71xZq3XXJLL._AC_SX679_.jpg',
    details:
      'https://www.amazon.de/Ticwatch-Pro-Ultra-GPS-Erm%C3%BCdungsbewertung/dp/B09GFH82JW/ref=sr_1_4?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2KGEI8OSO00DD&keywords=smart+watch+men&qid=1667902467&sprefix=smart+watch+men%2Caps%2C214&sr=8-4',
    price: 227,
    cat: 'Smartwatch',
  },
  {
    id: 23,
    name: 'Samsung Galaxy Watch5 Pro',
    img: 'https://m.media-amazon.com/images/I/61IAvgKlXJL._AC_SX679_.jpg',
    details:
      'https://www.amazon.de/Samsung-Gesundheitsfunktionen-Fitness-Tracker-ausdauernder-Herstellergarantie-Black/dp/B0B77P2LXL/ref=sr_1_8?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2KGEI8OSO00DD&keywords=smart+watch+men&qid=1667902467&sprefix=smart+watch+men%2Caps%2C214&sr=8-8',
    price: 462,
    cat: 'Smartwatch',
  },
  {
    id: 24,
    name: 'Amazfit GTR 3Pro',
    img: 'https://m.media-amazon.com/images/I/61cPbtRpSSL._AC_SX425_.jpg',
    details:
      'https://www.amazon.de/AMOLED-Display-%C3%9Cberwachung-Herzfrequenz-Bluetooth-Anrufen-Musiksteuerung-Black/dp/B09FXSF448/ref=sr_1_10?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2KGEI8OSO00DD&keywords=smart+watch+men&qid=1667902467&sprefix=smart+watch+men%2Caps%2C214&sr=8-10',
    price: 201,
    cat: 'Smartwatch',
  },
  {
    id: 25,
    name: 'Apple Watch Series 8',
    img: 'https://m.media-amazon.com/images/I/71yIswolIqL._AC_SX679_.jpg',
    details:
      'https://www.amazon.de/Apple-Watch-45mm-Smartwatch-Blutsauerstoffund-Always/dp/B0BDJJY92W/ref=sr_1_4?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=16K27MOGOZ7NI&keywords=apple+watch+men&qid=1667902505&sprefix=apple+watch+men%2Caps%2C155&sr=8-4',
    price: 534,
    cat: 'Smartwatch',
  },
  {
    id: 26,
    name: 'Seiko Chronograph',
    img: 'https://m.media-amazon.com/images/I/81nIq0KWTgL._AC_UX569_.jpg',
    details:
      'https://www.amazon.de/Seiko-Herren-Uhr-Edelstahl-Edelstahlband-SSB407P1/dp/B09S1492D5/ref=sr_1_5?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2YURNGP393RLA&keywords=luxury+watch+men&qid=1667902752&sprefix=luxury+watch+men%2Caps%2C212&sr=8-5',
    price: 301,
    cat: 'Luxury',
  },
  {
    id: 27,
    name: 'Emporio Armani',
    img: 'https://m.media-amazon.com/images/I/61wKCdAIWFL._AC_UY500_.jpg',
    details:
      'https://www.amazon.de/Emporio-Armani-AR11338-Watch/dp/B08WJ83YYG/ref=sr_1_31?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2YURNGP393RLA&keywords=luxury+watch+men&qid=1667902752&sprefix=luxury+watch+men%2Caps%2C212&sr=8-31',
    price: 281,
    cat: 'Luxury',
  },
  {
    id: 28,
    name: 'Tissot Luxury Watch',
    img: 'https://m.media-amazon.com/images/I/51i1DtZ9xYL._SX466_.jpg',
    details:
      'https://www.amazon.de/Tissot-Chrono-Xl-Classic-T116-617-16-047-00/dp/B0797ZR1RP/ref=sr_1_48?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2YURNGP393RLA&keywords=luxury+watch+men&qid=1667902752&sprefix=luxury+watch+men%2Caps%2C212&sr=8-48',
    price: 319,
    cat: 'Luxury',
  },
  {
    id: 29,
    name: 'Diesel Mega Chief Chronograph',
    img: 'https://m.media-amazon.com/images/I/71j65SNgiUL._AC_UY741_.jpg',
    details:
      'https://www.amazon.de/Diesel-DZ4360-Herren-Uhr/dp/B014S0WM80/ref=sr_1_59?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2YURNGP393RLA&keywords=luxury+watch+men&qid=1667902752&sprefix=luxury+watch+men%2Caps%2C212&sr=8-59',
    price: 281,
    cat: 'Luxury',
  },
  {
    id: 30,
    name: 'Citizen Chronograph',
    img: 'https://m.media-amazon.com/images/I/81jdY2k-77L._AC_UY500_.jpg',
    details:
      'https://www.amazon.de/Citizen-Herren-Armbanduhr-Analog-Edelstahl-AT9030-55L/dp/B00K69X5UW/ref=sr_1_80?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2YURNGP393RLA&keywords=luxury+watch+men&qid=1667902788&sprefix=luxury+watch+men%2Caps%2C212&sr=8-80',
    price: 503,
    cat: 'Luxury',
  },
]

const productsContainer = document.querySelector('.products')
const searchInput = document.querySelector('.search')
const catsContainer = document.querySelector('.cats')
const priceRange = document.querySelector('.price-range')
const priceValue = document.querySelector('.price-value')

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
  <div class="product">
    <img src=${product.img} />
    <span class="name">${product.name}</span>
    <span class="price-product">${product.price}€</span>
  </div>
  `
    )
    .join('')
}

displayProducts(data)

searchInput.addEventListener('keyup', (e) => {
  const value = e.target.value.toLowerCase()

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    )
  } else {
    displayProducts(data)
  }
})

const setCategories = () => {
  const allCats = data.map((item) => item.cat)
  const categories = [
    'All',
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i
    }),
  ]
  catsContainer.innerHTML = categories
    .map(
      (cat) =>
        `
      <span class="cat">${cat}</span>
    `
    )
    .join('')

    catsContainer.addEventListener('click', (e) => {
      const selectedCat = e.target.textContent

      selectedCat === "All" 
      ? displayProducts(data) 
      : displayProducts(data.filter((item) => item.cat === selectedCat))
    })
}

const setPrices = () => {
  const priceList = data.map(item => item.price)
  const minPrice = Math.min(...priceList)
  const maxPrice = Math.max(...priceList)

  priceRange.min = minPrice
  priceRange.max = maxPrice
  priceRange.value = maxPrice

  priceValue.textContent = maxPrice + " €"

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = e.target.value
    displayProducts(data.filter(item => item.price <= e.target.value))
  })
}

setCategories()
setPrices()