class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `Nombre Completo: ${this.nombre} ${this.apellido}`
    }

    addMascota(nombre) {
        this.mascotas.push(nombre);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor});
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre);
    }
}

const describirSujeto = (sujeto) => {
    console.log(`-----------------------------------------------`);
    console.log(` ${sujeto.getFullName()} Tiene ${sujeto.countMascotas()} Mascotas.`);
    for (let i = 0;i<sujeto.mascotas.length;i++) {
        console.log(`--- La Mascota ${i+1} se llama ${sujeto.mascotas[i]}.`)
    }
    console.log(`Tiene ${sujeto.libros.length} Libros.`);
    if (sujeto.libros.length>0) {
        console.log(`Los Nombres de los Libros son:`)
        sujeto.libros.forEach(book => {
            console.log(`------${book.nombre}`);
        }); 
    }
    console.log(`-----------------------------------------------`);
}

const daniela = new Usuario('Daniela', 'Eliana', [], []);
daniela.addBook('The Hunger Games', 'Suzanne Collins');
daniela.addBook('The Lord of The Ring', 'J.R.R. Tolkien');
daniela.addMascota('Milo');
daniela.addMascota('Tommy');

const porras = new Usuario('Moreno', 'Porras', [], []);
porras.addBook('Lanzas Coloradas', 'Arturo Uslar Pietri');
porras.addBook('Harry Potter', 'JK Rowling');
porras.addBook('El Resplandor', 'stephen king');
porras.addMascota('Joy');
porras.addMascota('Laica');

describirSujeto(daniela);
describirSujeto(porras);
