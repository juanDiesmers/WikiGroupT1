package co.wiki.project.grupo12.wiki.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/grupo12/plantilla")
public class HomeController {

    @GetMapping("/Home")
    public String losPipolSoloTexto() {
        return "Home";
    }

    @GetMapping("/1presentacion")
    public String losPipolSoloTexto1() {
        return "1presentacion";
    }

    @GetMapping("/2Encuesta")
    public ModelAndView losPipolTemplateModelAndView() {
        return new ModelAndView("2Encuesta");
    }

    @GetMapping("/Resultado")
    public String textoResultado() {
        return "Resultado";
    }

    @GetMapping("/Requerimientos")
    public String RequerimientosR() {
        return "Requerimientos";
    }
}
