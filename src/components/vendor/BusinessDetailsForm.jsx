import React, { useState, useEffect } from "react";
import InputField2 from "../ui/InputField2";
import PrimaryNoneFillButton from "../ui/PrimaryNoneFillButton";
import { fetchVendorById } from "../../services/vendorprofileServices";
import api from "../../api";

function BusinessDetailsForm() {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]); // State to manage image files
  const [profilePhoto, setProfilePhoto] = useState("");

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `Branch ${items.length + 1}`,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    const renamedItems = newItems.map((item, index) => ({
      ...item,
      name: `Branch ${index + 1}`,
      id: index + 1,
    }));
    setItems(renamedItems);
  };

  const addImageInput = () => {
    if (images.length < 20) {
      setImages([...images, { id: images.length + 1, file: null }]);
    }
  };

  const handleImageChange = (id, file) => {
    setImages(
      images.map((image) => (image.id === id ? { ...image, file } : image))
    );
  };

  // File input handler
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      // Update the preview state
      setProfilePhoto(URL.createObjectURL(file));

      // Optionally, prepare to send the file to the server
      setFormData({ ...formData, pic: file });
    }
  };

  // Trigger hidden file input
  const triggerFileInput = () => {
    document.getElementById("profileFileInput").click();
  };

  const [formData, setFormData] = useState({
    pic: null,
    first_name: "",
    last_name: "",
    business_name: "",
    contact_number: "",
    email: "",
    address: "",
    city: "",
    branch: "",
    description: "",
    images: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const response = await fetchVendorById();
        const { vendorDetails } = response;

        if (!vendorDetails) {
          throw new Error("No vendor data found");
        }

        // Parse branch details
        let parsedBranches = [];
        if (vendorDetails.branch) {
          try {
            parsedBranches = JSON.parse(vendorDetails.branch);
          } catch (e) {
            console.error("Error parsing branch data:", e.message);
          }
        }

        // Set branches based on parsed data
        if (parsedBranches.length > 0) {
          const branchItems = Object.entries(parsedBranches[0]).map(
            ([key, value], index) => ({
              id: index + 1,
              name: key,
              value,
            })
          );
          setItems(branchItems);
        }

        setFormData({
          pic: vendorDetails.pic || "",
          first_name: vendorDetails.first_name || "",
          last_name: vendorDetails.last_name || "",
          business_name: vendorDetails.business_name || "",
          contact_number: vendorDetails.contact_number || "",
          email: vendorDetails.email || "",
          address: vendorDetails.address || "",
          city: vendorDetails.city || "",
          branch: parsedBranches || [],
          description: vendorDetails.description || "",
          images: vendorDetails.images || [],
        });

        // Dynamically set profile photo after fetching data
        setProfilePhoto(`${api.defaults.baseURL}/uploads/${vendorDetails.pic}`);

        console.log("Fetch Data:", vendorDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchVendor();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    e.preventDefault();
    setError("");
    // const { a}
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-col sm:flex-row items-center sm:justify-start gap-10 sm:gap-5 mb-5">
          <div className="relative">
            <img
              src={profilePhoto}
              alt="profile"
              className="w-32 h-32 rounded-full"
            />

            {/* Hidden file input */}
            <input
              type="file"
              id="profileFileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            {/* Edit icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute text-black bg-white rounded-lg cursor-pointer size-10 left-12 top-28"
              onClick={triggerFileInput}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center sm:items-start">
            <h1 className="text-3xl text-center text-black">
              {formData.first_name} {formData.last_name}
            </h1>
            <h3 className="text-xl text-center text-black">Photographer</h3>
          </div>
        </div>
        <div className="w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 pb-5 mb-5">
          <div className="w-full p-3 px-5 pt-10">
            <h1 className="text-4xl text-black">Business Details</h1>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center w-full gap-5 p-3 px-5 md:flex-row lg:gap-10">
            <div className="md:w-[45%] w-full">
              <InputField2
                id="first_name"
                name="First Name "
                placeholder="First Name"
                type="text"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[45%] w-full">
              <InputField2
                id="last_name"
                name="Last Name "
                placeholder="Last Name "
                type="text"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[45%] w-full">
              <InputField2
                id="business_name"
                name="Business Name "
                placeholder="Business Name "
                type="text"
                value={formData.business_name}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[45%] w-full">
              <InputField2
                id="contact_number"
                name="Contact Number "
                placeholder="Contact Number "
                type="text"
                value={formData.contact_number}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[45%] w-full">
              <InputField2
                id="email"
                name="Email "
                placeholder="Email "
                type="text"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[45%] w-full">
              <InputField2
                id="address"
                name="Address "
                placeholder="Address "
                type="text"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[45%] w-full">
              <InputField2
                id="city"
                name="City "
                placeholder="City "
                type="text"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-[45%] w-full">
              {/* <InputField2
                id={1}
                name={"Main Branch"}
                placeholder={"Input"}
                type={"text"}
                value={formData.first_name}
                onChange={handleChange}
              /> */}
            </div>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-[5%] justify-center items-center w-full p-3 px-5">
            {items.map((item, index) => (
              <div className="md:w-[45%] w-full relative " key={item.id}>
                <InputField2
                  id={item.id}
                  name={item.name}
                  placeholder={"Input"}
                  type={"text"}
                  value={item.value}
                  onChange={(e) =>
                    setItems(
                      items.map((branch) =>
                        branch.id === item.id
                          ? { ...branch, value: e.target.value }
                          : branch
                      )
                    )
                  }
                />
                {item.name !== "Main Branch" && (
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="absolute top-0 right-0 font-bold text-red-500 text-md"
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end items-center p-3 px-5 md:px-[5%]">
            <h5
              className="cursor-pointer text-custom-primary hover:underline"
              onClick={addItem}
            >
              + Add new branch
            </h5>
          </div>

          <div className="w-full h-40 p-3 px-5 md:px-[5%]">
            <div>
              <style jsx>{`
                .coolinput2 {
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                  position: static;
                }

                .coolinput2 label.text2 {
                  font-size: 1rem;
                  color: #000000;
                  font-weight: 500;
                  position: relative;
                  top: 0.5rem;
                  margin: 0 0 0 7px;
                  padding: 0 3px;
                  background: #fff8f5;
                  width: fit-content;
                }

                .coolinput2 .input2 {
                  padding: 11px 10px;
                  font-size: 1rem;
                  border: 1px #000000 solid;
                  border-radius: 5px;
                  background: #fff8f5;
                  height: 100px;
                  color: #000000;
                  width: 100%; /* Ensure it occupies full width */
                }

                .coolinput2 .input2:focus {
                  outline: none;
                }
              `}</style>
              <div className="coolinput2">
                <label htmlFor="Description " className="text2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="Description "
                  className="input2"
                  placeholder="..."
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Dynamic Image Inputs */}
          <div className="w-full p-3 px-5">
            <h1 className="text-4xl text-black pb-5">Images</h1>
            {images.map((image, index) => (
              <div key={image.id} className="flex items-center gap-5 mb-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleImageChange(image.id, e.target.files[0])
                  }
                  className="block w-full border rounded-lg p-2"
                />
                {image.file && (
                  <img
                    src={URL.createObjectURL(image.file)}
                    alt={`Preview ${image.id}`}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                )}
              </div>
            ))}
            {images.length < 20 && (
              <button
                type="button"
                onClick={addImageInput}
                className="text-custom-primary hover:underline"
              >
                + Add Image
              </button>
            )}
          </div>
        </div>
      </form>
      <div className="flex flex-row flex-wrap justify-end gap-5 pb-5">
        <PrimaryNoneFillButton link={"/"} text={"Reset"} />
        <button
          type="submit"
          className="border-0 rounded-full px-8 h-10 bg-custom-primary text-white transition-all duration-[600ms] ease-in-out font-semibold hover:bg-custom-gray hover:text-custom-secondary hover:border-2 hover:border-custom-secondary"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default BusinessDetailsForm;
