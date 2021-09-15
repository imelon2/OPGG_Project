package no4gift.opgg.service;

import java.util.ArrayList;
import java.util.List;

import no4gift.opgg.domain.ChampListVO;

public interface MyService {

    void updateChampList(ArrayList<ChampListVO> vo);

    List<String> getChampNamelistFromId(ArrayList<Integer> vo);

}
