package no4gift.opgg;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = "no4gift.opgg.mapper")
public class OpggApplication {

	public static void main(String[] args) {
		System.setProperty("server.servlet.context-path", "/wonhyeok");
		SpringApplication.run(OpggApplication.class, args);
	}

}
