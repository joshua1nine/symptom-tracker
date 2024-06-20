CREATE TABLE `check-in` (
	`id` integer PRIMARY KEY NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`joint-pain` text NOT NULL,
	`hemiplegia` text NOT NULL,
	`fatigue` text NOT NULL,
	`light-sensitivity` text NOT NULL,
	`numbness-tingling` text NOT NULL,
	`brain-fog` text NOT NULL,
	`facial-pain` text NOT NULL,
	`muscle-spasms` text NOT NULL,
	`onset-time` text NOT NULL,
	`bleeding` text NOT NULL,
	`foods` text,
	`sleep` text NOT NULL,
	`water` text NOT NULL,
	`emotional-stress` text NOT NULL,
	`notes` text
);
