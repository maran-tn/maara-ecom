import React from "react";

const Certificates = () => {
  return (
    <section className="qualification section mn-bg-grey" id="qualification">
      <h2 className="section__title">Certificates</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="flex justify-center w-full max-md:flex-1 relative">
        <div className="w-[400px] max-md:flex overflow-visible">
          <img src="/assets/js-certificate.jpg" className="w-[full]" alt="" />
        </div>
        <div className="w-[400px]">
          <img src="/assets/js-certificate.jpg" className="w-[full]" alt="" />
        </div>
        <div className="w-[400px]">
          <img src="/assets/js-certificate.jpg" className="w-[full]" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
