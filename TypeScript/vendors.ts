type Vendor = {
    id: number;
    name: string;
    rating: number;
    products: { productId: number; productName: string; productPrice: number }[];
};


let vendors: Vendor[] = [
    {
        id: 3,
        name: "Vendor C",
        rating: 4.5,
        products: [
            { productId: 101, productName: "Product A", productPrice: 100 },
            { productId: 102, productName: "Product B", productPrice: 200 },
        ],
    },
    {
        id: 1,
        name: "Vendor A",
        rating: 3.8,
        products: [
            { productId: 103, productName: "Product C", productPrice: 150 },
        ],
    },
    {
        id: 2,
        name: "Vendor B",
        rating: 4.0,
        products: [
            { productId: 104, productName: "Product D", productPrice: 300 },
        ],
    },
];


vendors.sort((a, b) => a.id - b.id);

vendors.forEach((vendor) => {
    console.log(`Vendor ID: ${vendor.id}`);
    console.log(`Vendor Name: ${vendor.name}`);
    console.log(`Vendor Rating: ${vendor.rating}`);
    console.log(`Products:`);
    vendor.products.forEach((product) => {
        console.log(
            `  Product ID: ${product.productId}, Name: ${product.productName}, Price: ${product.productPrice}`
        );
    });
    
});
