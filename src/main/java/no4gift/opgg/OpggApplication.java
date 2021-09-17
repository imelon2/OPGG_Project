package no4gift.opgg;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
@MapperScan(basePackages = "no4gift.opgg.mapper")
public class OpggApplication {

	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(OpggApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(OpggApplication.class, args);
	}

}
