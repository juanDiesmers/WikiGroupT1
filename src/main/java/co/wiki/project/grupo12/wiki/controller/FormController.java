package co.wiki.project.grupo12.wiki.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import co.wiki.project.grupo12.wiki.ApplicationRepository.ApplicationRepository;
import co.wiki.project.grupo12.wiki.entity.Application;

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
        System.out.println(correo);
        String descripcion = formData.getDescripcion();
        int semestre = formData.getSemestre();
        int edad = formData.getEdad();

        // Crear una nueva instancia de Application con los datos del formulario
        LocalDate fecha = formData.getFecha();
        Application application = new Application();
        application.setName(nombres);
        application.setApellidos(apellidos);
        application.setCorreo(correo);
        application.setDescripcion(descripcion);
        application.setSemestre(semestre);
        application.setEdad(edad);
        application.setFecha(fecha);

        // Guardar la nueva instancia en la base de datos
        this.applicationRepository.save(application);

        // Redirigir a otra página
        return "Resultado";
    }
}