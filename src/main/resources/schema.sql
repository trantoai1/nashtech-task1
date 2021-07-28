--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

-- Started on 2021-07-28 08:39:03 +07

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 3400 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 50462)
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
                                   id bigint NOT NULL,
                                   cate_name character varying(255),
                                   description text
);


--
-- TOC entry 200 (class 1259 OID 50460)
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3401 (class 0 OID 0)
-- Dependencies: 200
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- TOC entry 214 (class 1259 OID 50534)
-- Name: feature_detail; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.feature_detail (
                                       product_id bigint NOT NULL,
                                       feature_id bigint NOT NULL
);


--
-- TOC entry 215 (class 1259 OID 50537)
-- Name: feature_type; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.feature_type (
                                     id character varying(255) NOT NULL,
                                     name character varying(255),
                                     unit character varying(255)
);


--
-- TOC entry 203 (class 1259 OID 50473)
-- Name: features; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.features (
                                 feature_id bigint NOT NULL,
                                 specific character varying(255),
                                 feature_type_id character varying(255)
);


--
-- TOC entry 202 (class 1259 OID 50471)
-- Name: features_feature_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.features_feature_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3402 (class 0 OID 0)
-- Dependencies: 202
-- Name: features_feature_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.features_feature_id_seq OWNED BY public.features.feature_id;


--
-- TOC entry 221 (class 1259 OID 50739)
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 217 (class 1259 OID 50547)
-- Name: image; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.image (
                              id bigint NOT NULL,
                              alt character varying(255),
                              height integer,
                              url character varying(255),
                              width integer,
                              product_id bigint
);


--
-- TOC entry 216 (class 1259 OID 50545)
-- Name: image_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.image_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3403 (class 0 OID 0)
-- Dependencies: 216
-- Name: image_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.image_id_seq OWNED BY public.image.id;


--
-- TOC entry 204 (class 1259 OID 50479)
-- Name: orderdetails; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orderdetails (
                                     amount integer,
                                     product_id bigint NOT NULL,
                                     order_id bigint NOT NULL
);


--
-- TOC entry 206 (class 1259 OID 50486)
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
                               orderid bigint NOT NULL,
                               address text,
                               status character(50),
                               "time" timestamp without time zone,
                               user_id bigint,
                               phone character varying(255)
);


--
-- TOC entry 205 (class 1259 OID 50484)
-- Name: orders_orderid_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.orders_orderid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3404 (class 0 OID 0)
-- Dependencies: 205
-- Name: orders_orderid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.orders_orderid_seq OWNED BY public.orders.orderid;


--
-- TOC entry 208 (class 1259 OID 50494)
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
                                 id bigint NOT NULL,
                                 create_date timestamp without time zone,
                                 price numeric(19,2),
                                 description text,
                                 name character varying(255),
                                 update_date timestamp without time zone,
                                 category_id bigint,
                                 remain bigint DEFAULT 0 NOT NULL
);


--
-- TOC entry 207 (class 1259 OID 50492)
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3405 (class 0 OID 0)
-- Dependencies: 207
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- TOC entry 209 (class 1259 OID 50503)
-- Name: rates; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.rates (
                              comment text,
                              point integer,
                              user_id bigint NOT NULL,
                              product_id bigint NOT NULL
);


--
-- TOC entry 219 (class 1259 OID 50558)
-- Name: roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.roles (
                              id bigint NOT NULL,
                              name character varying(60)
);


--
-- TOC entry 218 (class 1259 OID 50556)
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3406 (class 0 OID 0)
-- Dependencies: 218
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- TOC entry 211 (class 1259 OID 50510)
-- Name: user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."user" (
                               id bigint NOT NULL,
                               email character varying(255),
                               password character varying(255),
                               username character varying(255)
);


--
-- TOC entry 210 (class 1259 OID 50508)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3407 (class 0 OID 0)
-- Dependencies: 210
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 220 (class 1259 OID 50564)
-- Name: user_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_roles (
                                   user_id bigint NOT NULL,
                                   role_id bigint NOT NULL
);


--
-- TOC entry 213 (class 1259 OID 50521)
-- Name: userdetails; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.userdetails (
                                    id bigint NOT NULL,
                                    address text,
                                    first_name character varying(255),
                                    last_name character varying(255)
);


