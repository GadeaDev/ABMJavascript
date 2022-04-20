// "use strict";


// Decxlaracion de VAriables


const url = "http://localhost:3060/api/clientes/";
const contenedor = document.querySelector("tbody");

let resultados = "";

const modalClientes = new bootstrap.Modal(document.getElementById('modalClientes'));
const formCliente = document.querySelector("form");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const rut = document.getElementById("rut");
const tipo = document.getElementById("tipo");
const tlf = document.getElementById("tlf");
let opcion = "";

btnCrear.addEventListener("click", () => {
    nombre.value = "";
    apellido.value = "";
    rut.value = "";
    tipo.value = "";
    tlf.value = "";
    modalClientes.show();
    opcion = "crear";

});

//funcion para mostrar los resultados

const mostrar = (clientes) => {
    clientes.forEach(cliente => {
        resultados += `
                    <tr> 
                        <td class="text-center">${cliente._id} </td>
                        <td class="text-center">${cliente.Nombre} </td>
                        <td class="text-center">${cliente.Apellido} </td>
                        <td class="text-center">${cliente.Rut} </td>
                        <td class="text-center">${cliente.tipo} </td>
                        <td class="text-center">${cliente.Tlf} </td>
                        <td class="text-center"><a class="btnEditar btn btn-primary">Select</a> <a class="btnBorrar btn btn-danger">Delete</a></td>
                    </tr>`
    });
    contenedor.innerHTML = resultados;
};

// Procedimiento para mostrar los registros
fetch(url)
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    });
};


// boton borrar
on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode;
    const id = fila.firstElementChild.innerHTML;
    alertify.confirm("Desea confirmar la accion?",
        function () {
            fetch(url + id, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(() => location.reload())
        },
        function () {
            alertify.error('Cancelar')
        })
});

// boton editar

let idForm=0
on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode;
    idForm = fila.children[0].innerHTML;
    const nombreForm = fila.children[1].innerHTML;
    const apellidoForm = fila.children[2].innerHTML;
    const rutForm = fila.children[3].innerHTML;
    const tipoForm = fila.children[4].innerHTML;
    const tlfForm = fila.children[5].innerHTML;
    nombre.value = nombreForm;
    apellido.value = apellidoForm;
    rut.value = rutForm;
    tipo.value = tipoForm;
    tlf.value = tlfForm;
    opcion = 'Select';
    modalClientes.show();
})

formCliente.addEventListener('submit', (e) => {
    e.preventDefault()
    if (opcion == 'crear') {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Nombre: nombre.value,
                Apellido: apellido.value,
                Rut: rut.value,
                tipo: tipo.value,
                Tlf: tlf.value,
            })
        })
            .then(response => response.json())
            .then(data => {
                const nuevoCliente = []
                nuevoCliente.push(data)
            })
            .then(() => location.reload())
    }
    if (opcion == "Select") {
        fetch(url + idForm, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Nombre: nombre.value,
                Apellido: apellido.value,
                Rut: rut.value,
                tipo: tipo.value,
                Tlf: tlf.value,
            })
        })
            .then(response => response.json())
            .then(response => location.reload())
            .catch(error => console.log(error))
    }
    modalClientes.hide()
})