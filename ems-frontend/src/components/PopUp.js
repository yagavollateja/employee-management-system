import Swal from "sweetalert2";
export const successAlert = (msg) => Swal.fire({
    title: "Success",
    text: msg,
    icon: "success"
});

export const errorAlert = (msg) => Swal.fire({
    title: "Error",
    text: msg,
    icon: "error"
});

export const saveData = ()=>Swal.fire({
    title: "Saving...",
    allowOutsideClick: false,
    didOpen: () => {
        Swal.showLoading();
    }
    
});


