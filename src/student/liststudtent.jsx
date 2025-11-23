import { useSelector, useDispatch } from "react-redux";
import { deleteStudent, setEditingMasv } from "./slice";

export default function Liststudtent() {
    const dispatch = useDispatch();
    const { student } = useSelector(state => state.formstudent);

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
                        {student.map(s => (
                            <tr key={s.masv} className="border-b hover:bg-gray-50">
                                <td className="p-3">{s.masv}</td>
                                <td className="p-3">{s.hoten}</td>
                                <td className="p-3">{s.phone}</td>
                                <td className="p-3">{s.email}</td>
                                <td className="p-3 text-center">
                                    <div className="inline-flex gap-2">
                                        <button onClick={() => dispatch(setEditingMasv(s.masv))} className="px-3 py-1 bg-yellow-400 text-white rounded">
                                            Sửa
                                        </button>
                                        <button onClick={() => dispatch(deleteStudent(s.masv))} className="px-3 py-1 bg-red-500 text-white rounded">
                                            Xoá
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
