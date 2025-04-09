export const InputMainDiv ="relative mt-2 w-full"
export const getSpanClassNames = (disabled) => {
    const baseClass = "absolute top-1/2 transform -translate-y-1/2 left-3 z-10";
    const stateClass = disabled ? "bg-[#E8E8E8] text-[#BDBDBD]" : "bg-transparent secondary-text-gray";
    return `${baseClass} ${stateClass}`;
  };

export const getInputClassNames1 = (span, error, disabled) => {
    const baseClass = `peer custom-input block w-full ${!disabled ?"bg-white" :""} appearance-none s3-text rounded-[8px] border px-3.5 py-3 text-sm focus:outline-none focus:ring-0`;
    const errorClass = error ? 'border-red-600' : 'border-[#DADCE0]';
    const focusClass = error ? 'border-red-600' : 'focus:border-green-500';
    const disabledClass = disabled ? "bg-white text-black border-dashed border-2" : "bg-transparent hover:border-[#2C2C2C]";
    const paddingClass = span ? "pl-12 pr-14" : "px-2.5 py-2 pt-4";
   
    return `${baseClass} ${errorClass} ${focusClass} ${disabledClass} ${paddingClass}`;
  };


  export const getInputClassNames = (span, error, disabled) => {
    const baseClass = `peer block custom-input w-full ${!disabled ?"bg-white" :""} appearance-none s3-text rounded-[8px] border px-3.5 py-3 text-sm focus:outline-none focus:ring-0`;
    const errorClass = error ? 'border-red-600' : 'border-[#DADCE0]';
    const focusClass = error ? 'border-red-600' : 'focus:border-green-500';
    const disabledClass = disabled ? "bg-[#E8E8E8] text-[#BDBDBD]" : "bg-transparent text-gray-700 hover:border-[#2C2C2C]";
    const paddingClass = span ? "pl-12 pr-14" : "px-2.5 py-2";
   
    return `${baseClass} ${errorClass} ${focusClass} ${disabledClass} ${paddingClass}`;
  };

  export const getLabelClassNames = (span, error, disabled) => {
    const baseClass = `absolute ${error?"primary-text-red" : "primary-text-green"} peer-placeholder-shown:text-gray-500 top-2 z-20 origin-[0] font-lato -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2`;
    const positionClass = span ? "left-12 " : "left-1";
    const colorClass = disabled ? "bg-[#E8E8E8] text-[#BDBDBD]" : error ? "primary-text-red" : "text-gray-700";
    const focusColorClass = error ? "" : "peer-focus:text-green-500";
   
    return `${baseClass} ${positionClass} ${colorClass} ${focusColorClass}`;
  };


  export const getAstrixClassNames = "secondary-text-gray";
  export const getErrorClassNames = "primary-text-red text-sm absolute right-0";
  export const SetPasswordStyleSVG="absolute top-4 hover:primary-text-green right-4 "

  export const selectContainer = "w-full relative inline-block";
  export const selectButton = "truncate secondary-text-gray w-full m-auto border-gray-200 hover:border-black bg-white border-[1px] font-medium rounded-lg text-sm pl-3 h-[48px] py-2.5 text-center inline-flex items-center";
  export const selectButtonError = "border-red-500 primary-text-red";
    export const DropdownStyleDefaultVal =""
    export const selectDropdown = "absolute left-center mt-2 m-auto w-full bg-white z-50 divide-y divide-gray-100 rounded-lg shadow ";
    export const DropdownDeleteBtnStyle = "py-2 text-sm primary-text-gray ";
    export const selectOption = "bloc font-lato font-medium px-4 rounded-lg hover:bg-gray-100 text-start py-2 w-full";
    
export const PageHeading = 'font-urbanist py-4 lg:pb-4 lg:pt-2  ml-4  font-semibold text-[2rem] lg:text-[3rem] text-blue-500'

  

export const CommonBgColor = "bg-white lg:bg-[#e9f0f8]"



  /* background-color: #F5F5F5 */
  /* background-color: #E3F2FD */
  /* background-color: #FAF3E0 */
  /* background-color: #E8F5E9 */
  // background-color: #e9f0f8


// Commen Classes
  export const t_s1Text = 's1-text'
  export const t_relative = 'relative'
  export const t_hidden = 'hidden';
  export const t_block = 'block'
  export const t_flex_itemCenter_justifuBetween = 'flex items-center justify-between'
  export const t_px6_py3 = 'px-6 py-3'
  export const t_py3 = 'py-3'

  export const t_px6_py4 = 'px-6 py-4'


//width
  export const t_w100 = 'w-[100%]'

// Hight
  export const t_h10rem = 'h-[10rem]'

// Padding
  export const t_p4 = 'p-4';
  export const t_py10 = 'py-10'

// Margin
  export const t_mt2 = 'mt-2'
  export const t_mt10 = 'mt-10'

