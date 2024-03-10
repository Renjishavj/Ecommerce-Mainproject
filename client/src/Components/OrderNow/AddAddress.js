import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Order.css";
import axios from "axios";
import { useLogin } from "../../Context/LoginContext";
import { useEffect } from "react";
import Footer from "../HomePage/Footer";

function AddAddress() {
  const { state } = useLocation();
  console.log(state.product);
  const [addresses, setAddresses] = useState([]);

  //required ???
  const [contactName, setContactName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [streetHouseNo, setStreetHouseNo] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();
  const isValidMobileNumber = (number) => /^\d{10}$/.test(number);
  const isValidZipCode = (code) => /^\d{6}$/.test(code);
  const { user } = useLogin();
  const [showForm, setShowForm] = useState(false);

  //but y ?
  const [address, setAddress] = useState({
    contactName: "",
    mobile: "",
    street: "",
    city: "",
    zipCode: "",
  });

  useEffect(() => {
    const email = user.email;
    console.log(email);
    fetchAddresses(email);
  }, []);

  const fetchAddresses = async (email) => {
    try {
      const response = await axios.get(
        `http://localhost:3300/route/fetchaddress/${email}`
      );
      const fetchedAddresses = response.data.addresses;
      setAddresses(fetchedAddresses);
      console.log(addresses);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };
  const handleSaveNext = () => {
    if (!contactName.trim()) {
      alert("Please enter a valid contact name.");
      return;
    }

    if (!isValidMobileNumber(mobileNumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!streetHouseNo.trim() || !city.trim()) {
      alert("Please enter both street/house number and city.");
      return;
    }

    if (!isValidZipCode(zipCode)) {
      alert("Please enter a valid 6-digit ZIP code.");
      return;
    }

    const email = user.email;
    console.log(email);
    axios
      .post(`http://localhost:3300/route/addaddress`, {
        email,
        contactName,
        mobile: mobileNumber,
        street: streetHouseNo,
        city,
        zipCode,
      })
      .then((response) => {
        console.log("Address details saved:", response.data);
        alert("address saved");
        console.log(state.product);
        navigate("/orderpage/confirm", { state: { product: state.product } });
      })
      .catch((error) => {
        console.error("Error adding address:", error);
        alert("error in address saving");
      });
  };
  const handleNext = () => {
    navigate("/orderpage/confirm", { state: { product: state.product } });
  };
  const handleAddAnother = () => {
    setShowForm(true);
  };

  return (
    <>
      {addresses.length > 0 && !showForm ? (
        <ul>
          <div className="entered-address">
            <h3>Your Address</h3>
            {addresses.map((address, index) => (
              <li>
                <div key={index}>
                  <div>
                    <p>{address.contactName}</p>
                  </div>
                  <div className="add-mapone">
                    <p>{address.street}</p>
                    <p>,{address.city}</p>
                    <p>,{address.zipCode}(PIN)</p>
                  </div>
                  <div className="add-mapone">
                    <p>{address.mobile}</p>
                  </div>
                </div>
              </li>
            ))}
            <div className="edit-next">
              <div>
                <button className="edt-address" onClick={handleAddAnother}>
                  Add Another
                </button>
              </div>
              <div>
                <button className="next-address" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </ul>
      ) : (
        <div className="addaddress-form">
          <div>
            <input
              type="text"
              placeholder="Enter contact name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="inp-feilds"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="inp-feilds"
            />
          </div>

          <div>
            {" "}
            <input
              type="text"
              placeholder="Enter street/house number"
              value={streetHouseNo}
              onChange={(e) => setStreetHouseNo(e.target.value)}
              className="inp-feilds"
            />
          </div>

          <div>
            {" "}
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              className="inp-feilds"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div>
            {" "}
            <input
              type="text"
              placeholder="Enter ZIP code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="inp-feilds"
            />
          </div>

          <div>
            <button onClick={handleSaveNext} className="save-btn">
              Save&Next
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default AddAddress;