--
-- TOC entry 212 (class 1259 OID 50519)
-- Name: userdetails_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.userdetails_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3408 (class 0 OID 0)
-- Dependencies: 212
-- Name: userdetails_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.userdetails_id_seq OWNED BY public.userdetails.id;


--
-- TOC entry 3189 (class 2604 OID 50465)
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- TOC entry 3190 (class 2604 OID 50476)
-- Name: features feature_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.features ALTER COLUMN feature_id SET DEFAULT nextval('public.features_feature_id_seq'::regclass);


--
-- TOC entry 3196 (class 2604 OID 50550)
-- Name: image id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.image ALTER COLUMN id SET DEFAULT nextval('public.image_id_seq'::regclass);


--
-- TOC entry 3191 (class 2604 OID 50489)
-- Name: orders orderid; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN orderid SET DEFAULT nextval('public.orders_orderid_seq'::regclass);


--
-- TOC entry 3192 (class 2604 OID 50497)
-- Name: products id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- TOC entry 3197 (class 2604 OID 50561)
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- TOC entry 3194 (class 2604 OID 50513)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3195 (class 2604 OID 50524)
-- Name: userdetails id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.userdetails ALTER COLUMN id SET DEFAULT nextval('public.userdetails_id_seq'::regclass);


--
-- TOC entry 3374 (class 0 OID 50462)
-- Dependencies: 201
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--


--
-- TOC entry 3409 (class 0 OID 0)
-- Dependencies: 200
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categories_id_seq', 37, true);


--
-- TOC entry 3410 (class 0 OID 0)
-- Dependencies: 202
-- Name: features_feature_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.features_feature_id_seq', 40, true);


--
-- TOC entry 3411 (class 0 OID 0)
-- Dependencies: 221
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.hibernate_sequence', 1, true);


--
-- TOC entry 3412 (class 0 OID 0)
-- Dependencies: 216
-- Name: image_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.image_id_seq', 10, true);


--
-- TOC entry 3413 (class 0 OID 0)
-- Dependencies: 205
-- Name: orders_orderid_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.orders_orderid_seq', 11, true);


--
-- TOC entry 3414 (class 0 OID 0)
-- Dependencies: 207
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_id_seq', 9, true);


--
-- TOC entry 3415 (class 0 OID 0)
-- Dependencies: 218
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.roles_id_seq', 1, false);


--
-- TOC entry 3416 (class 0 OID 0)
-- Dependencies: 210
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.user_id_seq', 26, true);


--
-- TOC entry 3417 (class 0 OID 0)
-- Dependencies: 212
-- Name: userdetails_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.userdetails_id_seq', 21, true);


--
-- TOC entry 3199 (class 2606 OID 50470)
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- TOC entry 3221 (class 2606 OID 50544)
-- Name: feature_type feature_type_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.feature_type
    ADD CONSTRAINT feature_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3201 (class 2606 OID 50478)
-- Name: features features_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.features
    ADD CONSTRAINT features_pkey PRIMARY KEY (feature_id);


--
-- TOC entry 3223 (class 2606 OID 50555)
-- Name: image image_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.image
    ADD CONSTRAINT image_pkey PRIMARY KEY (id);


--
-- TOC entry 3203 (class 2606 OID 50483)
-- Name: orderdetails orderdetails_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orderdetails
    ADD CONSTRAINT orderdetails_pkey PRIMARY KEY (order_id, product_id);


--
-- TOC entry 3205 (class 2606 OID 50491)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (orderid);


--
-- TOC entry 3207 (class 2606 OID 50502)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 3209 (class 2606 OID 50507)
-- Name: rates rates_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rates
    ADD CONSTRAINT rates_pkey PRIMARY KEY (product_id, user_id);


--
-- TOC entry 3225 (class 2606 OID 50563)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 3227 (class 2606 OID 50570)
-- Name: roles uk_nb4h0p6txrmfc0xbrd1kglp9t; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT uk_nb4h0p6txrmfc0xbrd1kglp9t UNIQUE (name);


--
-- TOC entry 3211 (class 2606 OID 50533)
-- Name: user uk_sb8bbouer5wak8vyiiy4pf2bx; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT uk_sb8bbouer5wak8vyiiy4pf2bx UNIQUE (username);


