import React from "react";

export default function StudentUI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-5xl">
        {/* header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src="/mnt/data/fc695949-4b71-4ad3-b1c0-35c17a091695.png"
            alt="logo"
            className="w-20 h-20 object-cover rounded-lg shadow-md border"
          />
          <div>
            <h1 className="text-2xl font-extrabold text-gray-800">Quản lý sinh viên</h1>
            <p className="text-sm text-gray-600">Giao diện đẹp — chưa có logic, chỉ UI thuần.</p>
          </div>
        </div>

        {/* form card */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-6 border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Mã SV</label>
              <input
                className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="VD: 01"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Họ tên</label>
              <input
                className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="VD: Nguyễn Văn A"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
              <input
                className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="0938xxxxxxx"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder="name@example.com"
              />
            </div>

            <div className="md:col-span-4 flex gap-2 mt-2">
              <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow">
                Lưu
              </button>

              <button className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded">
                Reset
              </button>

              <div className="ml-auto">
                <input
                  placeholder="Tìm kiếm theo tên, mã, phone, email..."
                  className="rounded-md border px-3 py-2 shadow-sm w-72"
                />
              </div>
            </div>
          </div>
        </div>

        {/* table card */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border">
          <div className="p-4 border-b flex items-center justify-between">
            <h3 className="font-semibold">Danh sách sinh viên</h3>
            <div className="text-sm text-gray-600">Bạn có thể sửa hoặc xoá từng dòng</div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead className="bg-gray-50 text-sm text-gray-600">
                <tr>
                  <th className="p-3 text-left">Mã SV</th>
                  <th className="p-3 text-left">Họ tên</th>
                  <th className="p-3 text-left">Số điện thoại</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-center">Hành động</th>
                </tr>
              </thead>

              <tbody>
                {/* Dummy table rows (UI only) */}
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3">01</td>
                  <td className="p-3">Nguyễn Văn A</td>
                  <td className="p-3">0938111111</td>
                  <td className="p-3">nguyenvana@gmail.com</td>
                  <td className="p-3 text-center">
                    <div className="inline-flex gap-2">
                      <button className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded text-sm">
                        Sửa
                      </button>
                      <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm">
                        Xoá
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3">02</td>
                  <td className="p-3">Nguyễn Văn B</td>
                  <td className="p-3">0938222232</td>
                  <td className="p-3">nguyenvanb@gmail.com</td>
                  <td className="p-3 text-center">
                    <div className="inline-flex gap-2">
                      <button className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded text-sm">
                        Sửa
                      </button>
                      <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm">
                        Xoá
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}