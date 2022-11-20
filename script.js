const root = document.querySelector("#root");

const header = document.createElement("header");
const h1 = document.createElement("h1");
const cart = document.createElement("div");
const cartCount = document.createElement("span");
const cartIcon = document.createElement("i");

h1.textContent = "Book shop";
cart.classList.add("cart");
cartCount.classList.add("cart-count");
cartCount.textContent = "0";
cartIcon.classList.add("fa-solid", "fa-cart-shopping", "fa-xl", "cart-icon");

cart.append(cartCount, cartIcon);

header.append(h1, cart);

const content = document.createElement("div");
const h2 = document.createElement("h2");
const books = document.createElement("div");
async function getBooks() {
    const data = await fetch("https://raw.githubusercontent.com/rolling-scopes-school/js-fe-course-en/main/tasks/books-shop/books.json");
    const bookList = await data.json();

    for (let i = 0; i < bookList.length; i++) {
        const book = document.createElement("div");
        const image = document.createElement("img");
        const info = document.createElement("div");
        const title = document.createElement("h3");
        const author = document.createElement("span");
        const price = document.createElement("span");
        const showMore = document.createElement("a");
        const moreModal = document.createElement("dialog");
        const closeModalButton = document.createElement("button");
        const addToCart = document.createElement("a");
        const cartPlusIcon = document.createElement("i");

        // const openCart = e => {
        //     const 
        // };

        book.classList.add("book");
        book.dataset.i = i;
        image.classList.add("cover");
        image.src = `img/${i}.jpg`;
        image.width = 200;
        image.height = 300;
        info.classList.add("info");
        title.textContent = bookList[i].title;
        author.textContent = bookList[i].author;
        price.textContent = `\$${bookList[i].price}`;
        showMore.textContent = "Show more";
        showMore.classList.add("show-more");
        showMore.href = "javascript:void";
        showMore.addEventListener('click', e => {
            e.preventDefault();
            moreModal.showModal();
        });
        moreModal.textContent = bookList[i].description;
        closeModalButton.classList.add("modal-close");
        closeModalButton.textContent = "Close";
        closeModalButton.addEventListener('click', e => {
            e.preventDefault();
            moreModal.close();
        });
        moreModal.append(closeModalButton);
        addToCart.classList.add("add-to-cart");
        addToCart.textContent = "Add to cart";
        cartPlusIcon.classList.add("fa-solid", "fa-cart-plus");

        addToCart.appendChild(cartPlusIcon);

        info.append(title, author, price, showMore, moreModal, addToCart);

        book.append(image, info);

        books.appendChild(book);
    }
}
// [
//     { author: "J.K. Rowling", title: "Harry Poter", img: "https://m.media-amazon.com/images/I/51P1Rfz5n3L._AC_SY780_.jpg", price: 13.99, description: "Galloping gargoyles … 2022 is the silver anniversary of J.K. Rowling’s magical classic Harry Potter and the Philosopher’s Stone! The boy wizard Harry Potter has been casting a spell over young readers and their families ever since 1997. Now the first book in this unmissable series celebrates 25 years in print! The paperback edition of the tale that introduced us to Harry, Ron and Hermione has been updated and dressed in silver to mark the occasion. It’s time to take the magical journey of a lifetime … Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry’s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin! These editions of the classic and internationally bestselling Harry Potter series feature thrilling jacket artwork by award-winning illustrator Jonny Duddle. They are the perfect starting point for anyone who’s ready to lose themselves in the greatest children’s story of all time. Available for one year only, Harry’s first adventure – Harry Potter and the Philosopher’s Stone – has been emblazoned in silver and refreshed with extra content including a new Hogwarts crest illustration and Q&A with Jonny Duddle, plus fun facts exploring the origins of names such as Albus Dumbledore, Hedwig and other favourite characters." },
//     { author: "J.R.R. Tolkien", title: "The Lords of the Rings", img: "https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/6/9/6999906707569.jpg", price: 18.99, description: "Continuing the story begun in The Hobbit, all three parts of the epic masterpiece, The Lord of the Rings, in one paperback. Features the definitive edition of the text, fold-out flaps with the original two-colour maps, and a revised and expanded index. Sauron, the Dark Lord, has gathered to him all the Rings of Power – the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring – the ring that rules them all – which has fallen into the hands of the hobbit, Bilbo Baggins. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as the Ring is entrusted to his care. He must leave his home and make a perilous journey across the realms of Middle-earth to the Crack of Doom, deep inside the territories of the Dark Lord. There he must destroy the Ring forever and foil the Dark Lord in his evil purpose. Since it was first published in 1954, The Lord of the Rings has been a book people have treasured. Steeped in unrivalled magic and otherworldliness, its sweeping fantasy has touched the hearts of young and old alike. This single-volume paperback edition is the definitive text, fully restored with almost 400 corrections – with the full co-operation of Christopher Tolkien – and features a striking new cover." },
//     { author: "Andrzej Sapkowski", title: "The Witcher", img: "https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/2/8/2899906620028.jpg", price: 12.49, description: "Geralt is a Witcher, a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless hunter. Yet he is no ordinary killer. His sole purpose: to destroy the monsters that plague the world. But not everything monstrous-looking is evil and not everything fair is good . . . and in every fairy tale there is a grain of truth." }
// ];

content.classList.add("content");
h2.textContent = "Collection";
books.classList.add("books");

getBooks();

content.append(h2, books);

const footer = document.createElement("footer");

root.append(header, content, footer);