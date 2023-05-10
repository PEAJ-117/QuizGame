import Swal from "sweetalert2"

    const buttonCapture = async () => {
        const {  } = await Swal.fire({
            title: '<strong>Formulario</strong>',
            icon: 'info',
            html:
                `
                <label>Pregunta</label> <input type
                <input class = 'swal2-input' placeholder = 'Escriba la pregunta'>
                <br/>
                <label>Respuesta</label> <input type
                <input class = 'swal2-input' placeholder = 'Escriba las respuestas'>
                <br/>
                <button class = 'btn bi bi-plus-square-fill'></button>
                `,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: `No guardar`,
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
}

export default buttonCapture