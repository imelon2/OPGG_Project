package no4gift.opgg.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import no4gift.opgg.domain.ChampIdAndNameVO;
import no4gift.opgg.domain.ChampListVO;
import no4gift.opgg.domain.RuneListVO;
import no4gift.opgg.domain.SpellListVO;
import no4gift.opgg.mapper.MyMapper;

@Service
public class MyServiceImpl implements MyService {

    @Autowired
    private MyMapper mapper;

    @Override
    public void updateChampList(ArrayList<ChampListVO> vo) {
        mapper.updateChampList(vo);

    }

    @Override
    public List<ChampListVO> getChampNamelistFromId(ArrayList<Integer> vo) {

        return mapper.getChampNamelistFromId(vo);

    }

    @Override
    public void saveData(ArrayList<no4gift.opgg.domain.saveData> vo) {
        mapper.saveData(vo);

    }

    @Override
    public Long checkDup(Long id) {

        return mapper.checkDup(id);
    }

    @Override
    public void modifyChampList() {
        mapper.modifyChampList();

    }

    @Override
    public void getspellList(ArrayList<SpellListVO> vo) {
        mapper.getspellList(vo);

    }

    @Override
    public void modifySpellList() {
        mapper.modifySpellList();

    }

    @Override
    public List<String> getSpellNameFromId(ArrayList<Integer> vo) {
        return mapper.getSpellNameFromId(vo);
    }

    @Override
    public void getruneList(ArrayList<RuneListVO> vo) {
        mapper.getruneList(vo);

    }

    @Override
    public void modifyRuneList() {
        mapper.modifyRuneList();

    }

    @Override
    public List<String> getRuneNameFromId(ArrayList<Integer> vo) {

        return mapper.getRuneNameFromId(vo);
    }

}