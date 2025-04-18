
var vendors = [
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

vendors.sort(function (a, b) { return a.id - b.id; });

vendors.forEach(function (vendor) {
    console.log("Vendor ID: ".concat(vendor.id));
    console.log("Vendor Name: ".concat(vendor.name));
    console.log("Vendor Rating: ".concat(vendor.rating));
    console.log("Products:");
    vendor.products.forEach(function (product) {
        console.log("  Product ID: ".concat(product.productId, ", Name: ").concat(product.productName, ", Price: ").concat(product.productPrice));
    });

});
