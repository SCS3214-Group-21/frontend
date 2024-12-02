import React, { useState, useEffect } from "react";
import InputField2 from "../ui/InputField2";
import PrimaryNoneFillButton from "../ui/PrimaryNoneFillButton";
import {
  fetchVendorById,
  updateVendor,
} from "../../services/vendorprofileServices";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import Swal from "sweetalert2";

function BusinessDetailsForm() {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]); // State to manage image files
  const [profilePhoto, setProfilePhoto] = useState("");
  const navigate = useNavigate();

  const sriLankanDistricts = [
    "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", "Nuwara Eliya", "Galle", "Matara", 
    "Hambantota", "Jaffna", "Kilinochchi", "Mannar", "Vavuniya", "Mullaitivu", "Batticaloa", 
    "Ampara", "Polonnaruwa", "Anuradhapura", "Kurunegala", "Puttalam", "Kegalle", "Ratnapura", 
    "Badulla", "Monaragala", "Trincomalee", "Kurunegala", "Mannar", "Kegalle"
];

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

  // File input handler
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setProfilePhoto(URL.createObjectURL(file)); // Update the preview state
      setFormData({ ...formData, pic: file }); // Save the file to formData
    }
  };
  
  const handleImageChange = (id, file) => {
    setImages(
      images.map(
        (image) => (image.id === id ? { ...image, file, url: null } : image) // Clear `url` when a new file is added
      )
    );
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
    payment_key: "",
    images: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const response =await fetchVendorById();
        const { vendorDetails } = response;
        const { paymentDetails } = response;

        if (!vendorDetails && !paymentDetails) {
          // If no vendor data is found, set formData with default values
          setFormData({
            pic: "",
            first_name: "",
            last_name: "",
            business_name: "",
            contact_number: "",
            email: "",
            address: "",
            city: "",
            branch: [],
            description: "",
            payment_key: "",
            images: [],
          });
          setItems([]); // No branches
          setImages([]); // No images
          return; // Stop further processing if there's no vendor data
        }

        // Parse branch details
        let parsedBranches = [];

        // Ensure the branch data exists and is a string that can be parsed
        if (vendorDetails.branch) {
          try {
            parsedBranches = JSON.parse(vendorDetails.branch); // Parse the branch JSON string
          } catch (e) {
            console.error("Error parsing branch data:", e.message);
            // Optionally handle the error with a UI alert (e.g. Swal.fire)
          }
        }

        console.log(parsedBranches);

        // Set branches based on parsed data
        if (parsedBranches.length > 0) {
          // Mapping the parsed branches into an array of objects with `id` and `value`
          const branchItems = parsedBranches.map((branch, index) => {
            // Flattening each branch object and extracting the first key-value pair
            const branchKey = Object.keys(branch)[0]; // e.g., "Branch 1"
            const branchValue = branch[branchKey]; // e.g., "Main Branch"
            return {
              id: index + 1, // Assigning a unique ID for each branch
              name: branchKey, // Using the branch key as the name
              value: branchValue, // The value is the branch detail (e.g., "Main Branch")
            };
          });

          console.log(branchItems);

          // Update the items state with the formatted branch data
          setItems(branchItems);
        }

        let parsedImages = [];
        if (vendorDetails.images) {
          try {
            parsedImages = JSON.parse(vendorDetails.images);
          } catch (e) {
            console.error("Error parsing images:", e.message);
            // Swal.fire({
            //   icon: "error",
            //   title: "Parsing Error",
            //   text: "Failed to parse image data.",
            //   confirmButtonText: "OK",
            //   background: "#FFF8F5",
            //   color: "#000000",
            //   confirmButtonColor: "#A57E17",
            // });
          }
        }

        if (parsedImages.length > 0) {
          const imageItems = parsedImages.map((imageUrl, index) => ({
            id: index + 1,
            file: null, // Default to null if fetched from the server
            url: `${api.defaults.baseURL}/uploads/vendor/images/${imageUrl}`, // Provide a URL for fetched images
            name: `${imageUrl}`,
          }));
          setImages(imageItems);
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
          payment_key: paymentDetails.payment_key || "",
          images: vendorDetails.images || [],
        });

        // Dynamically set profile photo after fetching data
        setProfilePhoto(
          `${api.defaults.baseURL}/uploads/vendor/pic/${vendorDetails.pic}`
        );

        console.log("Fetch Data:", vendorDetails, paymentDetails);
        // Swal.fire({
        //   icon: "success",
        //   title: "Success!",
        //   text: "Vendor data fetched successfully.",
        //   confirmButtonText: "OK",
        //   background: "#FFF8F5",
        //   color: "#000000",
        //   confirmButtonColor: "#A57E17",
        // });
      } catch (error) {
        setError(error.message);
        // Swal.fire({
        //   icon: "error",
        //   title: "Fetch Failed",
        //   text: `Failed to fetch vendor data: ${error.message}`,
        //   confirmButtonText: "OK",
        //   background: "#FFF8F5",
        //   color: "#000000",
        //   confirmButtonColor: "#A57E17",
        // });
      } finally {
        setLoading(false);
      }
    };
    fetchVendor();
  }, []);

  useEffect(() => {
    return () => {
      images.forEach((image) => {
        if (image.file) URL.revokeObjectURL(image.file);
      });
    };
  }, [images]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setError(""); // Clear any previous errors

    try {
      // Prepare the branches data
      const branchesData = items.map((item) => ({ [item.name]: item.value }));

      // Prepare the images data
      const uploadedImages = images.map(
        (image) => (image.file ? image.file : image.url) // Use file if newly uploaded, otherwise keep the URL
      );

      // Call the updateVendor function
      const response = await updateVendor(
        formData.first_name,
        formData.last_name,
        formData.business_name,
        formData.contact_number,
        formData.email,
        formData.address,
        formData.city,
        JSON.stringify(branchesData), // Ensure the branches data is sent as a string
        formData.description,
        formData.payment_key,
        formData.pic, // Profile picture file
        uploadedImages // Other image files
      );
      

      // Handle success response
      // alert(response.message || "Profile updated successfully!");
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Profile updated successfully!",
        confirmButtonText: "OK",
        background: "#FFF8F5",
        color: "#000000",
        confirmButtonColor: "#A57E17",
      });

      navigate("/vendor/profile");
    } catch (err) {
      // Error handling
      console.error("Error updating profile:", err.message);
      setError(err.message || "An error occurred while updating the profile.");
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: `Failed to update profile: ${error.message}`,
        confirmButtonText: "OK",
        background: "#FFF8F5",
        color: "#000000",
        confirmButtonColor: "#A57E17",
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <form>
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
              {/* <InputField2
                id="city"
                name="City "
                placeholder="City "
                type="text"
                value={formData.city}
                onChange={handleChange}
              /> */}
              <style jsx>{`
                .coolinput {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    position: relative;
                }

                .coolinput label.text {
                    font-size: 1rem;
                    color: #000000;
                    font-weight: 500;
                    position: relative;
                    top: 0.5rem;
                    margin: 0 0 0 7px;
                    padding: 0 3px;
                    background: #FFF8F5;
                    width: fit-content;
                    z-index: 10;
                }

                .coolinput .input-wrapper {
                    position: relative;
                    width: 100%;
                }

                .coolinput .input {
                    width: 100%;
                    padding: 11px 10px;
                    font-size: 1rem;
                    border: 1px #000000 solid;
                    border-radius: 5px;
                    background: #FFF8F5;
                    color: #000000;
                    height: 100%;
                }

                .coolinput .input:focus {
                    outline: none;
                }

                .coolinput .input::placeholder {
                    color: #888888;
                }

                .coolinput select {
                    width: 100%;
                    padding: 11px 10px;
                    font-size: 1rem;
                    border: 1px #000000 solid;
                    border-radius: 5px;
                    background: #FFF8F5;
                    color: #000000;
                    height: 100%;
                }

                .coolinput select:focus {
                    outline: none;
                }

                .coolinput select option {
                    background-color: #FFF8F5;
                    color: #000000;
                }

                .coolinput select option:hover {
                    background-color: #006972; /* custom-secondary */
                    color: #FFFFFF;
                }

                .coolinput select option:selected {
                    background-color: #A57E17;
                    color: #FFFFFF;
                }
            `}</style>

              <div className="coolinput">
                  <label htmlFor="city" className="text">Select District</label>
                  <div className="input-wrapper">
                      <select
                          id="city"
                          className="input"
                          value={formData.city}
                          onChange={handleChange}
                      >
                          <option value="">Select District</option>
                          {sriLankanDistricts.map((district) => (
                              <option key={district} value={district}>
                                  {district}
                              </option>
                          ))}
                      </select>
                  </div>
              </div>

            </div>
            <div className="md:w-[45%] w-full">
              <InputField2
                id="payment_key"
                name="Payment Key "
                placeholder="Payment Key "
                type="text"
                value={formData.payment_key}
                onChange={handleChange}
              />
            </div>
            {/* <div className="md:w-[45%] w-full">
              <InputField2
                id={1}
                name={"Main Branch"}
                placeholder={"Input"}
                type={"text"}
                value={formData.first_name}
                onChange={handleChange}
              />
            </div> */}
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
            {images.map((image) => (
              <div key={image.id} className="flex items-center gap-5 mb-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleImageChange(image.id, e.target.files[0])
                  }
                  className="block w-full border rounded-lg p-2"
                />
                {image.file ? (
                  <img
                    src={URL.createObjectURL(image.file)}
                    alt={`Preview ${image.id}`}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                ) : image.url ? (
                  <img
                    src={image.url}
                    alt={`Preview ${image.id}`}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                ) : null}
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
        <PrimaryNoneFillButton onClick={() => window.location.reload()} text={"Reset"} />
        <button
          type="button"
          onClick={handleSubmit}
          className="border-0 rounded-full px-8 h-10 bg-custom-primary text-white"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default BusinessDetailsForm;
