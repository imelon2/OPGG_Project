package no4gift.opgg.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import no4gift.opgg.domain.ChampListVO;

@Mapper
@Repository
public interface MyMapper {

    void updateChampList(ArrayList<ChampListVO> vo);

}
