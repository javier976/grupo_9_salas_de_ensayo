const path = require('path');

const about = {
    titulo: '1771 Studios, un espacio',
    descripcion: 'creado por y para músicos',
}

const listaSalas = [
    {
        id: 1,
        titulo: 'Reservar Sala Platinum',
        descripcionCorta: '38 mts2',
        descripcionDetallada: 'Bateria TAMA Superstar Custom Amplificador de guitarra Orange Dual Terror con Cabina Orange 4x12 Amplificador de guitarra Marshall DSL100 con cabina Marshall 1960A 4x12 Amplificador de bajo Ampeg PF500 con Cabina Ampeg 800 watts. Monitores Cerwin Vega (PA+Drum Fill+ Sub-Woofer) Consola Digital Line 6 M20d',
        precio: '$40.000',
        img: 'Sala Platinum.jpeg'
    },
    {
        id: 2,
        titulo: 'Reservar Sala Gold',
        descripcionCorta: '46 mts2',
        descripcionDetallada: 'Bateria YAMAHA Stage Amplificador de guitarra Yamaha GA Series GA-15 5x15 Amplificador Fender Champion 20 para guitarra 32.5 cm de alto x 35 cm de ancho x 19 cm de profundidad Amplificador Ampeg Bassamp Series BA-108 Transistor para bajo 42.7 cm de alto x 38.1 cm de ancho x 30.5 cm de profundidad Monitores Cerwin Vega (PA+Drum Fill+ Sub-Woofer) Consola Digital Line 6 M20d',
        precio: '$45.000',
        img: 'Sala Gold.jpeg'
    },
    {
        id: 3,
        titulo: 'Reservar Sala Premium',
        descripcionCorta: '52 mts2',
        descripcionDetallada: 'Pearl Export Lacquer 5-Pc. Shell Pack Hardware Teclado Musical Casio Ctk-3500 Amplificador de guitarra Yamaha GA Series GA-15 5x15 Amplificador Fender Champion 20 para guitarra 32.5 cm de alto x 35 cm de ancho x 19 cm de profundidad Amplificador Ampeg Bassamp Series BA-108 Transistor para bajo 42.7 cm de alto x 38.1 cm de ancho x 30.5 cm de profundidad Monitores Cerwin Vega (PA+Drum Fill+ Sub-Woofer) Consola Digital Line 6 M20d',
        precio: '$50.000',
        img: 'Sala Premium.jpeg'
    },
]

