import { useContext, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "./../providers/AuthProvider";
import { useNavigate, useParams } from "react-router";
import { format } from "date-fns";
import { compareAsc } from "date-fns";
import { toast } from "react-hot-toast";
import axios from "axios";
import Swal from "sweetalert2";

const JobDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [jobs, setJobs] = useState([]);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const {
    jobTitle,
    validity,
    category,
    minPrice,
    maxPrice,
    description,
    bit_count,
    buyer,
    _id
  } = jobs;

  const fetchAllJobs = async() => {
    fetch("http://localhost:9000/jobs")
      .then((res) => res.json())
      .then((data) => {
        const matchJobs = data.find((job) => job._id === id);
        setJobs(matchJobs);
      });
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const handelFormSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const comment = form.comment.value;
    const email = user?.email;
    const newDateline = startDate.toLocaleDateString("en-us");
    const jobId = _id;

    if (user?.email === buyer?.email) {
      return toast.error("You can't bid on your own job.");
    }
    

    // to valid dateline
    if (compareAsc(new Date(), new Date(validity)) === 1) {
      return toast.error("Invalid deadline. Please select a future date.");
    }
    // Validate Price
    // if (isNaN(price) || price < minPrice || price > maxPrice) {
    //   return toast.error(`Price must be between ${minPrice} and ${maxPrice}.`);
    // }

    const formData = { email, price, comment, newDateline,jobId, jobTitle, category, status: 'pending', buyer: buyer?.email };
    console.log(formData);

    try {
      const { data } = await axios.post('http://localhost:9000/add-bids', formData);
      if (data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset();
        navigate('/my-bids');
      }
    } catch (error) {
      console.error("Error submitting the bid:", error);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: `Failed ${error}. Please try again.`,
        showConfirmButton: true
      });
    }
    
  };

  return (
    <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      {/* Job Details */}
      <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-800 ">
            {/* Deadline: {format(new Date(validity), 'P')} */}
            {validity}
          </span>
          <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
            {jobTitle}
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
            {category}
          </h1>

          <p className="mt-2 text-lg text-gray-600 ">
            Dramatically redefine bleeding-edge infrastructures after
            client-focused value. Intrinsicly seize user-centric partnerships
            through out-of-the-box architectures. Distinctively.
          </p>
          <p className="mt-6 text-sm font-bold text-gray-600 ">
            Buyer Details:
          </p>
          <div className="flex items-center gap-5">
            <div>
              <p className="mt-2 text-sm  text-gray-600 ">
                Name: {buyer?.name}
              </p>
              <p className="mt-2 text-sm  text-gray-600 ">
                Email: {buyer?.email}
              </p>
            </div>
            <div className="rounded-full object-cover overflow-hidden w-14 h-14">
              <img
                referrerPolicy="no-reference"
                src={buyer?.photo}
                alt=""
              />
            </div>
          </div>
          <p className="mt-6 text-lg font-bold text-gray-600 ">
            Range: ${minPrice} - ${maxPrice}
          </p>
        </div>
      </div>
      {/* Place A Bid Form */}
      <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Place A Bid
        </h2>

        <form onSubmit={handelFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="price">
                Price
              </label>
              <input
                id="price"
                type="text"
                name="price"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                defaultValue={user?.email}
                id="emailAddress"
                type="email"
                name="email"
                readOnly
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="comment">
                Comment
              </label>
              <input
                id="comment"
                name="comment"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Place Bid
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default JobDetails;