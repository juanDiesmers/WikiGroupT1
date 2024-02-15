package com.test.jairo.test.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import com.test.jairo.test.ApplicationRepository.ApplicationRepository;
import com.test.jairo.test.entity.Application;

@Controller
public class FormController {

    private final ApplicationRepository applicationRepository;

    @Autowired
    public FormController(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    // @SuppressWarnings("null")
    @PostMapping("/submit")
    public String handleSubmitForm(Application formData) {
        // Obtener los datos del formulario
        String nombres = formData.getName();
        String apellidos = formData.getApellidos();
        String correo = formData.getCorreo();
        String descripcion = formData.getDescripcion();
        int semestre = formData.getSemestre();
        int edad = formData.getEdad();

        // Crear una nueva instancia de Application con los datos del formulario
        Application application = new Application();
        application.setName(nombres);
        application.setApellidos(apellidos);
        application.setCorreo(correo);
        application.setDescripcion(descripcion);
        application.setSemestre(semestre);
        application.setEdad(edad);

        // Guardar la nueva instancia en la base de datos
        applicationRepository.save(application);

        // Redirigir a otra página
        return "Resultado";
    }
}