const listaCursos = [
    {
        id: 1,
        titulo: 'Guitarra',
        descripcionClase: 'En tus clases tendrás un encuentro personalizado con el docente a cargo con quién trabajarás técnica y repertorio a tu elección. El docente diseña ejercicios específicos para que logres aprender en forma dinámica, práctica y veloz. Podés optar por la modalidad online o presencial con protocolo. En algunas actividades tendrás la opción de optar por la modalidad grupal, son grupos super reducidos de hasta 2 o 3 alumnos por curso.Los horarios son a combinar con el docente.',
        descripcionDocentes: 'Nuestros docentes son profesionales recibidos que se adaptaran al nivel en el que te encuentres. Inicial/Intermedio /Avanzado. Desde tu primera clase notarás el avance. Respecto a tu edad… NO HAY EDAD PARA LA MÚSICA.', 
        concierto: 'La escuela te ofrecerá múltiples opciones para que te animes a mostrar lo aprendido. No es obligatorio participar, pero creemos que subir al escenario es parte del aprendizaje musical, por lo que dos veces por año realizamos conciertos que son temáticos para que puedas explorar cada género (jazz/soul/rock nacional/pop/tango/folclore/melódico y más). Cada alumno presenta el repertorio trabajado con el acompañamiento profesional de una banda en vivo. Además realizamos talleres bimetrales de género músical, y grabaciones en estudio.',
        precio: '$4.500 x mes'
    },
    {
        id: 2,
        titulo: 'Bajo',
        descripcionClase: 'En tus clases tendrás un encuentro personalizado con el docente a cargo con quién trabajarás técnica y repertorio a tu elección. El docente diseña ejercicios específicos para que logres aprender en forma dinámica, práctica y veloz. Podés optar por la modalidad online o presencial con protocolo. En algunas actividades tendrás la opción de optar por la modalidad grupal, son grupos super reducidos de hasta 2 o 3 alumnos por curso.Los horarios son a combinar con el docente.',
        descripcionDocentes: 'Nuestros docentes son profesionales recibidos que se adaptaran al nivel en el que te encuentres. Inicial/Intermedio /Avanzado. Desde tu primera clase notarás el avance. Respecto a tu edad… NO HAY EDAD PARA LA MÚSICA.', 
        concierto: 'La escuela te ofrecerá múltiples opciones para que te animes a mostrar lo aprendido. No es obligatorio participar, pero creemos que subir al escenario es parte del aprendizaje musical, por lo que dos veces por año realizamos conciertos que son temáticos para que puedas explorar cada género (jazz/soul/rock nacional/pop/tango/folclore/melódico y más). Cada alumno presenta el repertorio trabajado con el acompañamiento profesional de una banda en vivo. Además realizamos talleres bimetrales de género músical, y grabaciones en estudio.',
        precio: '$4.500 x mes'
    },
    {
        id: 3,
        titulo: 'Canto',
        descripcionClase: 'En tus clases tendrás un encuentro personalizado con el docente a cargo con quién trabajarás técnica y repertorio a tu elección. El docente diseña ejercicios específicos para que logres aprender en forma dinámica, práctica y veloz. Podés optar por la modalidad online o presencial con protocolo. En algunas actividades tendrás la opción de optar por la modalidad grupal, son grupos super reducidos de hasta 2 o 3 alumnos por curso.Los horarios son a combinar con el docente.',
        descripcionDocentes: 'Nuestros docentes son profesionales recibidos que se adaptaran al nivel en el que te encuentres. Inicial/Intermedio /Avanzado. Desde tu primera clase notarás el avance. Respecto a tu edad… NO HAY EDAD PARA LA MÚSICA.', 
        concierto: 'La escuela te ofrecerá múltiples opciones para que te animes a mostrar lo aprendido. No es obligatorio participar, pero creemos que subir al escenario es parte del aprendizaje musical, por lo que dos veces por año realizamos conciertos que son temáticos para que puedas explorar cada género (jazz/soul/rock nacional/pop/tango/folclore/melódico y más). Cada alumno presenta el repertorio trabajado con el acompañamiento profesional de una banda en vivo. Además realizamos talleres bimetrales de género músical, y grabaciones en estudio.',
        precio: '$4.000 x mes'
    },
    {
        id: 4,
        titulo: 'Bateria',
        descripcionClase: 'En tus clases tendrás un encuentro personalizado con el docente a cargo con quién trabajarás técnica y repertorio a tu elección. El docente diseña ejercicios específicos para que logres aprender en forma dinámica, práctica y veloz. Podés optar por la modalidad online o presencial con protocolo. En algunas actividades tendrás la opción de optar por la modalidad grupal, son grupos super reducidos de hasta 2 o 3 alumnos por curso.Los horarios son a combinar con el docente.',
        descripcionDocentes: 'Nuestros docentes son profesionales recibidos que se adaptaran al nivel en el que te encuentres. Inicial/Intermedio /Avanzado. Desde tu primera clase notarás el avance. Respecto a tu edad… NO HAY EDAD PARA LA MÚSICA.', 
        concierto: 'La escuela te ofrecerá múltiples opciones para que te animes a mostrar lo aprendido. No es obligatorio participar, pero creemos que subir al escenario es parte del aprendizaje musical, por lo que dos veces por año realizamos conciertos que son temáticos para que puedas explorar cada género (jazz/soul/rock nacional/pop/tango/folclore/melódico y más). Cada alumno presenta el repertorio trabajado con el acompañamiento profesional de una banda en vivo. Además realizamos talleres bimetrales de género músical, y grabaciones en estudio.',
        precio: '$5.000 x mes'
    },
    {
        id: 5,
        titulo: 'Teclado',
        descripcionClase: 'En tus clases tendrás un encuentro personalizado con el docente a cargo con quién trabajarás técnica y repertorio a tu elección. El docente diseña ejercicios específicos para que logres aprender en forma dinámica, práctica y veloz. Podés optar por la modalidad online o presencial con protocolo. En algunas actividades tendrás la opción de optar por la modalidad grupal, son grupos super reducidos de hasta 2 o 3 alumnos por curso.Los horarios son a combinar con el docente.',
        descripcionDocentes: 'Nuestros docentes son profesionales recibidos que se adaptaran al nivel en el que te encuentres. Inicial/Intermedio /Avanzado. Desde tu primera clase notarás el avance. Respecto a tu edad… NO HAY EDAD PARA LA MÚSICA.', 
        concierto: 'La escuela te ofrecerá múltiples opciones para que te animes a mostrar lo aprendido. No es obligatorio participar, pero creemos que subir al escenario es parte del aprendizaje musical, por lo que dos veces por año realizamos conciertos que son temáticos para que puedas explorar cada género (jazz/soul/rock nacional/pop/tango/folclore/melódico y más). Cada alumno presenta el repertorio trabajado con el acompañamiento profesional de una banda en vivo. Además realizamos talleres bimetrales de género músical, y grabaciones en estudio.',
        precio: '$4.000 x mes'
    },

]

const mainController = {
    index: (req, res) => {
        res.render('index', { about: about, alquiler: listaSalas, producto: listaCursos});
    },
    carrito: (req, res) => {
        let curso = listaCursos.find(curso => curso.id == req.params.productoId)  //<----- DUDA
        console.log(curso);
        res.render('productCart', { alquiler: listaSalas, curso: curso });
    },
    detalleSala: (req, res) => {
        let sala = listaSalas.find(sala => sala.id == req.params.productoId)  //<----- DUDA
        console.log(sala);
        res.render('productDetail', { sala: sala });
    },
    detalleCurso: (req, res) => {
        let curso = listaCursos.find(curso => curso.id == req.params.productoId)
        console.log(curso);
        res.render('productDetail', { curso: curso });
    },
    registro: (req, res) => {
        res.render('register');
    }
}

module.exports = mainController;