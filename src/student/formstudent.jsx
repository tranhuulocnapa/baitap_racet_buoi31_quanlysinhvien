import { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addstudent, editStudent, resetEditing } from "./slice";

export default function Formstudent() {
    const dispatch = useDispatch();
    const { student, editingMasv } = useSelector(state => state.formstudent);

    const formRegister = useFormik({
        initialValues: {
            masv: "",
            hoten: "",
            phone: "",
            email: "",
        },
        enableReinitialize: true,
        validationSchema: yup.object({
            masv: yup.string().required("Vui lòng nhập mã sinh viên."),
            hoten: yup.string().matches(/^[A-Za-zÀ-ỹ\s]+$/, "Họ tên không hợp lệ").required("Vui lòng nhập họ tên"),
            phone: yup.string().matches(/^(0[3|5|7|8|9])[0-9]{8}$/, "Số điện thoại không hợp lệ").required("Vui lòng nhập số điện thoại"),
            email: yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
        }),
        onSubmit: (values) => {
            if (editingMasv) {
                dispatch(editStudent(values));
            } else {
                dispatch(addstudent(values));
            }
            formRegister.resetForm();
        },
    });

    useEffect(() => {
        if (editingMasv) {
            const s = student.find(s => s.masv === editingMasv);
            if (s) formRegister.setValues(s);
        } else {
            formRegister.resetForm();
        }
    }, [editingMasv]);

    return (
        <div className="bg-white shadow-lg rounded-xl p-6 mb-6 border">
            <form onSubmit={formRegister.handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                {/* Mã SV */}
                <div className="md:col-span-1 min-h-[90px]">
                    <label className="block text-sm font-medium text-gray-700">Mã SV</label>
                    <input
                        name="masv"
                        value={formRegister.values.masv}
                        onChange={formRegister.handleChange}
                        className="mt-1 block w-full rounded-md border px-3 py-2"
                        placeholder="VD: 01"
                        disabled={editingMasv ? true : false} // khi sửa không đổi masv
                    />
                    <p className="text-sm text-rose-600 h-5 mt-1">{formRegister.touched.masv && formRegister.errors.masv}</p>
                </div>

                {/* Họ tên */}
                <div className="md:col-span-1 min-h-[90px]">
                    <label className="block text-sm font-medium text-gray-700">Họ tên</label>
                    <input
                        name="hoten"
                        value={formRegister.values.hoten}
                        onChange={formRegister.handleChange}
                        className="mt-1 block w-full rounded-md border px-3 py-2"
                        placeholder="VD: Nguyễn Văn A"
                    />
                    <p className="text-sm text-rose-600 h-5 mt-1">{formRegister.touched.hoten && formRegister.errors.hoten}</p>
                </div>

                {/* Phone */}
                <div className="md:col-span-1 min-h-[90px]">
                    <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                    <input
                        name="phone"
                        value={formRegister.values.phone}
                        onChange={formRegister.handleChange}
                        className="mt-1 block w-full rounded-md border px-3 py-2"
                        placeholder="0938xxxxxxx"
                    />
                    <p className="text-sm text-rose-600 h-5 mt-1">{formRegister.touched.phone && formRegister.errors.phone}</p>
                </div>

                {/* Email */}
                <div className="md:col-span-1 min-h-[90px]">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        name="email"
                        value={formRegister.values.email}
                        onChange={formRegister.handleChange}
                        className="mt-1 block w-full rounded-md border px-3 py-2"
                        placeholder="name@example.com"
                    />
                    <p className="text-sm text-rose-600 h-5 mt-1">{formRegister.touched.email && formRegister.errors.email}</p>
                </div>

                {/* Buttons */}
                <div className="md:col-span-4 flex gap-2 mt-2">
                    <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
                        {editingMasv ? "Cập nhật" : "Lưu"}
                    </button>
                    <button type="button" onClick={() => dispatch(resetEditing())} className="bg-gray-200 px-4 py-2 rounded">
                        Reset
                    </button>
                </div>
            </form>
        </div>
    )
}
