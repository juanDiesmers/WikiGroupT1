package com.test.jairo.test.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/plantillas")
public class HomeController {

    @GetMapping("/Home")
    public String losPipolSoloTexto() {
        return "Home";
    }

    @GetMapping("/2Encuesta")
    public ModelAndView losPipolTemplateModelAndView() {
        return new ModelAndView("2Encuesta");
    }

    @GetMapping("/Resultado")
    public String textoResultado() {
        return "Resultado";
    }
}
