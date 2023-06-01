import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="w-full lg:flex my-24">
      <div className="lg:w-1/2 relative">
        <img className="w-[500px] h-[400px] rounded-xl" src={person} alt="" />
        <img
          className="w-[350px]  h-[300px] border-8 border-white rounded-xl absolute right-10 top-2/4"
          src={parts}
          alt=""
        />
      </div>
      <div className="lg:w-1/2 mt-28 lg:mt-0">
        <h5 className="text-lg text-red-600 mb-2 font-bold">About Us</h5>
        <h2 className="text-6xl font-bold w-3/4 mb-5">
          We are Qualified & of experience in this field
        </h2>
        <p className="text-xl w-5/6 my-5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.{" "}
        </p>
        <p className="text-xl w-5/6 my-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.{" "}
        </p>
        <button className="btn border-none bg-red-600">Get More Info</button>
      </div>
    </div>
  );
};

export default AboutUs;
