CREATE TABLE `check-in` (
	`id` integer PRIMARY KEY NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`joint-pain` text,
	`hemiplegia` text,
	`fatigue` text,
	`light-sensitivity` text,
	`numbness-tingling` text,
	`brain-fog` text,
	`facial-pain` text,
	`muscle-spasms` text,
	`onset-time` text,
	`bleeding` text,
	`foods` text,
	`sleep` integer NOT NULL,
	`water` text NOT NULL,
	`emotional-stress` text NOT NULL,
	`notes` text
);
