import { useFormik } from "formik";

export default function Formstudent() {
    return (

        <div className="bg-white shadow-lg rounded-xl p-6 mb-6 border">
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
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
            </form>
        </div>

    )
}
