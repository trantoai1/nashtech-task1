
INSERT INTO public.categories VALUES (2, 'Macbook Air', 'là dòng máy tính xách tay của Apple gọn nhẹ sexy như cái tên gọi của nó, mỏng nhẹ như “không khí”');
INSERT INTO public.categories VALUES (1, 'Macbook Pro', 'với chip xử lý thế hệ mới tốc độ cao, hỗ trợ RAM lên đến 64GB, ổ cứng dữ liệu SSD thể rắn lên tới 8TB tốc độ 3TB/s, card đồ hoạ mới lên đến 8GB giúp cho công việc thiết kế và code mượt mà 1 cách hoàn hảo nhất mà Macbook Air khó có thể làm được.');
INSERT INTO public.categories VALUES (3, 'MacBook M1 ARM', 'là dòng MacBook mới nhất hiện nay sử dụng chip M1 do Apple tự sản xuất trên công nghệ hãng ARM');
INSERT INTO public.categories VALUES (4, 'iMac', '');
INSERT INTO public.categories VALUES (5, 'iMac M1', 'Dòng iMac M1 mới nhất 2021 của Apple với màn hình 24 inch 4.5K');
INSERT INTO public.categories VALUES (6, 'iMac Mini', '');
INSERT INTO public.categories VALUES (7, 'iMac Pro', '');
INSERT INTO public.categories VALUES (8, 'iPad', '');
INSERT INTO public.categories VALUES (9, 'iPad Air', '123');


--
-- TOC entry 3387 (class 0 OID 50534)
-- Dependencies: 214
-- Data for Name: feature_detail; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.feature_detail VALUES (3, 2);
INSERT INTO public.feature_detail VALUES (3, 19);
INSERT INTO public.feature_detail VALUES (3, 21);
INSERT INTO public.feature_detail VALUES (3, 40);
INSERT INTO public.feature_detail VALUES (3, 24);
INSERT INTO public.feature_detail VALUES (3, 34);
INSERT INTO public.feature_detail VALUES (4, 4);
INSERT INTO public.feature_detail VALUES (4, 19);
INSERT INTO public.feature_detail VALUES (4, 22);
INSERT INTO public.feature_detail VALUES (4, 39);
INSERT INTO public.feature_detail VALUES (4, 25);
INSERT INTO public.feature_detail VALUES (4, 32);
INSERT INTO public.feature_detail VALUES (5, 1);
INSERT INTO public.feature_detail VALUES (5, 19);
INSERT INTO public.feature_detail VALUES (5, 21);
INSERT INTO public.feature_detail VALUES (5, 40);
INSERT INTO public.feature_detail VALUES (5, 24);
INSERT INTO public.feature_detail VALUES (5, 34);
INSERT INTO public.feature_detail VALUES (2, 2);
INSERT INTO public.feature_detail VALUES (2, 4);
INSERT INTO public.feature_detail VALUES (2, 22);
INSERT INTO public.feature_detail VALUES (2, 24);
INSERT INTO public.feature_detail VALUES (2, 34);
INSERT INTO public.feature_detail VALUES (2, 35);
INSERT INTO public.feature_detail VALUES (6, 5);
INSERT INTO public.feature_detail VALUES (6, 7);
INSERT INTO public.feature_detail VALUES (6, 19);
INSERT INTO public.feature_detail VALUES (6, 27);
INSERT INTO public.feature_detail VALUES (6, 40);
INSERT INTO public.feature_detail VALUES (6, 34);
INSERT INTO public.feature_detail VALUES (9, 3);
INSERT INTO public.feature_detail VALUES (9, 18);
INSERT INTO public.feature_detail VALUES (9, 21);
INSERT INTO public.feature_detail VALUES (9, 27);
INSERT INTO public.feature_detail VALUES (9, 38);
INSERT INTO public.feature_detail VALUES (9, 34);


--
-- TOC entry 3388 (class 0 OID 50537)
-- Dependencies: 215
-- Data for Name: feature_type; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.feature_type VALUES ('GPU', 'GPU', '');
INSERT INTO public.feature_type VALUES ('RAM', 'RAM', 'GB');
INSERT INTO public.feature_type VALUES ('YEAR', 'Year', '');
INSERT INTO public.feature_type VALUES ('RESOLUTION', 'Resolution', '');
INSERT INTO public.feature_type VALUES ('CPU', 'Processor', '');
INSERT INTO public.feature_type VALUES ('ROM', 'Storage', '');
INSERT INTO public.feature_type VALUES ('ROMSSD', 'Storage SSD', '');
INSERT INTO public.feature_type VALUES ('MONITOR', 'Screen Size', '"');


