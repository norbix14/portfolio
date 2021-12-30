/**
 * Ventana modal.
 *
 * @param {object} data - datos para el modal.
 * @param {string} data.title - titulo del modal.
 * @param {array} data.stack - datos para mostrar en el modal.
 *
 * @example
 * SwalModal({ title: 'Stack utilizado', stack: ['html', 'css'] })
 *
 */
export const SwalModal = (data = { title: 'Stack', stack: [] }) => {
  const fadeIn = ['fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight'];
  const fadeOut = ['fadeOutUp', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight'];
  const pickFade = (fades, max, min = 0) => {
    return fades[Math.floor(Math.random() * (max - min + 1) + min)];
  };
  const { title, stack } = data;
  const html = stack
    ? stack
        .reduce((prev, curr) => (prev += ', ' + curr.toUpperCase()), '')
        .slice(2)
        .trim()
    : 'sin datos por el momento';
  return window.Swal.fire({
    title,
    icon: 'success',
    html,
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    showClass: {
      popup: `animate__animated animate__${pickFade(
        fadeIn,
        fadeIn.length - 1
      )}`,
    },
    hideClass: {
      popup: `animate__animated animate__${pickFade(
        fadeOut,
        fadeOut.length - 1
      )}`,
    },
  });
};

/**
 * Alerta modal.
 *
 * @param {string} title - título para la alerta.
 *
 * @example
 * SweetAlert('Correcto')
 *
 */
export const SweetAlert = (title = 'Gracias') => {
  return window.Swal.fire({
    title,
    showClass: {
      popup: 'animate__animated animate__fadeInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp',
    },
  });
};

/**
 * Pequeña ventana modal.
 *
 * @param {object} data - datos para el modal.
 *
 * @example
 * Toast({ title: 'Correcto', icon: 'success' })
 *
 */
export const Toast = (data = { title: 'Correct', icon: 'success' }) => {
  const { title, icon } = data;
  const toast = window.Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    showClass: {
      popup: 'animate__animated animate__fadeInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutRight',
    },
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', window.Swal.stopTimer);
      toast.addEventListener('mouseleave', window.Swal.resumeTimer);
    },
  });
  return toast.fire({ title, icon });
};
