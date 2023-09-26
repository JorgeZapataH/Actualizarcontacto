let listaContacto = [
    {
      id: 1,
      nombre: "Jorge",
      apellido: "zapata",
      telefono: 3057116106,
      ubicacion: "Colombia",
      ciudad: "Medellin",
      direccion: "Carrea 84a70gc",
    },
    {
      id: 2,
      nombre: "Juan",
      apellido: "Pitre",
      telefono: 3001569442,
      ubicacion: "Colombia",
      ciudad: "Medellin",
      direccion: "Tranversal 19 #12c-91",
    },
    {
      id: 3,
      nombre: "Wendys",
      apellido: "Rios",
      telefono: 3207648930,
      ubicacion: "Colombia",
      ciudad: "Bogota",
      direccion: "Diagonal 5 #47aa-134",
    },
  ];
  function añadirContacto(contacto) {
    listaContacto.push(contacto);
  }
  
  let nuevoContacto = {
    id: 4,
    nombre: "Kevin",
    apellido: "Zapata",
    telefono: 3205628746,
    ubicacion: "Colombia",
    ciudad: "Barranquilla",
    direccion: "Carrera 21 #72-87",
  };
  
  añadirContacto(nuevoContacto);
  
  function chaoContacto(chao) {
    const posicion = listaContacto.indexOf(chao);
    if (posicion !== -1) {
      listaContacto.splice(posicion, 1);
    }
  }
  chaoContacto(listaContacto[1]);
  console.log(listaContacto);
  
  function actualizarContacto(indiceContacto, nuevaCiudad) {
    if (listaContacto[indiceContacto]) {
      listaContacto[indiceContacto].ciudad = nuevaCiudad;
      console.log("Ciudad actualizado con éxito.");
    } else {
      console.log("Índice de contacto no válido.");
    }
  }
  
  actualizarContacto(1, "Montelibano");