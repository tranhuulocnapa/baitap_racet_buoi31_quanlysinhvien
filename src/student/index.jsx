import React from "react";
import Formstudent from "./formstudent";
import Liststudtent from "./liststudtent";

export default function Student() {
  return (
    <div className="min-h-screen bg-linear-to-br from-white to-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-5xl">
        {/* header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src="public/img/logo-hoi-sinh-vien.jpg"
            alt="logo"
            className="w-20 h-20 object-cover rounded-lg shadow-md border"
          />
          <div>
            <h1 className="text-2xl font-extrabold text-gray-800">Quản lý sinh viên</h1>
          </div>
        </div>

        <Formstudent />

        <Liststudtent />
      </div>
    </div>
  );
}