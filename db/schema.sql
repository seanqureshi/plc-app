CREATE TABLE camp_users (
	"user_id" serial primary key,
	"username" varchar(180),
	"email" varchar(180),
	"profile_img" TEXT,
	"cover_img" TEXT,
	"auth_id" varchar(180)
);



CREATE TABLE campaigns (
	"camp_id" serial primary key,
	"camp_name" varchar(300),
	"desired_amt" integer ,
	"current_amt" integer ,
	"user_id" integer
);



CREATE TABLE donations (
	"donation_id" serial primary key,
	"donation_amt" integer,
	"user_id" integer,
	"camp_id" integer
);




ALTER TABLE campaigns ADD CONSTRAINT campaigns_fk0 FOREIGN KEY ("user_id") REFERENCES "camp_users"("user_id");

ALTER TABLE donations ADD CONSTRAINT donations_fk0 FOREIGN KEY ("user_id") REFERENCES "camp_users"("user_id");
ALTER TABLE donations ADD CONSTRAINT donations_fk1 FOREIGN KEY ("camp_id") REFERENCES "camp_users"("user_id");

