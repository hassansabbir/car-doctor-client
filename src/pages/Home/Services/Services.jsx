import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState("true");

  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://new-car-doctor-bice.vercel.app/services?search=${search}&sort=${asc}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc, search]);

  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  };

  return (
    <div>
      <div className="text-center">
        <h5 className="text-2xl font-bold text-orange-600">Our services</h5>
        <h2 className="text-5xl">Our service Area</h2>
        <p className="text-xl w-2/3 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
        <button onClick={() => setAsc(!asc)} className="btn">
          {asc ? "DSC" : "ASC"}
        </button>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              ref={searchRef}
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="grid gap-10 my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center my-10">
        <button className="btn btn-outline btn-error">More Services</button>
      </div>
    </div>
  );
};

export default Services;