--
-- TOC entry 3376 (class 0 OID 50473)
-- Dependencies: 203
-- Data for Name: features; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.features VALUES (1, '13', 'MONITOR');
INSERT INTO public.features VALUES (2, '13.3', 'MONITOR');
INSERT INTO public.features VALUES (3, '15', 'MONITOR');
INSERT INTO public.features VALUES (4, '16', 'MONITOR');
INSERT INTO public.features VALUES (5, '15.6', 'MONITOR');
INSERT INTO public.features VALUES (6, 'HD', 'RESOLUTION');
INSERT INTO public.features VALUES (7, 'FHD', 'RESOLUTION');
INSERT INTO public.features VALUES (9, '2010', 'YEAR');
INSERT INTO public.features VALUES (10, '2011', 'YEAR');
INSERT INTO public.features VALUES (11, '2012', 'YEAR');
INSERT INTO public.features VALUES (12, '2013', 'YEAR');
INSERT INTO public.features VALUES (13, '2014', 'YEAR');
INSERT INTO public.features VALUES (14, '2015', 'YEAR');
INSERT INTO public.features VALUES (15, '2016', 'YEAR');
INSERT INTO public.features VALUES (16, '2017', 'YEAR');
INSERT INTO public.features VALUES (17, '2018', 'YEAR');
INSERT INTO public.features VALUES (18, '2019', 'YEAR');
INSERT INTO public.features VALUES (19, '2020', 'YEAR');
INSERT INTO public.features VALUES (20, '2021', 'YEAR');
INSERT INTO public.features VALUES (21, '2K', 'RESOLUTION');
INSERT INTO public.features VALUES (22, '4K', 'RESOLUTION');
INSERT INTO public.features VALUES (27, '64', 'RAM');
INSERT INTO public.features VALUES (36, 'Intel Core i3', 'CPU');
INSERT INTO public.features VALUES (37, 'Intel Core i5', 'CPU');
INSERT INTO public.features VALUES (38, 'Intel Core i7', 'CPU');
INSERT INTO public.features VALUES (39, 'Intel Core i9', 'CPU');
INSERT INTO public.features VALUES (40, 'Apple M1', 'CPU');
INSERT INTO public.features VALUES (23, '4', 'RAM');
INSERT INTO public.features VALUES (24, '8', 'RAM');
INSERT INTO public.features VALUES (25, '16', 'RAM');
INSERT INTO public.features VALUES (26, '32', 'RAM');
INSERT INTO public.features VALUES (28, '128 GB', 'ROM');
INSERT INTO public.features VALUES (29, '256 GB', 'ROM');
INSERT INTO public.features VALUES (30, '512 GB', 'ROM');
INSERT INTO public.features VALUES (31, '1 TB', 'ROM');
INSERT INTO public.features VALUES (32, '1 TB', 'ROMSSD');
INSERT INTO public.features VALUES (33, '512 GB', 'ROMSSD');
INSERT INTO public.features VALUES (34, '256 GB', 'ROMSSD');
INSERT INTO public.features VALUES (35, '128 GB', 'ROMSSD');


