-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION trantoai;

-- DROP SEQUENCE public.categories_id_seq;

CREATE SEQUENCE public.categories_id_seq
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    START 1
    CACHE 1
    NO CYCLE;
-- DROP SEQUENCE public.features_feature_id_seq;

CREATE SEQUENCE public.features_feature_id_seq
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    START 1
    CACHE 1
    NO CYCLE;
-- DROP SEQUENCE public.hibernate_sequence;

CREATE SEQUENCE public.hibernate_sequence
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    START 1
    CACHE 1
    NO CYCLE;
-- DROP SEQUENCE public.image_id_seq;

CREATE SEQUENCE public.image_id_seq
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    START 1
    CACHE 1
    NO CYCLE;
-- DROP SEQUENCE public.orders_orderid_seq;

CREATE SEQUENCE public.orders_orderid_seq
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    START 1
    CACHE 1
    NO CYCLE;
-- DROP SEQUENCE public.products_id_seq;

CREATE SEQUENCE public.products_id_seq
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    START 1
    CACHE 1
    NO CYCLE;
-- DROP SEQUENCE public.userdetails_id_seq;

CREATE SEQUENCE public.userdetails_id_seq
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    START 1
    CACHE 1
    NO CYCLE;-- public.categories definition

-- Drop table

-- DROP TABLE public.categories;

CREATE TABLE public.categories (
                                   id bigserial NOT NULL,
                                   cate_name varchar(255) NULL,
                                   description varchar(255) NULL,
                                   CONSTRAINT categories_pkey PRIMARY KEY (id)
);


-- public.features definition

-- Drop table

-- DROP TABLE public.features;

CREATE TABLE public.features (
                                 feature_id bigserial NOT NULL,
                                 description varchar(255) NULL,
                                 "name" varchar(255) NULL,
                                 CONSTRAINT features_pkey PRIMARY KEY (feature_id)
);


-- public.users definition

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users (
                              id int8 NOT NULL,
                              "password" varchar(255) NULL,
                              "role" int4 NULL,
                              username varchar(255) NULL,
                              CONSTRAINT uk_r43af9ap4edm43mmtq01oddj6 UNIQUE (username),
                              CONSTRAINT users_pkey PRIMARY KEY (id)
);


-- public.orders definition

-- Drop table

-- DROP TABLE public.orders;

CREATE TABLE public.orders (
                               orderid bigserial NOT NULL,
                               address varchar(255) NULL,
                               status int4 NULL,
                               "time" timestamp NULL,
                               user_id int8 NULL,
                               CONSTRAINT orders_pkey PRIMARY KEY (orderid),
                               CONSTRAINT fk32ql8ubntj5uh44ph9659tiih FOREIGN KEY (user_id) REFERENCES public.users(id)
);


-- public.products definition

-- Drop table

-- DROP TABLE public.products;

CREATE TABLE public.products (
                                 id bigserial NOT NULL,
                                 create_date timestamp NULL,
                                 price numeric(19, 2) NULL,
                                 description varchar(255) NULL,
                                 "name" varchar(255) NULL,
                                 update_date timestamp NULL,
                                 category_id int8 NULL,
                                 CONSTRAINT products_pkey PRIMARY KEY (id),
                                 CONSTRAINT fkog2rp4qthbtt2lfyhfo32lsw9 FOREIGN KEY (category_id) REFERENCES public.categories(id)
);


-- public.rates definition

-- Drop table

-- DROP TABLE public.rates;

CREATE TABLE public.rates (
                              "comment" varchar(255) NULL,
                              point int4 NULL,
                              product_id int8 NOT NULL,
                              user_id int8 NOT NULL,
                              CONSTRAINT rates_pkey PRIMARY KEY (user_id, product_id),
                              CONSTRAINT uk_b7u9orl3auvn8rxpho4pbeoxv UNIQUE (product_id),
                              CONSTRAINT uk_dllgmiddwd2cneqre3w857gv7 UNIQUE (user_id),
                              CONSTRAINT fk4mdsmkrr7od84tpgxto2v3t2e FOREIGN KEY (product_id) REFERENCES public.products(id),
                              CONSTRAINT fkanlgavwqngljux10mtly8qr6f FOREIGN KEY (user_id) REFERENCES public.users(id)
);


-- public.userdetails definition

-- Drop table

-- DROP TABLE public.userdetails;

CREATE TABLE public.userdetails (
                                    id bigserial NOT NULL,
                                    address varchar(255) NULL,
                                    email varchar(255) NULL,
                                    first_name varchar(255) NULL,
                                    last_name varchar(255) NULL,
                                    CONSTRAINT userdetails_pkey PRIMARY KEY (id),
                                    CONSTRAINT fkmxvqcgfd8t9jq47pafb1at3ky FOREIGN KEY (id) REFERENCES public.users(id)
);


-- public.feature_detail definition

-- Drop table

-- DROP TABLE public.feature_detail;

CREATE TABLE public.feature_detail (
                                       description varchar(255) NULL,
                                       product_id int8 NOT NULL,
                                       feature_id int8 NOT NULL,
                                       CONSTRAINT feature_detail_pkey PRIMARY KEY (product_id, feature_id),
                                       CONSTRAINT fkbmdlnfis4p1klflyrp7vgy4wg FOREIGN KEY (feature_id) REFERENCES public.features(feature_id),
                                       CONSTRAINT fks5ra90nnt9jivw55p2ltyjqee FOREIGN KEY (product_id) REFERENCES public.products(id)
);


-- public.image definition

-- Drop table

-- DROP TABLE public.image;

CREATE TABLE public.image (
                              id bigserial NOT NULL,
                              alt varchar(255) NULL,
                              heigh int4 NULL,
                              url varchar(255) NULL,
                              width int4 NULL,
                              product_id int8 NULL,
                              CONSTRAINT image_pkey PRIMARY KEY (id),
                              CONSTRAINT fko6o5cjl2h3n5g87df5afdt17f FOREIGN KEY (product_id) REFERENCES public.products(id)
);


-- public.orderdetails definition

-- Drop table

-- DROP TABLE public.orderdetails;

CREATE TABLE public.orderdetails (
                                     amount int4 NULL,
                                     product_id int8 NOT NULL,
                                     order_id int8 NOT NULL,
                                     CONSTRAINT orderdetails_pkey PRIMARY KEY (product_id, order_id),
                                     CONSTRAINT fk92im1bt9gndrexccag7x5oq92 FOREIGN KEY (product_id) REFERENCES public.products(id),
                                     CONSTRAINT fkhnsosbuy7bhpqpnt3bjr7sh8x FOREIGN KEY (order_id) REFERENCES public.orders(orderid)
);



