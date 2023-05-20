const PRODUCTS = [
    {
        id: 100,
        name: 'Grand Theft Auto V',
        price: 19,
        image: require('../assets/products/gta5.jpg'),
        description: 'Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.'
    },
    {
        id: 101,
        name: 'Skyrim',
        price: 9,
        image: require('../assets/products/skyrim.jpeg'),
        description: 'The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks.'
    },
    {
        id: 102,
        name: 'Tekken 7',
        price: 39,
        image: require('../assets/products/tekken.jpg'),
        description: 'Tekken 7 has many layers of depth to its fighting mechanics making it extremely hard to master. The main focus of the game is on movement which, if done carelessly, can prove to be fatal.'
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

