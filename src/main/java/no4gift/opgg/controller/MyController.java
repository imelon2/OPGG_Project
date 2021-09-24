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
import no4gift.opgg.domain.RuneListVO;
import no4gift.opgg.domain.SpellListVO;
import no4gift.opgg.domain.saveData;
import no4gift.opgg.service.MyService;

@Controller
@Log4j2
@AllArgsConstructor
public class MyController {

    @Autowired
    private MyService service;

    @GetMapping("/{name}")
    public String page(@PathVariable String name, Model model) {
        model.addAttribute("pageName", name);
        return "index";
    }

    @PostMapping(value = "/update/champList", produces = { "application/json; charset=utf-8" })
    @ResponseBody
    public void updateChampList(@RequestBody ArrayList<ChampListVO> vo) {
        // 기존 데이터 삭제
        service.modifyChampList();
        // 새로운 데이터 업데이트
        service.updateChampList(vo);
    }

    @PostMapping(value = "/update/spellList", produces = { "application/json; charset=utf-8" })
    @ResponseBody
    public void getspellList(@RequestBody ArrayList<SpellListVO> vo) {
        // 기존 데이터 삭제
        service.modifySpellList();
        // 새로운 데이터 업데이트
        service.getspellList(vo);
    }

    @PostMapping(value = "/update/runeList", produces = { "application/json; charset=utf-8" })
    @ResponseBody
    public void getruneList(@RequestBody ArrayList<RuneListVO> vo) {
        // 기존 데이터 삭제
        service.modifyRuneList();
        // 새로운 데이터 업데이트
        service.getruneList(vo);
    }

    @PostMapping(value = "/getdata/champNameList", produces = { "application/json; charset=utf-8" })
    @ResponseBody
    public List<ChampListVO> getChampNamelistFromId(@RequestBody ArrayList<Integer> vo) {
        return service.getChampNamelistFromId(vo);
    }

    @PostMapping(value = "/getdata/spellName", produces = { "application/json; charset=utf-8" })
    @ResponseBody
    public List<String> getSpellNameFromId(@RequestBody ArrayList<Integer> vo) {
        return service.getSpellNameFromId(vo);
    }

    @PostMapping(value = "/getdata/runeName", produces = { "application/json; charset=utf-8" })
    @ResponseBody
    public List<String> getRuneNameFromId(@RequestBody ArrayList<Integer> vo) {
        return service.getRuneNameFromId(vo);
    }

    @PostMapping(value = "/getdata/saveData", produces = { "application/json; charset=utf-8" })
    @ResponseBody
    public void saveData(@RequestBody ArrayList<saveData> vo) {
        service.saveData(vo);
    }

    @PostMapping(value = "/getdata/checkDup", produces = { "application/json; charset=utf-8" })
    @ResponseBody
    public Long checkDup(@RequestBody Long id) {

        log.info(id);
        return service.checkDup(id);
    }
}