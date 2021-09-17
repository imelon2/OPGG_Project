package no4gift.opgg.mapper;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import no4gift.opgg.domain.ChampIdAndNameVO;
import no4gift.opgg.domain.ChampListVO;
import no4gift.opgg.domain.saveData;

@Mapper
@Repository
public interface MyMapper {

    void updateChampList(ArrayList<ChampListVO> vo);

    List<String> getChampNamelistFromId(ArrayList<Integer> vo);

    void saveData(ArrayList<saveData> vo);

    Long checkDup(Long id);

}
