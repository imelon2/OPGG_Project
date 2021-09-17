package no4gift.opgg.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class saveData {
    private Long gameId;
    private String gameCreation;
    private String title;
    private String name;
    private Integer champK;
    private Integer champD;
    private Integer champA;
    private String champName;
    private String victory;
}
