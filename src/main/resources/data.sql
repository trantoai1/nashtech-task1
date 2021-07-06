insert  into categories (id,cate_name,description) values (1,'Pizza','');
insert  into categories (id,cate_name,description) values (2,'Trà sữa','');
insert  into categories (id,cate_name,description) values (3,'Nước ngọt','');
INSERT INTO roles (id, name) VALUES
    (3, 'ROLE_ADMIN'),
    (2, 'ROLE_PM'),
    (1, 'ROLE_USER');
INSERT INTO public.users (id,email,"password",username) VALUES
(1,'123@gmail.com','$2a$10$PsbWmb39aRuXZbg5tENJeuYyNcXW4D7qbT6G0/XYk2GhOQQlPEaE6','admin1');
INSERT INTO public.user_roles (user_id,role_id) VALUES
(1,1);