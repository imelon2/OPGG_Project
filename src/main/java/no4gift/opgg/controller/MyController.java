package no4gift.opgg.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import no4gift.opgg.domain.ChampIdAndNameVO;
import no4gift.opgg.domain.ChampListVO;
import no4gift.opgg.service.MyService;

@Controller
@Log4j2
@AllArgsConstructor
public class MyController {

    @Autowired
    private MyService service;

    @GetMapping("/{name}.html")
    public String page(@PathVariable String name, Model model) {
        model.addAttribute("pageName", name);
        return "index";
    }

    @PostMapping(value = "/update/champList", produces = { "application/json; charset=utf-8" })
    @ResponseBody
    public void updateChampList(@RequestBody ArrayList<ChampListVO> vo) {
        service.updateChampList(vo);
    }

    @PostMapping(value = "/getdata/champNameList", produces = { "application/json; charset=utf-8" })
    @ResponseBody
    public List<String> getChampNamelistFromId(@RequestBody ArrayList<Integer> vo) {
        return service.getChampNamelistFromId(vo);
    }

}