--
-- TOC entry 3213 (class 2606 OID 50531)
-- Name: user ukob8kqyqqgmefl0aco34akdtpe; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT ukob8kqyqqgmefl0aco34akdtpe UNIQUE (email);


--
-- TOC entry 3215 (class 2606 OID 50653)
-- Name: user uksb8bbouer5wak8vyiiy4pf2bx; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT uksb8bbouer5wak8vyiiy4pf2bx UNIQUE (username);


--
-- TOC entry 3217 (class 2606 OID 50518)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 3229 (class 2606 OID 50568)
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id);


--
-- TOC entry 3219 (class 2606 OID 50529)
-- Name: userdetails userdetails_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.userdetails
    ADD CONSTRAINT userdetails_pkey PRIMARY KEY (id);


--
-- TOC entry 3236 (class 2606 OID 50601)
-- Name: rates fk4mdsmkrr7od84tpgxto2v3t2e; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rates
    ADD CONSTRAINT fk4mdsmkrr7od84tpgxto2v3t2e FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- TOC entry 3242 (class 2606 OID 50631)
-- Name: user_roles fk55itppkw3i07do3h7qoclqd4k; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fk55itppkw3i07do3h7qoclqd4k FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3231 (class 2606 OID 50576)
-- Name: orderdetails fk92im1bt9gndrexccag7x5oq92; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orderdetails
    ADD CONSTRAINT fk92im1bt9gndrexccag7x5oq92 FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- TOC entry 3238 (class 2606 OID 50611)
-- Name: feature_detail fkbmdlnfis4p1klflyrp7vgy4wg; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.feature_detail
    ADD CONSTRAINT fkbmdlnfis4p1klflyrp7vgy4wg FOREIGN KEY (feature_id) REFERENCES public.features(feature_id);


--
-- TOC entry 3233 (class 2606 OID 50586)
-- Name: orders fkel9kyl84ego2otj2accfd8mr7; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fkel9kyl84ego2otj2accfd8mr7 FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3235 (class 2606 OID 50596)
-- Name: rates fkewuhni7bb944dnw9ntjiby1n; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rates
    ADD CONSTRAINT fkewuhni7bb944dnw9ntjiby1n FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3241 (class 2606 OID 50626)
-- Name: user_roles fkh8ciramu9cc9q3qcqiv4ue8a6; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6 FOREIGN KEY (role_id) REFERENCES public.roles(id);


--
-- TOC entry 3237 (class 2606 OID 50606)
-- Name: userdetails fkhc0sf4q0py23ujt138gp7qfjr; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.userdetails
    ADD CONSTRAINT fkhc0sf4q0py23ujt138gp7qfjr FOREIGN KEY (id) REFERENCES public."user"(id);


--
-- TOC entry 3232 (class 2606 OID 50581)
-- Name: orderdetails fkhnsosbuy7bhpqpnt3bjr7sh8x; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orderdetails
    ADD CONSTRAINT fkhnsosbuy7bhpqpnt3bjr7sh8x FOREIGN KEY (order_id) REFERENCES public.orders(orderid);


--
-- TOC entry 3230 (class 2606 OID 50571)
-- Name: features fkmik9t9bcp94nbvt27w0fk4ocg; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.features
    ADD CONSTRAINT fkmik9t9bcp94nbvt27w0fk4ocg FOREIGN KEY (feature_type_id) REFERENCES public.feature_type(id);


--
-- TOC entry 3240 (class 2606 OID 50621)
-- Name: image fko6o5cjl2h3n5g87df5afdt17f; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.image
    ADD CONSTRAINT fko6o5cjl2h3n5g87df5afdt17f FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- TOC entry 3234 (class 2606 OID 50591)
-- Name: products fkog2rp4qthbtt2lfyhfo32lsw9; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT fkog2rp4qthbtt2lfyhfo32lsw9 FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- TOC entry 3239 (class 2606 OID 50616)
-- Name: feature_detail fks5ra90nnt9jivw55p2ltyjqee; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.feature_detail
    ADD CONSTRAINT fks5ra90nnt9jivw55p2ltyjqee FOREIGN KEY (product_id) REFERENCES public.products(id);


-- Completed on 2021-07-28 08:39:03 +07

--
-- PostgreSQL database dump complete
--

