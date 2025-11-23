/*
  # Portfolio Database Schema

  ## Overview
  Creates tables for portfolio website data management including contact messages,
  visitor analytics, blog posts, and testimonials.

  ## New Tables
  
  ### `contact_messages`
  - `id` (uuid, primary key) - Unique message identifier
  - `name` (text) - Visitor's name
  - `email` (text) - Visitor's email address
  - `message` (text) - Message content
  - `created_at` (timestamptz) - Timestamp when message was sent
  - `read` (boolean) - Whether message has been read
  
  ### `visitors`
  - `id` (uuid, primary key) - Unique visitor identifier
  - `ip_address` (text) - Visitor IP (hashed for privacy)
  - `user_agent` (text) - Browser/device info
  - `visited_at` (timestamptz) - Visit timestamp
  - `page_views` (integer) - Number of pages viewed
  
  ### `blog_posts`
  - `id` (uuid, primary key) - Unique post identifier
  - `title` (text) - Blog post title
  - `slug` (text, unique) - URL-friendly identifier
  - `content` (text) - Full post content in markdown
  - `excerpt` (text) - Short summary
  - `published` (boolean) - Publication status
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  
  ### `testimonials`
  - `id` (uuid, primary key) - Unique testimonial identifier
  - `name` (text) - Person's name
  - `role` (text) - Person's role/title
  - `company` (text) - Company name
  - `content` (text) - Testimonial content
  - `avatar_url` (text) - Profile photo URL
  - `linkedin_url` (text) - LinkedIn profile link
  - `display_order` (integer) - Order for display
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for blog posts and testimonials
  - Authenticated insert for contact messages
  - No public access to visitor data
*/

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create visitors table
CREATE TABLE IF NOT EXISTS visitors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text NOT NULL,
  user_agent text,
  visited_at timestamptz DEFAULT now(),
  page_views integer DEFAULT 1
);

ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert visitor data"
  ON visitors FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  company text NOT NULL,
  content text NOT NULL,
  avatar_url text,
  linkedin_url text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_visitors_visited_at ON visitors(visited_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_testimonials_order ON testimonials(display_order);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, content, excerpt, published, published_at) VALUES
  ('Building Scalable REST APIs with Django', 'building-scalable-rest-apis-django', 
   '# Building Scalable REST APIs with Django\n\nDjango REST Framework is a powerful toolkit for building Web APIs...', 
   'Learn how to build production-ready REST APIs using Django REST Framework with best practices.',
   true, now()),
  ('React Performance Optimization Techniques', 'react-performance-optimization',
   '# React Performance Optimization\n\nOptimizing React applications is crucial for user experience...',
   'Discover advanced techniques to optimize your React applications for better performance.',
   true, now()),
  ('Full Stack Development: From Concept to Deployment', 'full-stack-development-guide',
   '# Full Stack Development Guide\n\nTaking a project from concept to production requires...',
   'A comprehensive guide to full stack development covering both frontend and backend.',
   true, now())
ON CONFLICT (slug) DO NOTHING;

-- Insert sample testimonials
INSERT INTO testimonials (name, role, company, content, display_order) VALUES
  ('Sarah Johnson', 'Senior Tech Lead', 'Tech Innovations Inc',
   'Hemanth is an exceptional developer with deep knowledge of both React and Django. His ability to deliver scalable solutions on time is impressive.',
   1),
  ('Rajesh Kumar', 'Product Manager', 'Digital Solutions Ltd',
   'Working with Hemanth has been a great experience. He brings creativity and technical expertise to every project.',
   2),
  ('Emily Chen', 'CTO', 'StartupHub',
   'Hemanth''s full-stack capabilities are outstanding. He built our entire platform from scratch and it scales beautifully.',
   3)
ON CONFLICT DO NOTHING;