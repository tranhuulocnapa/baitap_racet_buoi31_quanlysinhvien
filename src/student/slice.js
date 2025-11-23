import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    student: [
        {
            masv: "01",
            hoten: "Nguyễn Văn A",
            phone: "0938111111",
            email: "nguyenvana@gmail.com",
        },
        {
            masv: "02",
            hoten: "Nguyễn Văn B",
            phone: "0938222232",
            email: "nguyenvanb@gmail.com",
        }
    ],
    editingMasv: null,
    filteredStudent: [],
};

const formstudent = createSlice({
    name: "student",
    initialState,
    reducers: {
        addstudent: (state, action) => {
            const student = action.payload;
            const exists = state.student.find(s => s.masv === student.masv);
            if (exists) {
                alert("Không nhập trùng mã sinh viên");
            } else {
                state.student.push(student);
            }
        },

        deleteStudent: (state, action) => {
            const masv = action.payload;
            state.student = state.student.filter(s => s.masv !== masv);
            if (state.editingMasv === masv) state.editingMasv = null;
        },

        editStudent: (state, action) => {
            const updated = action.payload;
            const index = state.student.findIndex(s => s.masv === updated.masv);
            if (index !== -1) {
                state.student[index] = { ...state.student[index], ...updated };
            }
            state.editingMasv = null;
        },

        setEditingMasv: (state, action) => {
            state.editingMasv = action.payload;
        },

        resetEditing: (state) => {
            state.editingMasv = null;
        },

        searchStudent: (state, action) => {
            const search = action.payload.toLowerCase();

            state.filteredStudent = state.student.filter(s =>
                s.masv.toLowerCase().includes(search) ||
                s.hoten.toLowerCase().includes(search)
            );
            console.log(state.filteredStudent)
        },

    },
});

export const { addstudent, deleteStudent, editStudent, setEditingMasv, resetEditing, searchStudent } = formstudent.actions;
export default formstudent.reducer;
