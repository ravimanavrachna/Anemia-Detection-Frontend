const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    username: "",
    donorDetails: {},
    left_palm: "",
    right_palm: "",
    left_eye: "",
    right_eye: "",
    nail_image: ""
}
const slice = createSlice({
    name: "donorSlice",
    initialState,
    reducers: {
        saveDonorDetails: (state, action) => {
            let donorDetails = action.payload;
            state.donorDetails = donorDetails;
        },
        saveDonorPalmImg: (state, action) => {
            let { left_palm, right_palm } = action.payload;
            state.left_palm = left_palm
            state.right_palm = right_palm
        },
        saveDonorEyeImg: (state, action) => {
            let { left_eye, right_eye } = action.payload;
            state.left_eye = left_eye
            state.right_eye = right_eye
        },
        saveDonorNailImg: (state, action) => {
            let { nail_image } = action.payload;
            state.nail_image = nail_image;
        },
        resetDonorData:(state, action)=>{
            state=initialState;
        }
    }
})
export default slice.reducer;
export const { saveDonorDetails, saveDonorPalmImg, saveDonorEyeImg, saveDonorNailImg ,resetDonorData} = slice.actions;