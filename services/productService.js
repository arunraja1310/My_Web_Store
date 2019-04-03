import * as categoryAPI from "./categoryService";
import axios from 'axios';
const products=
[{
        "id": 1,
        "name": "Brocolli - 1 Kg",
        "price": 120,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
        "category": {
            _id: "Cate18",
            name: "vegetables"
        }
    },
    {
        "id": 2,
        "name": "Cauliflower - 1 Kg",
        "price": 60,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg",
        "category": {
            _id: "Cate18",
            name: "vegetables"
        }
    },
    {
        "id": 3,
        "name": "Cucumber - 1 Kg",
        "price": 48,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg",
        "category": {
            _id: "Cate18",
            name: "vegetables"
        }
    },
    {
        "id": 4,
        "name": "Beetroot - 1 Kg",
        "price": 32,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg",
        "category": {
            _id: "Cate18",
            name: "vegetables"
        }
    },
    {
        "id": 5,
        "name": "Carrot - 1 Kg",
        "price": 56,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg",
        "category": {
            _id: "Cate18",
            name: "vegetables"
        }
    },
    {
        "id": 6,
        "name": "Tomato - 1 Kg",
        "price": 16,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg",
        "category": {
            _id: "Cate18",
            name: "vegetables"
        }
    },
    {
        "id": 7,
        "name": "Beans - 1 Kg",
        "price": 82,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg",
        "category": {
            _id: "Cate18",
            name: "vegetables"
        }
    },
    {
        "id": 8,
        "name": "Brinjal - 1 Kg",
        "price": 35,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg",
        "category": {
            _id: "Cate18",
            name: "vegetables"
        }
    },
    {
        "id": 9,
        "name": "Capsicum",
        "price": 60,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg",
        "category": {
            _id: "Cate18",
            name: "vegetables"
        }
    },
    {
        "id": 10,
        "name": "Mushroom - 1 Kg",
        "inventory":"lowstock",
        "price": 75,
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg",
        "category": {
            _id: "Cate18",
            name: "vegetables"
        }
    },
    {
        "id": 11,
        "name": "Potato - 1 Kg",
        "price": 22,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/potato.jpg",
        "category": {
            _id: "Cate18",
            name: "vegetables"
        }
    },
    {
        "id": 12,
        "name": "Pumpkin - 1 Kg",
        "price": 48,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg",
        "category": {
            _id: "Cate18",
            name: "vegetables"
        }
    },
    {
        "id": 13,
        "name": "Corn - 1 Kg",
        "price": 75,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/corn.jpg",
        "category": {
            _id: "Cate18",
            name: "vegetables"
        }
    },
    {
        "id": 14,
        "name": "Onion - 1 Kg",
        "price": 16,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
        "category": {
            _id: "Cate18",
            name: "vegetables"
        }
    },
    {
        "id": 15,
        "name": "Apple - 1 Kg",
        "price": 72,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg",
        "category": {
            _id: "Cate14",
            name: "fruits"
        }
    },
    {
        "id": 16,
        "name": "Banana - 1 Kg",
        "price": 45,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",
        "category": {
            _id: "Cate14",
            name: "fruits"
        }
    },
    {
        "id": 17,
        "name": "Grapes - 1 Kg",
        "price": 60,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
        "category": {
            _id: "Cate14",
            name: "fruits"
        }
    },
    {
        "id": 18,
        "name": "Mango - 1 Kg",
        "price": 75,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
        "category": {
            _id: "Cate14",
            name: "fruits"
        }
    },
    {
        "id": 19,
        "name": "Musk Melon - 1 Kg",
        "price": 36,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
        "category": {
            _id: "Cate14",
            name: "fruits"
        }
    },
    {
        "id": 20,
        "name": "Orange - 1 Kg",
        "price": 75,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg",
        "category": {
            _id: "Cate14",
            name: "fruits"
        }
    },
    {
        "id": 21,
        "name": "Pears - 1 Kg",
        "price": 69,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",
        "category": {
            _id: "Cate14",
            name: "fruits"
        }
    },
    {
        "id": 22,
        "name": "Pomegranate - 1 Kg",
        "price": 95,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pomegranate.jpg",
        "category": {
            _id: "Cate14",
            name: "fruits"
        }
    },
    {
        "id": 23,
        "name": "Raspberry - 1/4 Kg",
        "price": 160,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg",
        "category": {
            _id: "Cate14",
            name: "fruits"
        }
    },
    {
        "id": 24,
        "name": "Strawberry - 1/4 Kg",
        "price": 180,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/strawberry.jpg",
        "category": {
            _id: "Cate14",
            name: "fruits"
        }
    },
    {
        "id": 25,
        "name": "Water Melon - 1 Kg",
        "price": 28,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/water-melon.jpg",
        "category": {
            _id: "Cate14",
            name: "fruits"
        }
    },
    {
        "id": 26,
        "name": "Almonds - 1/4 Kg",
        "price": 200,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/almonds.jpg",
        "category": {
            _id: "Cate20",
            name: "nuts"
        }
    },
    {
        "id": 27,
        "name": "Pista - 1/4 Kg",
        "price": 190,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pista.jpg",
        "category": {
            _id: "Cate20",
            name: "nuts"
        }
    },
    {
        "id": 28,
        "name": "Nuts Mixture - 1 Kg",
        "price": 950,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/nuts-mixture.jpg",
        "category": {
            _id: "Cate20",
            name: "nuts"
        }
    },
    {
        "id": 29,
        "name": "Cashews - 1 Kg",
        "price": 650,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/cashews.jpg",
        "category": {
            _id: "Cate20",
            name: "nuts"
        }
    },
    {
        "id": 30,
        "name": "Walnuts - 1/4 Kg",
        "price": 170,
        "inventory":"lowstock",
        "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/walnuts.jpg",
        "category": {
            _id: "Cate20",
            name: "nuts"
        }
    }
]
export function getProducts() {
    return products;
}

export function getProduct(pid) {
    const prodid = pid;
    let ss = products.find(m => m.id === parseInt(prodid));
    return ss;
}

export function saveProduct(pid) {
    let productInDb = products.find(m => m.id === pid.id) || {};
    productInDb.name = pid.name;
    productInDb.category = categoryAPI.category.find(g => g.id === pid.genreId);
    productInDb.price = pid.price;

    if (!productInDb.id) {
        productInDb.id = Date.now().toString();
        products.push(productInDb);
    }

    return productInDb;
}

export function deleteProduct(id) {
    let productInDb = products.find(m => m.id === id);
    products.splice(products.indexOf(productInDb), 1);
    return productInDb;
}