import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[800px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex text-white">
          <div className="lg:ml-24 ml-12 mt-80 lg:mt-96">
            <h1 className="text-5xl font-bold lg:w-5/12">
              Affordable Price For Car Servicing
            </h1>
            <h5 className="text-2xl lg:w-2/4 my-8">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </h5>
            <div>
              <button className="btn bg-red-600">Discover More</button>
              <button className="btn btn-outline text-white btn-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 right-5 gap-2 bottom-0">
          <a
            href="#slide6"
            className="btn btn-circle hover:bg-red-600 border-none"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-red-600 border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex text-white">
          <div className="ml-24 mt-96">
            <h1 className="text-5xl font-bold w-5/12">
              Affordable Price For Car Servicing
            </h1>
            <h5 className="text-2xl w-2/4 my-8">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </h5>
            <div>
              <button className="btn bg-red-600">Discover More</button>
              <button className="btn btn-outline text-white btn-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2  right-5 gap-2 bottom-0">
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-red-600 border-none"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-red-600 border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex text-white">
          <div className="ml-24 mt-96">
            <h1 className="text-5xl font-bold w-5/12">
              Affordable Price For Car Servicing
            </h1>
            <h5 className="text-2xl w-2/4 my-8">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </h5>
            <div>
              <button className="btn bg-red-600">Discover More</button>
              <button className="btn btn-outline text-white btn-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 right-5 gap-2 bottom-0">
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-red-600 border-none"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-red-600 border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex text-white">
          <div className="ml-24 mt-96">
            <h1 className="text-5xl font-bold w-5/12">
              Affordable Price For Car Servicing
            </h1>
            <h5 className="text-2xl w-2/4 my-8">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </h5>
            <div>
              <button className="btn bg-red-600">Discover More</button>
              <button className="btn btn-outline text-white btn-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2  gap-2 bottom-0 right-5">
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-red-600 border-none"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle hover:bg-red-600 border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl" />
        <div className="absolute h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex text-white">
          <div className="ml-24 mt-96">
            <h1 className="text-5xl font-bold w-5/12">
              Affordable Price For Car Servicing
            </h1>
            <h5 className="text-2xl w-2/4 my-8">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </h5>
            <div>
              <button className="btn bg-red-600">Discover More</button>
              <button className="btn btn-outline text-white btn-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2  right-5  gap-2 bottom-0">
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-red-600 border-none"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle hover:bg-red-600 border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl" />
        <div className="absolute h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex text-white">
          <div className="ml-24 mt-96">
            <h1 className="text-5xl font-bold w-5/12">
              Affordable Price For Car Servicing
            </h1>
            <h5 className="text-2xl w-2/4 my-8">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </h5>
            <div>
              <button className="btn bg-red-600">Discover More</button>
              <button className="btn btn-outline text-white btn-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 right-5  gap-2 bottom-0">
          <a
            href="#slide5"
            className="btn btn-circle hover:bg-red-600 border-none"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-red-600 border-none"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
