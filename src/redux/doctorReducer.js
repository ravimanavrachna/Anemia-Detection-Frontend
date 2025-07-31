const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    doctorID:""
}
const slice = createSlice({
    name: "doctorSlice",
    initialState,
    reducers: {
        saveDoctorID: (state, action) => {
            let doctorID = action.payload;
            state.doctorID = doctorID;
        },
       
    }
})
export default slice.reducer;
export const { saveDoctorID} = slice.actions;