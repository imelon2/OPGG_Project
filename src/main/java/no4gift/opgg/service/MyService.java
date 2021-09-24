package no4gift.opgg.service;

import java.util.ArrayList;
import java.util.List;

import no4gift.opgg.domain.ChampListVO;
import no4gift.opgg.domain.RuneListVO;
import no4gift.opgg.domain.SpellListVO;
import no4gift.opgg.domain.saveData;

public interface MyService {

    void updateChampList(ArrayList<ChampListVO> vo);

    List<ChampListVO> getChampNamelistFromId(ArrayList<Integer> vo);

    void saveData(ArrayList<saveData> vo);

    Long checkDup(Long id);

    void modifyChampList();

    void getspellList(ArrayList<SpellListVO> vo);

    void modifySpellList();

    List<String> getSpellNameFromId(ArrayList<Integer> vo);

    void getruneList(ArrayList<RuneListVO> vo);

    void modifyRuneList();

    List<String> getRuneNameFromId(ArrayList<Integer> vo);

}
