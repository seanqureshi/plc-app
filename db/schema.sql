CREATE TABLE camp_users (
	"user_id" SERIAL PRIMARY KEY,
	"username" VARCHAR(180),
	"email" VARCHAR(180),
	"profile_img" TEXT,
	"auth_id" VARCHAR(180)
);

CREATE TABLE campaigns (
	"camp_id" SERIAL PRIMARY KEY,
	"camp_name" VARCHAR(300),
	"desired_amt" INTEGER,
	"current_amt" INTEGER DEFAULT 0,
	"user_id" INTEGER,
	"overview" TEXT DEFAULT 'Wage peace and unmake violence with me! Preemptive Love Coalition is a global, humanitarian organization that seeks to show up in some of the worlds most polarizing conflicts and love anyways. Save lives with me today!',
	"cover_img" TEXT
);

CREATE TABLE donations (
	"donation_id" SERIAL PRIMARY KEY,
	"donation_amt" INTEGER DEFAULT 0,
	"comments" VARCHAR(1000),
	"user_id" INTEGER,
	"camp_id" INTEGER
);

ALTER TABLE campaigns ADD CONSTRAINT campaigns_fk0 FOREIGN KEY ("user_id") REFERENCES "camp_users"("user_id");
ALTER TABLE donations ADD CONSTRAINT donations_fk0 FOREIGN KEY ("user_id") REFERENCES "camp_users"("user_id");
ALTER TABLE donations ADD CONSTRAINT donations_fk1 FOREIGN KEY ("camp_id") REFERENCES "camp_users"("user_id");



