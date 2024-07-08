CREATE TABLE `food-diary` (
	`id` integer PRIMARY KEY NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`date` text NOT NULL,
	`day` integer NOT NULL,
	`food` text NOT NULL,
	`digestion` text,
	`joint-pain` text,
	`headache` text,
	`congestion` text,
	`bladder` text,
	`skin` text,
	`energy` text,
	`sleep` text,
	`other` text
);
