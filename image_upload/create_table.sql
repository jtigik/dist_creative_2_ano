USE test;

CREATE TABLE IF NOT EXISTS profile_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_data TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_image (id)
);