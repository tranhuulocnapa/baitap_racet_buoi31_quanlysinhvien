import React from 'react'

export default function Liststudtent() {
    return (

        <div className="bg-white shadow-lg rounded-xl overflow-hidden border">
            <div className="p-4 border-b flex items-center justify-between">
                <h3 className="font-semibold">Danh sách sinh viên</h3>
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

    )
}
