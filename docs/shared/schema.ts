import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull(),
  profileImage: text("profile_image"),
});

export const contents = pgTable("contents", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  releaseYear: integer("release_year").notNull(),
  rating: text("rating").notNull(),
  duration: text("duration"),
  seasons: integer("seasons"),
  match: integer("match").notNull(),
  contentType: text("content_type").notNull(), // movie or tv
  genre: text("genre").array().notNull(),
});

export const episodes = pgTable("episodes", {
  id: serial("id").primaryKey(),
  contentId: integer("content_id").notNull(),
  seasonNumber: integer("season_number").notNull(),
  episodeNumber: integer("episode_number").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  duration: text("duration").notNull(),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  isTop10: boolean("is_top10").default(false),
});

export const categoryContents = pgTable("category_contents", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id").notNull(),
  contentId: integer("content_id").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  profileImage: true,
});

export const insertContentSchema = createInsertSchema(contents);
export const insertEpisodeSchema = createInsertSchema(episodes);
export const insertCategorySchema = createInsertSchema(categories).pick({
  name: true,
});
export const insertCategoryContentSchema = createInsertSchema(categoryContents);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContent = z.infer<typeof insertContentSchema>;
export type Content = typeof contents.$inferSelect;

export type InsertEpisode = z.infer<typeof insertEpisodeSchema>;
export type Episode = typeof episodes.$inferSelect;

export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

export type InsertCategoryContent = z.infer<typeof insertCategoryContentSchema>;
export type CategoryContent = typeof categoryContents.$inferSelect;
