package no4gift.opgg.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import no4gift.opgg.domain.ChampIdAndNameVO;
import no4gift.opgg.domain.ChampListVO;
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
    public List<String> getChampNamelistFromId(ArrayList<Integer> vo) {

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

}