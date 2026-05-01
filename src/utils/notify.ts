import Swal from "sweetalert2";

export const notifySuccess = (message: string) => {
    Swal.mixin({
        toast: true,
        position: "top-end",
        background: "oklch(52.7% 0.154 150.069)",
        color: "#FFFFFF",
        iconColor: "#FFF",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
        },
    }).fire({
        icon: "success",
        title: message,
    });
};

export const notifyError = (message: string) => {
    Swal.mixin({
        toast: true,
        position: "top-end",
        background: "oklch(44.4% 0.177 26.899)",
        color: "#FFFFFF",
        iconColor: "#FFF",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
        },
    }).fire({
        icon: "success",
        title: message,
    });
};
