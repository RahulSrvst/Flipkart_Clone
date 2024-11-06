import React, { useState } from "react";
import { Box, Button, Modal, TextField, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";

const minInputProps = {
  inputProps: { min: 0 },
};

function ManyProducts({ data }) {
  const style = {
    position: "absolute",
    top: "10%",
    left: "25%",
    bottom: "1%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "90%",
    maxWidth: "600px",
  };

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [Data, setData] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    category: "",
    brand: "",
    width: "",
    height: "",
    depth: "",
    warrantyInformation: "",
    shippingInformation: "",
    images: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      title: formData.title,
      description: formData.description,
      price: parseFloat(formData.price),
      discountPercentage: parseFloat(formData.discountPercentage),
      rating: parseFloat(formData.rating),
      stock: parseInt(formData.stock, 10),
      category: formData.category,
      brand: formData.brand,
      dimensions: {
        width: parseFloat(formData.width),
        height: parseFloat(formData.height),
        depth: parseFloat(formData.depth),
      },
      warrantyInformation: formData.warrantyInformation,
      shippingInformation: formData.shippingInformation,
      images: formData.images, 
    };

    
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((newProduct) => {
        setData((prevData) => [...prevData, newProduct]); // Add the new product to state
        console.log("Product added:", newProduct);
      })
      .catch((error) => console.error("Error adding product:", error));

    handleClose();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="bg-white p-8">
      <div className="flex items-center mb-6 justify-between">
        <h4>Our Products</h4>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {data?.map((item, index) => (
          <div key={index} className="w-full md:w-auto">
            <div className="border border-gray-200 rounded-md p-2 flex md:flex-col items-center">
              <img
                src={item?.images?.[0]}
                alt={item?.title}
                className="w-full h-auto md:h-40 cursor-pointer"
                onClick={() => navigate(`/productsDetails/${item.id}`)}
              />
              <div className="flex-col items-center ml-3">
                <div className="font-bold truncate w-32 text-[16px]">
                  {item.title}
                </div>
                <div className="text-gray-500 text-[14px]">
                  From ₹{(item.price * 1000).toFixed(0)}
                </div>
                <div>
                  <button class="bg-blue-500 text-white font-semibold  px-1 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style }} className="!overflow-y-scroll  !gap-3">
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              onChange={handleChange}
              name="title"
              fullWidth
              required
              margin="normal"
            />

            <TextField
              label="Description"
              onChange={handleChange}
              name="description"
              fullWidth
              required
              margin="normal"
              multiline
              rows={4}
            />

            <TextField
              label="Price"
              type="number"
              onChange={handleChange}
              name="price"
              fullWidth
              required
              margin="normal"
              InputProps={minInputProps}
            />

            <TextField
              label="Discount Percentage"
              type="number"
              onChange={handleChange}
              name="discountPercentage"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Rating"
              type="number"
              onChange={handleChange}
              name="rating"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Stock"
              type="number"
              onChange={handleChange}
              name="stock"
              fullWidth
              required
              margin="normal"
              InputProps={minInputProps}
            />

            <TextField
              label="Category"
              onChange={handleChange}
              name="category"
              fullWidth
              required
              margin="normal"
            />

            <TextField
              label="Brand"
              onChange={handleChange}
              name="brand"
              fullWidth
              required
              margin="normal"
            />

            <Box display="flex" gap={2}>
              <TextField
                label="Width"
                type="number"
                onChange={handleChange}
                name="width"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Height"
                type="number"
                onChange={handleChange}
                name="height"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Depth"
                type="number"
                onChange={handleChange}
                name="depth"
                fullWidth
                margin="normal"
              />
            </Box>

            <TextField
              label="Warranty Information"
              onChange={handleChange}
              name="warrantyInformation"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Shipping Information"
              onChange={handleChange}
              name="shippingInformation"
              fullWidth
              margin="normal"
            />

            {/* <Input
              type="file"
              accept="images/*"
              onChange={handleChange}
              name="images"
              fullWidth
              sx={{ mt: 2 }}
            /> */}

            <Box mt={2} display="flex" justifyContent="space-between">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default ManyProducts;
