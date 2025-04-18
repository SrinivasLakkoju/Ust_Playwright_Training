let productCount = 0;
        const vendors = [];

        function addProduct() {
            productCount++;
            const productSection = document.getElementById('productSection');
            
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.id = `product-${productCount}`;
            productItem.innerHTML = `
                <label for="productId-${productCount}">Product ID:</label>
                <input type="number" id="productId-${productCount}" name="productId" required><br>

                <label for="productName-${productCount}">Product Name:</label>
                <input type="text" id="productName-${productCount}" name="productName" required><br>

                <label for="productPrice-${productCount}">Product Price:</label>
                <input type="number" id="productPrice-${productCount}" name="productPrice" required><br>
            `;
            productSection.appendChild(productItem);
        }

        document.getElementById('vendorForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Collect vendor details
            const vendorId = parseInt(document.getElementById('vendorId').value);
            const vendorName = document.getElementById('vendorName').value;
            const vendorRating = parseFloat(document.getElementById('vendorRating').value);

            // Collect product details
            const products = [];
            for (let i = 1; i <= productCount; i++) {
                const productId = parseInt(document.getElementById(`productId-${i}`).value);
                const productName = document.getElementById(`productName-${i}`).value;
                const productPrice = parseFloat(document.getElementById(`productPrice-${i}`).value);

                products.push({ productId, productName, productPrice });
            }

            // Store vendor data in array
            vendors.push({ vendorId, vendorName, vendorRating, products });

            // Redirect to dashboard page with sorted data
            displayVendors();
        });

        function displayVendors() {
            // Sort vendors by vendor rating (highest to lowest)
            vendors.sort((a, b) => b.vendorRating - a.vendorRating);

            // Redirect to dashboard
            const dashboardWindow = window.open('', '_blank');
            dashboardWindow.document.write('<h1>Vendor Dashboard</h1>');

            vendors.forEach(vendor => {
                dashboardWindow.document.write(`<h2>Vendor ID: ${vendor.vendorId}</h2>`);
                dashboardWindow.document.write(`<p>Vendor Name: ${vendor.vendorName}</p>`);
                dashboardWindow.document.write(`<p>Vendor Rating: ${vendor.vendorRating}</p>`);
                dashboardWindow.document.write('<h3>Products:</h3>');
                const table = `
                    <table>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${vendor.products.map(product => `
                                <tr>
                                    <td>${product.productId}</td>
                                    <td>${product.productName}</td>
                                    <td>${product.productPrice}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                `;
                dashboardWindow.document.write(table);
            });

            dashboardWindow.document.close();
        }