// Colors
  export const t_bg_gray_400='bg-gray-400'

  // App Style
  export const App_MainDiv = 'relative flex'
  export const App_MainDiv_div_Sidebar ='w-[30%] lg:w-[25%] xl:w-[20%]  h-[100vh] absolute left-0'
  export const App_Maindiv_div_Container = 'w-[70%] lg:w-[75%] xl:w-[80%] pr-6 overflow-scroll h-[100vh]  absolute custom-scrollbar right-0 r'
  export const App_MainDiv_div_Navbar = 'w-1/3 z-50 px-4 h-[4rem] rounded-[10px] fixed top-4 right-6';
  export const App_MainDiv_div_Mobile_Navbar = 'w-full fixed top-0 left-0 right-0 z-50 px-4 mb-[4rem] h-[4rem] shadow-lg bg-white';
  export const App_MainDiv_div_Mobile_Navbar_Div ='mt-[4rem] px-4 py-4'
  
  // Add Patient Style (AddPatient.jsx)
  export const AddPatient_MainDiv = 'rounded-lg bg-white';
  export const AddPatient_MainDiv_Div ='grid grid-cols-1 lg:grid lg:grid-cols-2';
  export const AddPatient_MainDiv_Div_QRDiv ='my-6 pb-6 flex flex-col items-center gap-4 border-[2px] border-dotted rounded-lg'
  export const AddPatient_MainDiv_Div_QRDiv_msg ='text-blue-600 text-[20px] mb-14 font-semibold font-urbanist';
  export const AddPatient_MainDiv_Div_QRDiv_Button = 'text-white w-1/2 bg-gradient-to-br flex items-center justify-center bg-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm gap-2 px-5 py-2.5'
  export const AddPatient_PersonalInfoDiv_Ptag = 'font-urbanist font-bold text-xl' ;
  export const AddPatient_PersonalInfoDiv ='grid grid-cols-1 gap-4 mt-4 lg:grid lg:grid-cols-2'
  export const AddPatient_PersonalInfoDiv_div ='w-full m-auto';
  export const AddPatient_PersonalInfoDiv_div_SubmitBtn = 'text-white w-full my-6 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5';
  export const AddPatient_PersonalInfoDiv_div_SubmitBtnNotDisable = 'bg-gradient-to-br from-purple-600 to-blue-500'

  // MCP Card Images Style (McpCardImage.jsx)
  export const McpCardImageStyle_Style = 'font-sans m-0 p-0 text-center [&>img]:block [&>img]:mx-auto [&>img]:max-w-full [&>img]:h-auto [&>img]:break-before-page';
  export const McpCardImageStyle_MainDiv ='bg-white rounded-lg mb-4 ml-4'
  export const McpCardImageStyle_MainDiv_PTag = 's1-text pl-4'
  export const McpCardImageStyle_MainDiv_PTag1 = "pt-2 font-urbanist font-semibold";
  export const McpCardImageStyle_MainDiv1 = 'grid grid-cols-1 lg:grid lg:grid-cols-3 mb-6 px-4 py-4 gap-2';
  export const McpCardImageStyle_MainDiv1_img ='h-auto max-w-full rounded-lg cursor-pointer'
  export const McpCardImageStyle_MainDiv1_imgSelect_Div = 'fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-75 z-50'
  export const McpCardImageStyle_MainDiv1_imgSelect_Div1 = 'relative bg-white p-4 rounded-lg shadow-lg'
  export const McpCardImageStyle_MainDiv1_imgSelect_Div1_button = 'absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center'
  export const McpCardImageStyle_MainDiv1_imgSelect_Div1_img ='max-w-full max-h-[80vh] rounded-lg'
  export const McpCardImageStyle_DownLoadBtn_Div = 'grid grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-4  text-center px-4'

  // Patient Dashboard Style (PatientDashboard.jsx)
  export const PatientDashboardStyle_MainDiv = 'lg:grid lg:grid-cols-2 grid grid-cols-1 bg-white rounded-lg my-4'
  export const PatientDashboardStyle_AllPatient_div = 'bg-white rounded-lg'
  export const PatientDashboardStyle_AllPatient_div1 = 'relative overflow-x-auto font-urbanist shadow-md sm:rounded-lg'
  export const PatientDashboardStyle_AllPatient_div1Error = 'text-center py-4 text-red-500'
  export const PatientDashboardStyle_Table = 'w-full text-sm text-left text-gray-500'
  export const PatientDashboardStyle_tHead = 'text-xs text-gray-700 bg-gray-50'
  export const PatientDashboardStyle_tbody_tr = 'bg-white border-b hover:bg-gray-50'
  export const PatientDashboardStyle_tbody_th = 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
  export const PatientDashboardStyle_table_view = 'px-6 py-4 hover:cursor-pointer font-bold'


  export const HoverAnimation = "animate-bounce transition-transform duration-700 ease-in-out hover:scale-150"