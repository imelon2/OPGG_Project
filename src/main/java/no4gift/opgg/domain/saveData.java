package no4gift.opgg.domain;

import java.sql.Date;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class saveData {
    private Long gameId;
    private Date gameCreation;
    private String title;
    private String name;
    private Integer K;
    private Integer D;
    private Integer A;
    private String champ;
    private String victory;
}
