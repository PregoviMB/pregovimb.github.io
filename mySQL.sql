CREATE DATABASE mb_world_db;

CREATE TABLE mb_users(
	user_id int(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user_name varchar(255) NOT NULL,
	user_pass varchar(255) NOT NULL,
	user_mail varchar(255) NOT NULL,
	user_last_visit datetime DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE mb_images(
	img_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	img_title varchar(255) NOT NULL,
	img_description varchar(255) NOT NULL,
	img_src varchar(255) NOT NULL,
	img_date datetime DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE mb_biographie(
	bio_fr text NOT NULL,
	bio_en text NOT NULL,
	bio_es text NOT NULL,
	bio_ru text NOT NULL,
	bio_ki text NOT NULL,
	bio_uploaded datetime DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8;