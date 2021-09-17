package no4gift.opgg.service;

import java.util.ArrayList;
import java.util.List;

import no4gift.opgg.domain.ChampListVO;
import no4gift.opgg.domain.saveData;

public interface MyService {

    void updateChampList(ArrayList<ChampListVO> vo);

    List<String> getChampNamelistFromId(ArrayList<Integer> vo);

    void saveData(ArrayList<saveData> vo);

    Long checkDup(Long id);

}