--
-- TOC entry 3390 (class 0 OID 50547)
-- Dependencies: 217
-- Data for Name: image; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.image VALUES (1, '', 0, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418603_sd.jpg;maxHeight=640;maxWidth=550', 0, 2);
INSERT INTO public.image VALUES (2, '', 0, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418603cv11d.jpg;maxHeight=120;maxWidth=120', 0, 2);
INSERT INTO public.image VALUES (3, '', 0, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366572_sd.jpg;maxHeight=640;maxWidth=550', 0, 4);
INSERT INTO public.image VALUES (4, ' ', 0, 'https://macone.vn/wp-content/uploads/2020/11/macbook-air-gold-m1-2020.jpeg', 0, 5);
INSERT INTO public.image VALUES (5, ' ', 0, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452857_sd.jpg;maxHeight=640;maxWidth=550', 0, 3);
INSERT INTO public.image VALUES (9, NULL, NULL, 'https://i.imgur.com/L2mLJm1.png', NULL, 9);
INSERT INTO public.image VALUES (10, NULL, NULL, 'https://i.imgur.com/VXtgkgb.png', NULL, 6);


--
-- TOC entry 3377 (class 0 OID 50479)
-- Dependencies: 204
-- Data for Name: orderdetails; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.orderdetails VALUES (2, 3, 1);
INSERT INTO public.orderdetails VALUES (2, 2, 1);
INSERT INTO public.orderdetails VALUES (2, 2, 4);
INSERT INTO public.orderdetails VALUES (3, 3, 4);
INSERT INTO public.orderdetails VALUES (2, 4, 5);
INSERT INTO public.orderdetails VALUES (2, 4, 6);
INSERT INTO public.orderdetails VALUES (2, 4, 7);
INSERT INTO public.orderdetails VALUES (3, 2, 8);
INSERT INTO public.orderdetails VALUES (5, 3, 9);
INSERT INTO public.orderdetails VALUES (4, 3, 10);
INSERT INTO public.orderdetails VALUES (8, 3, 11);


--
-- TOC entry 3379 (class 0 OID 50486)
-- Dependencies: 206
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.orders VALUES (7, '88 Man thiện', 'PREPARE                                           ', '2021-07-23 08:56:23.359', 1, '0985023919');
INSERT INTO public.orders VALUES (8, '20 Man thiện', 'PREPARE                                           ', '2021-07-23 11:40:32.253', 19, '0985023919');
INSERT INTO public.orders VALUES (9, '20 Man thiện', 'PREPARE                                           ', '2021-07-23 11:44:25.174', 19, '0985023919');
INSERT INTO public.orders VALUES (10, '100 Man thiện', 'PREPARE                                           ', '2021-07-23 12:50:39.878', 19, '90292892912');
INSERT INTO public.orders VALUES (5, '', 'PREPARE                                           ', '2021-07-22 21:45:10.72', 20, '1');
INSERT INTO public.orders VALUES (6, '', 'PREPARE                                           ', '2021-07-23 07:53:32.868', 20, '2');
INSERT INTO public.orders VALUES (3, 'string', 'PREPARE                                           ', '2021-03-20 00:00:00', 21, '4');
INSERT INTO public.orders VALUES (4, 'string', 'PREPARE                                           ', '2021-07-22 21:27:59.67', 21, '5');
INSERT INTO public.orders VALUES (1, 'string', 'CANCELED                                          ', '2021-03-20 00:00:00', 1, '3');
INSERT INTO public.orders VALUES (11, 'Quận 9', 'PREPARE                                           ', '2021-07-24 10:57:10.025', 1, '0223111222');


--
-- TOC entry 3381 (class 0 OID 50494)
-- Dependencies: 208
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products VALUES (6, NULL, 2222.00, '123123123', 'Edit moi', '2021-07-26 17:12:19.471', 3, 2);
INSERT INTO public.products VALUES (5, NULL, 1199.00, 'Chip Apple M1 là con chip tương tự các sản phẩm gần đây iPhone 12 và iPad Air được xây dựng trên kiến trúc ARM khác so với bộ xử lý Intel trên các sản phẩm trước đó. Apple cho biết chip M1 có bốn lõi hiệu suất cực cao và bốn lõi hiệu suất cao để cân bằng giữa sức mạnh và độ bền. Nó cũng được công bố là con chip cung cấp hiệu suất trên mỗi watt điện tốt nhất thế giới với bất kỳ CPU nào và cho phép tốc độ được đánh thức tức thì, giúp đây là sản phẩm sẽ làm việc ngay khi bạn mở nó ra. Tất cả những điều đó sẽ làm tăng thời lượng pin và hiệu suất mạnh mẽ hơn so với các sản phẩm Macbook Air trước đó', 'MGN63/ MGN93/ MGND3', NULL, 2, 0);
INSERT INTO public.products VALUES (4, '2021-03-21 03:20:20', 2799.00, 'We aim to show you accurate product information. Manufacturers, suppliers and others provide what you see here, and we have not verified it. See our disclaimer ', 'MVVK2LL/A', '2021-07-20 13:48:33.09', 1, 94);
INSERT INTO public.products VALUES (2, '2021-03-21 03:20:20', 1299.00, 'We aim to show you accurate product information. Manufacturers, suppliers and others provide what you see here, and we have not verified it. See our disclaimer
With a Retina display and a thin, lightweight design, the Apple 12" MacBook provides both portability and performance. Measuring just 0.5" (13.1 mm) thin and weighing just 2 pounds, the MacBook is compact yet still has a premium feel, thanks to its unibody design.
12-inch (2304 x 1440) IPS Display
Intel Core M3-6Y30 Processor (Dual-Core, 1.1GHz, 4MB Cache)
8GB DDR3 System Memory
256GB SATA Solid State Drive (SSD)
Integrated Intel HD Graphics 515
Backlit Standard Keyboard and Touchpad
1MP Webcam and Integrated Microphone
No Ethernet, 802.11AACBGN and Bluetooth 4.0 + HS
6-cell Lithium-Polymer Battery
macOS 10.12  Operating System
11" x 0.5" x 7.7" (HxWxD); 2lbs
Energy Star Compliant
12-inch (2304 x 1440) IPS Display
Intel Core M3-6Y30 Processor (Dual-Core, 1.1GHz, 4MB Cache)
8GB DDR3 System Memory
256GB SATA Solid State Drive (SSD)
Integrated Intel HD Graphics 515
Backlit Standard Keyboard and Touchpad
1MP Webcam and Integrated Microphone
No Ethernet, 802.11AACBGN and Bluetooth 4.0 + HS
6-cell Lithium-Polymer Battery
macOS 10.12  Operating System
11" x 0.5" x 7.7" (HxWxD); 2lbs
Energy Star Compliant', 'MYD92LL/A', '2021-07-20 13:42:34.516', 1, 95);
INSERT INTO public.products VALUES (3, '2021-03-21 03:20:20', 1099.00, 'We aim to show you accurate product information. Manufacturers, suppliers and others provide what you see here, and we have not verified it. See our disclaimer
With a Retina display and a thin, lightweight design, the Apple 12" MacBook provides both portability and performance. Measuring just 0.5" (13.1 mm) thin and weighing just 2 pounds, the MacBook is compact yet still has a premium feel, thanks to its unibody design.
12-inch (2304 x 1440) IPS Display
Intel Core M3-6Y30 Processor (Dual-Core, 1.1GHz, 4MB Cache)
8GB DDR3 System Memory
256GB SATA Solid State Drive (SSD)
Integrated Intel HD Graphics 515
Backlit Standard Keyboard and Touchpad
1MP Webcam and Integrated Microphone
No Ethernet, 802.11AACBGN and Bluetooth 4.0 + HS
6-cell Lithium-Polymer Battery
macOS 10.12  Operating System
11" x 0.5" x 7.7" (HxWxD); 2lbs
Energy Star Compliant
12-inch (2304 x 1440) IPS Display
Intel Core M3-6Y30 Processor (Dual-Core, 1.1GHz, 4MB Cache)
8GB DDR3 System Memory
256GB SATA Solid State Drive (SSD)
Integrated Intel HD Graphics 515
Backlit Standard Keyboard and Touchpad
1MP Webcam and Integrated Microphone
No Ethernet, 802.11AACBGN and Bluetooth 4.0 + HS
6-cell Lithium-Polymer Battery
macOS 10.12  Operating System
11" x 0.5" x 7.7" (HxWxD); 2lbs
Energy Star Compliant', 'MYD82LL/A', '2021-07-20 13:46:29.191', 1, 80);
INSERT INTO public.products VALUES (9, NULL, 2222.00, '123123', 'Test Image', '2021-07-27 13:47:48.417', 1, 2222);


--
-- TOC entry 3382 (class 0 OID 50503)
-- Dependencies: 209
-- Data for Name: rates; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.rates VALUES ('5', 5, 1, 2);
INSERT INTO public.rates VALUES ('2', 2, 19, 2);


--
-- TOC entry 3392 (class 0 OID 50558)
-- Dependencies: 219
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.roles VALUES (3, 'ROLE_ADMIN');
INSERT INTO public.roles VALUES (2, 'ROLE_PM');
INSERT INTO public.roles VALUES (1, 'ROLE_USER');


--
-- TOC entry 3384 (class 0 OID 50510)
-- Dependencies: 211
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."user" VALUES (1, '123@gmail.com', '$2a$10$PsbWmb39aRuXZbg5tENJeuYyNcXW4D7qbT6G0/XYk2GhOQQlPEaE6', 'admin1');
INSERT INTO public."user" VALUES (2, '123s45@gmail.com', '$2a$10$IBzdhcESpAB/Z9FBHAlsieQDmW4Nosol3cbPE2zWhwB0IpEnzydua', 'admin');
INSERT INTO public."user" VALUES (3, '1232s45@gmail.com', '$2a$10$Qv0qTrxBSkhEemLmOs0AUuQh9OWUUqTMSXTBebDlPGQj8Ih.SIpha', 'admin3');
INSERT INTO public."user" VALUES (4, '1232245@gmail.com', '$2a$10$cNMyJd.9HISn/uG3qsZmYe.oTIi7FCJWTSDqHHywx/VqvtDVfXpq6', 'admin4');
INSERT INTO public."user" VALUES (6, 'admin@admin.com', '$2a$10$p5x8QuxnpBlcS2QOdzZIFuUUMoC3UOvSyq.saXIXj27DN2a6.kmXi', 'admin2');
INSERT INTO public."user" VALUES (7, 'vnplaygame@gmail.com', '$2a$10$F9tenzxcxKdUqWul7gn97u9T8y/p.l4mTZt2iHM5hdDDLxpT3QWc2', 'admin6');
INSERT INTO public."user" VALUES (8, 'vnplayg2ame@gmail.com', '$2a$10$V3TbLjFuBQwuk2vMilfM0uQgjFfLdW.AL8nuNgTcA/6Kbj3Ag5yAq', 'admin1231213');
INSERT INTO public."user" VALUES (9, 'vnplay2game@gmail.com', '$2a$10$15MBJe5Q3bh3LKCn8IO3p.PfcGr2Di6QO6tf5rmiOooElNNUef4pi', '123456');
INSERT INTO public."user" VALUES (10, '123@yahoo.com', '$2a$10$iCirsEoh5xVjC5AUDatfMeIGtzM6mxS9kd94elOmB.QMdJHzFSXwW', 'customer');
INSERT INTO public."user" VALUES (11, '1234@yahoo.com', '$2a$10$QjzBmGGRKf7N4rgJtGpiwuLIUZgbRYqJY4c8dnR1bFpJXPPACyBOe', 'customer2');
INSERT INTO public."user" VALUES (12, '12343@yahoo.com', '$2a$10$X7fXWQIExWRFIWN2Lb.UC.3wR9ivuuiYqFBCsFfXbUTIjK6rlz7fi', 'customer3');
INSERT INTO public."user" VALUES (13, '1235@yahoo.com', '$2a$10$dPSQWR9HQdQZTeoy.A98SuWQNcTdivbQ/ESNzVeVzP6OSEOp8u1.e', 'customer4');
INSERT INTO public."user" VALUES (14, '5@yahoo.com', '$2a$10$lsvz2Hrm4mXGBY1/kfGlI.8tSVkng9..sotYSvpfTkPmz0D1DtLCi', 'customer5');
INSERT INTO public."user" VALUES (15, '6@yahoo.com', '$2a$10$qBNRfXi/5opfxHrS6c7hIeCCJw8eKFUIcx34e3szFSoka.H1.3S9S', 'customer6');
INSERT INTO public."user" VALUES (16, '7@yahoo.com', '$2a$10$1HssRX0jF2zNxo7ByauMT.hAkcG40kbAmQAs3qXgtEmS4aXMtt12G', 'customer7');
INSERT INTO public."user" VALUES (17, '8@yahoo.com', '$2a$10$CJVWQPf42Co6P0rOtAQIa.Hb/rQYrbKqTMASUpbhGPkP/USrviFNW', 'customer8');
INSERT INTO public."user" VALUES (19, '10@yahoo.com', '$2a$10$09cNhT/D7WH.o0f0sneRm.IUXHKa7Qcx5QP5R9FaXZQughzgISnGq', 'customer10');
INSERT INTO public."user" VALUES (20, '11@yahoo.com', '$2a$10$Qml96rHGBMacLWgDYDOrMeWN28jivqNtoMp2IwV4iYWwSIu2yEpj2', 'customer11');
INSERT INTO public."user" VALUES (23, '14@yahoo.com', '$2a$10$RUbjM3SJX8kyjYzZOFB7JuVbsX..yhdzr9Vbgv07jSugey3Y7XMGS', 'customer14');
INSERT INTO public."user" VALUES (21, '21@yahoo.com', '$2a$10$/qxnwjR.jhWhqWapUyyja.EN3jBZREnmLbWuANcifKqUbJ6lbJxPq', '33333');
INSERT INTO public."user" VALUES (25, 'trantoai.9x@gmail.com', '$2a$10$fe5PHh1fTjCOARVkFssEguL81ISCHk45QYp.jjc5a4B5/tVL2F01u', 'trantoai');


--
-- TOC entry 3393 (class 0 OID 50564)
-- Dependencies: 220
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.user_roles VALUES (1, 1);
INSERT INTO public.user_roles VALUES (2, 3);
INSERT INTO public.user_roles VALUES (3, 2);
INSERT INTO public.user_roles VALUES (4, 1);
INSERT INTO public.user_roles VALUES (6, 1);
INSERT INTO public.user_roles VALUES (7, 1);
INSERT INTO public.user_roles VALUES (8, 1);
INSERT INTO public.user_roles VALUES (9, 1);
INSERT INTO public.user_roles VALUES (10, 1);
INSERT INTO public.user_roles VALUES (11, 1);
INSERT INTO public.user_roles VALUES (12, 1);
INSERT INTO public.user_roles VALUES (13, 1);
INSERT INTO public.user_roles VALUES (14, 1);
INSERT INTO public.user_roles VALUES (15, 1);
INSERT INTO public.user_roles VALUES (16, 1);
INSERT INTO public.user_roles VALUES (17, 1);
INSERT INTO public.user_roles VALUES (19, 1);
INSERT INTO public.user_roles VALUES (20, 1);
INSERT INTO public.user_roles VALUES (23, 1);
INSERT INTO public.user_roles VALUES (21, 1);
INSERT INTO public.user_roles VALUES (21, 3);
INSERT INTO public.user_roles VALUES (25, 3);


--
-- TOC entry 3386 (class 0 OID 50521)
-- Dependencies: 213
-- Data for Name: userdetails; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.userdetails VALUES (2, 'admin', 'admin', 'admin');
INSERT INTO public.userdetails VALUES (3, 'admin3', 'admin3', 'admin3');
INSERT INTO public.userdetails VALUES (4, 'admin4', 'admin4', 'admin4');
INSERT INTO public.userdetails VALUES (6, 'admin2', 'admin2', 'admin2');
INSERT INTO public.userdetails VALUES (7, 'admin6', 'admin6', 'admin6');
INSERT INTO public.userdetails VALUES (8, 'admin1231213', 'admin1231213', 'admin1231213');
INSERT INTO public.userdetails VALUES (9, '123456', '123456', '123456');
INSERT INTO public.userdetails VALUES (10, 'customer', 'customer', 'customer');
INSERT INTO public.userdetails VALUES (11, 'customer2', 'customer2', 'customer2');
INSERT INTO public.userdetails VALUES (12, 'customer3', 'customer3', 'customer3');
INSERT INTO public.userdetails VALUES (13, 'customer4', 'customer4', 'customer4');
INSERT INTO public.userdetails VALUES (14, 'customer5', 'customer5', 'customer5');
INSERT INTO public.userdetails VALUES (15, 'customer6', 'customer6', 'customer6');
INSERT INTO public.userdetails VALUES (16, 'customer7', 'customer7', 'customer7');
INSERT INTO public.userdetails VALUES (17, 'customer8', 'customer8', 'customer8');
INSERT INTO public.userdetails VALUES (19, '', 'customer11', 'customer11');
INSERT INTO public.userdetails VALUES (20, 'test', 'kskssk', 'ccncn');
INSERT INTO public.userdetails VALUES (23, '', 'customer14', 'customer14');
INSERT INTO public.userdetails VALUES (21, '97 man thiện', 'customer14', 'customer14');
INSERT INTO public.userdetails VALUES (25, '102', 'Toại', 'Trần');
INSERT INTO public.userdetails VALUES (1, 'jsjssj', 'John', 'Smith');
