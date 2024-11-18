import React from "react";
import SwiperJS from "../../SwiperJS";

const Sider = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-screen-2xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          ইভেন্টসমূহ
        </h1>
        <SwiperJS />
      </div>
    </div>
  );
};

export default Sider;
